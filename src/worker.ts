/**
 * @fileoverview Cura WASM Worker
 */

//Imports
import CuraEngine from './CuraEngine.js';
import definitions from './definitions/index';
import {Observable} from 'observable-fns';
import {expose, Transfer, TransferDescriptor} from 'threads';
import type {definitionsType} from './types';

/**
 * `EmscriptenModule` with a few tweaks
 */
interface EmscriptenModule2 extends EmscriptenModule
{
  callMain(args: string[]): void,
  FS: typeof FS
};

//Instance variables
let engine: EmscriptenModule2;

/**
 * Cura WASM's low-level singleton for interfacing with Cura Engine
 */
const worker = {
  /**
   * Initialize the emscripten module
   * @param verbose Wether to enable verbose logging (Useful for debugging)
   */
  async initialize(verbose: boolean = false): Promise<void>
  {
    //Emscripten config
    const config: Partial<EmscriptenModule2> = {
      noInitialRun: true,
      print: undefined,
      printErr: undefined
    };

    if (!verbose)
    {
      config.print = () => null;
      config.printErr = () => null;
    }

    //Bootstrap CuraEngine
    engine = await CuraEngine(config);
  },

  /**
   * Add 3D printer definition files to the virtual filesystem
   */
  async addDefinitions(): Promise<void>
  {
    engine.FS.mkdir('/definitions');

    for (const rawDefinition in definitions)
    {
      //Cast raw definition type
      const definition = <keyof typeof definitions>rawDefinition;

      const path = `definitions/${definition}.def.json`;

      //Copy file to memory filesystem
      engine.FS.writeFile(path, JSON.stringify(definitions[definition]));
    }
  },

  /**
   * Add the file to the virtual filesystem
   * @param path The path to the file
   * @param data The raw data to write to the file
   */
  async addFile(path: string, data: ArrayBuffer): Promise<void>
  {
    //Convert the ThreadJS transferable (ArrayBuffer) to a Uint8Array
    const bytes = new Uint8Array(data);

    //Write the file
    engine.FS.writeFile(path, bytes);
  },

  /**
   * Observes the callback when the [name] function is called with respect to the globalThis context
   * @param name The name of the function
   */
  observeCallback(name: string): Observable<any>
  {
    //Return an "observable" (EventEmitter++)
    return new Observable(observer =>
    {
      //@ts-ignore: Complains about indexing globalThis with a string
      globalThis[name] = (param: any) =>
      {
        observer.next(param);
      };
    });
  },

  /**
   * Call the main function
   * @param cliArguments Command line arguments to be passed to Cura Engine
   */
  async main(cliArguments: string[]): Promise<void>
  {
    engine.callMain(cliArguments);
  },

  /**
   * Retrieves a file
   * @param path Path to the file
   */
  async getFile(path: string): Promise<TransferDescriptor>
  {
    //Read the file (Uint8Array) and convert to an ArrayBuffer
    const bytes = engine.FS.readFile(path).buffer;

    //Return a ThreadJS transferable (ArrayBuffer)
    return Transfer(bytes);
  },

  /**
   * Remove the file from the virtual filesystem
   * @param path
   */
  async removeFile(path: string): Promise<void>
  {
    engine.FS.unlink(path);
  },

  /**
   * Remove the 3D printer definition files from the virtual file system
   * @param _definitions The printer definitions to remove
   */
  async removeDefinitions(): Promise<void>
  {
    for (const rawDefinition in definitions)
    {
      //Cast raw definition type
      const definition = <keyof typeof definitions>rawDefinition;

      const path = `definitions/${definition}.def.json`;

      //Copy file to memory filesystem
      engine.FS.unlink(path);
    }

    engine.FS.rmdir('/definitions');
  }
};

//Export
expose(worker);