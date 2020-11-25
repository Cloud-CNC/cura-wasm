/**
 * @fileoverview Cura WASM
 */

//Imports
import {BlobWorker, spawn, Thread, Transfer} from 'threads';
import {Definition} from 'cura-wasm-definitions/src/types';
import {EventEmitter} from 'events';
import definitions from 'cura-wasm-definitions/src/definitions/index';
import type {FunctionThread, ModuleThread} from 'threads/dist/types/master';
import type {override} from './types';

//@ts-ignore Import worker (Bundled with `rollup-plugin-bundle-imports`)
import WorkerText from './worker';

/**
 * Default printer definition
 */
const defaultDefinition: Definition = definitions.fdmprinter;

/**
 * Duplicate definition of non-exported ArbitraryThreadType from threads/dist/master/spawn.d.ts
 */
declare type ArbitraryThreadType = FunctionThread<any, any> & ModuleThread<any>;

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
  definition: Definition,

  /**
   * Overrides for the specified 3D printer definition
   */
  overrides: override[],

  /**
   * Wether or not to transfer the ArrayBuffer to the worker
   * 
   * (Prevents duplicating large amounts of memory but empties
   * the ArrayBuffer on the main thread preventing other code from using
   * the ArrayBuffer)
   */
  transfer: boolean

  /**
   * Wether to enable verbose logging or not (Useful for debugging)
   */
  verbose: boolean
}

/**
 * @class Cura compiled to Web Assembly (WASM)
 */
export class CuraWASM extends EventEmitter
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

  constructor(config: Partial<config>)
  {
    super();

    //Store config with defaults
    this.config = {
      definition: defaultDefinition,
      overrides: [],
      transfer: true,
      verbose: false,
      ...config
    };

    this.loaded = false;

    this.oldProgress = 0;
  }

  /**
   * Load emscripten and add definitions (Internal use only)
   */
  private async load(): Promise<void>
  {
    //Initialize worker
    this.worker = await spawn(BlobWorker.fromText(WorkerText));

    await this.worker.initialize(this.config.verbose);
    this.log('Initialized worker!');

    await this.worker.addDefinitions(this.config.definition);
    this.log('Added definitions!');

    //Set loaded flag
    this.loaded = true;
  }

  /**
   * Slice the provided file using the settings specified in the constructor
   * @param file The raw file to slice
   * @param extension The file extension (Used for determining the correct parser)
   * @returns The raw, sliced GCODE
   */
  async slice(file: ArrayBuffer, extension: string): Promise<ArrayBuffer>
  {
    //Make sure we've loaded emscripten
    if (!this.loaded)
    {
      await this.load();
    }

    //If the transfer option is true, convert the model to a ThreadJS transferable otherwise have ThreadsJS clone the arraybuffer
    const bytes = this.config.transfer ? Transfer(file) : file;

    //Observe the progress
    this.worker.observeProgress().subscribe(progress =>
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
    });

    //Run Cura
    const gcode = <Error | ArrayBuffer>await this.worker.run(this.config.overrides, this.config.verbose, bytes, extension.toLowerCase());

    //Handle errors
    if (gcode instanceof Error)
    {
      throw gcode;
    }

    //Return GCODE
    return gcode;
  }

  /**
   * Cleanup all assets and destroy the worker
   */
  async destroy(): Promise<void>
  {
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