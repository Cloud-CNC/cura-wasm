/**
 * @fileoverview Cura WASM
 */

//Imports
import definitions from './definitions/index';
import type {FunctionThread, ModuleThread} from 'threads/dist/types/master';
import {EventEmitter} from 'events';
import {spawn, Thread, Transfer, Worker} from 'threads';
import {v4 as uuid} from 'uuid';
import type StrictEventEmitter from 'strict-event-emitter-types';

/**
 * Duplicate definition of non-exported ArbitraryThreadType from threads/dist/master/spawn.d.ts
 */
declare type ArbitraryThreadType = FunctionThread<any, any> & ModuleThread<any>;

interface events
{
  /**
   * Emitted when Cura Engine updates its progress
   * @param percent Percent ranging from 0 to 100 (Inclusive)
   */
  progress: (percent: number) => void
}

/**
 * Configuration for Cura WASM
 */
interface config
{
  /**
   * The 3D printer definition to use
   * 
   * Default: `fdmprinter`
   */
  definition?: keyof typeof definitions,

  /**
   * Overrides for the specified 3D printer definition
   */
  overrides?: {
    /**
     * The scope of the override
     *
     * If set to `undefined`, the override will apply to all extruders
     *
     * If set to a valid string `e<Number>` (`e0`, `e1`, `e2`, etc.),
     * the override will apply to the corresponding extruder. Counting is
     * zero based, so the first extruder is `e0`
     */
    scope?: string,

    /**
     * The property to override
     */
    key?: string,

    /**
     * The value to override with
     */
    value?: string
  }[],

  /**
   * Wether to enable verbose logging or not (Useful for debugging)
   */
  verbose?: boolean
};

/**
 * @class Cura compiled to Web Assembly (WASM)
 */
export default class CuraWASM extends (EventEmitter as {new(): StrictEventEmitter<EventEmitter, events>})
{
  /**
   * Consumer provided configuration for Cura WASM
   */
  private config: config;

  /**
   * Wether the consumer has called the `load` function or not
   */
  private loaded: boolean;

  /**
   * A number holding the previous progress to prevent duplicate progress events
   */
  private oldProgress: number;

  /**
   * Cura WASM runs in multiple threads to avoid blocking the main thread,
   * this worker is what runs Cura Engine in a separate thread
   */
  //@ts-ignore: Complains about worker not being assigned in constructor
  private worker: ArbitraryThreadType;

  constructor(config: config)
  {
    super();

    //Store config
    this.config = config;

    this.loaded = false;

    this.oldProgress = 0;

    //Defaults
    this.config = {
      definition: 'fdmprinter',
      overrides: [],
      verbose: false,
      ...this.config
    };
  }

  /**
   * Load emscripten and add definitions (Internal use only)
   */
  private async load(): Promise<void>
  {
    //Initialize worker
    this.worker = await spawn(new Worker('./worker.js'));
    await this.worker.initialize(this.config.verbose);
    this.log('Initialized worker!');

    await this.worker.addDefinitions();
    this.log('Added definitions!');

    //Set loaded flag
    this.loaded = true;
  }

  /**
   * Slice the provided STL using the settings specified in the constructor
   * @param stl The raw STL to slice
   * @returns The raw, sliced GCODE
   */
  slice(stl: ArrayBuffer): Promise<ArrayBuffer>
  {
    return new Promise(async (resolve, reject) =>
    {
      //Make sure we've loaded emscripten
      if (!this.loaded)
      {
        await this.load();
      }

      //Convert the model to a ThreadJS transferable (ArrayBuffer)
      const bytes = Transfer(stl);

      //Add model
      this.worker.addFile('Model.stl', bytes);
      this.log('Added model!');

      //Generate event callback function name(s) (C++ will call these, so they need to be unique)
      const progressHandlerName = uuid();

      //Register callbacks
      this.worker.observeCallback(progressHandlerName).subscribe((progress: number) =>
      {
        //Normalize progress
        progress = Math.trunc(100 * progress);

        //Filter out repeat progress updates
        if (this.oldProgress != progress)
        {
          this.log(`Progress: ${progress}%`);

          //Event event
          this.emit('progress', progress);
        }

        //Update old progress
        this.oldProgress = progress;
      });

      this.log('Registered callbacks!');

      //Generate arguments
      const cliArguments = [
        'slice',
        '-j',
        `definitions/${this.config.definition}.def.json`,
        '-l',
        'Model.stl',
        '-o',
        'Model.gcode',
        '--progress',
        progressHandlerName
      ];

      //Append verbose flag
      if (this.config.verbose)
      {
        cliArguments.push('-v');
      }

      //Append overrides
      if (this.config.overrides != null) 
      {
        this.config.overrides.forEach(override =>
        {
          //Global scope applies the setting to all extruders
          if (override.scope == null)
          {
            cliArguments.push('-s', `${override.key}=${override.value}`);
          }
          else
          {
            cliArguments.push('-s', override.scope, `${override.key}=${override.value}`);
          }
        });
      }

      //Slice
      this.log('Starting CuraEngine!');
      await this.worker.main(cliArguments);

      //Read file and return GCODE
      const gcode = await this.worker.getFile('Model.gcode');

      //Return GCODE
      resolve(gcode);
    });
  }

  /**
   * Cleanup all assets and destroy the worker
   */
  async destroy(): Promise<void>
  {
    //Remove model
    await this.worker.removeFile('Model.stl');
    this.log('Removed model!');

    //Remove definitions
    await this.worker.removeDefinitions();
    this.log('Removed definitions!');

    //Destroy the worker
    await Thread.terminate(this.worker);
  }

  /**
   * Verbose logging method (Internal use only)
   * @param msg 
   */
  private log(msg: string): void
  {
    if (this.config.verbose)
    {
      console.log(msg);
    }
  }
}