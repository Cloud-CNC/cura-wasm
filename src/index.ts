/**
 * @fileoverview Cura WASM
 */

//Imports
import {BlobWorker, spawn, Thread, Transfer} from 'threads';
import {CombinedDefinition, Extruder, Printer} from 'cura-wasm-definitions/src/types';
import {EventEmitter} from 'events';
import {printers} from 'cura-wasm-definitions/src/definitions/index';
import type {FunctionThread, ModuleThread} from 'threads/dist/types/master';
import type {Metadata, override} from './types';
import {Observable} from 'observable-fns';

//@ts-ignore Import worker (Bundled with `rollup-plugin-threads`)
import WorkerText from './worker';

/**
 * Default printer definition
 */
const defaultDefinition: CombinedDefinition = {
  extruders: [
    <Extruder>printers.fdmextruder
  ],
  printer: <Printer>printers.fdmprinter
};

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
   * The Cura Engine launch command (Instead of setting overrides)
   * 
   * There's a 99% chance you want to start your command with
   * `slice -j definitions/printer.def.json -l Model.stl -o Model.gcode`
   * regardless of what overrides you're using.
   * 
   * Note: You cannot use overrides with this setting!
   */
  command: string | null,

  /**
   * The 3D printer definition to use
   * 
   * Default: `fdmprinter`
   */
  definition: CombinedDefinition,

  /**
   * Overrides for the specified 3D printer definition (Instead of a launch command)
   * 
   * Note: You cannot use the command setting with this setting!
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

    //Prevent consumer specifying both launch command and overrides
    if (config.command != null && config.overrides != null)
    {
      throw new Error('You CANNOT specify both launch arguments and overrides! (Pick one)');
    }

    //Store config with defaults
    this.config = {
      command: null,
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
   * @returns The raw, sliced GCODE and the print metadata
   */
  async slice(file: ArrayBuffer, extension: string)
  {
    //Make sure we've loaded emscripten
    if (!this.loaded)
    {
      await this.load();
    }

    //If the transfer option is true, convert the model to a ThreadJS transferable otherwise have ThreadsJS clone the arraybuffer
    const bytes = this.config.transfer ? Transfer(file) : file;
    
    //Get worker observers
    const progressObserver = this.worker.observeProgress() as Observable<any>;
    const metadataObserver = this.worker.observeMetadata() as Observable<any>;

    //Observe the progress
    progressObserver.subscribe((progress: number) =>
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

    //Observe the metadata
    let metadata: Metadata | null = null;
    metadataObserver.subscribe((eventMetadata: Metadata) =>
    {
      //Save for later
      metadata = eventMetadata;
    });
    //Run Cura
    const gcode = await this.worker.run(this.config.command, this.config.overrides, this.config.verbose, bytes, extension.toLowerCase()) as Error | ArrayBuffer;

    //Handle errors
    if (gcode instanceof Error)
    {
      throw gcode;
    }

    //Handle edge cases where the metadata event hasn't been fired but Cura Engine has finished slicing
    if (metadata == null)
    {
      this.log('Metadata event has not fired yet! (This is likely a bug!)');
    }

    return {
      gcode,
      metadata
    };
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