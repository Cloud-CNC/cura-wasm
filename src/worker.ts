/**
 * @fileoverview Cura WASM Worker
 */

//Imports
import {convert} from './file';
import {expose, Transfer, TransferDescriptor} from 'threads';
import {generate} from './arguments';
import {Observable} from 'observable-fns';
import {Observer} from 'observable-fns/dist/observable';
import {override} from './types';
import CuraEngine from './CuraEngine.js';
import definitions from './definitions/index';
import type {CombinedDefinition} from 'cura-wasm-definitions/src/types';

/**
 * `EmscriptenModule` with a few tweaks
 */
interface EmscriptenModule2 extends EmscriptenModule
{
  callMain(args: string[]): void,
  FS: typeof FS
}

//Instance variables
let engine: EmscriptenModule2;
let proxyObserver: Observer<any>;
let extruderCount: number;

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
   * @param definition The printer definition
   */
  async addDefinitions(definition: CombinedDefinition): Promise<void>
  {
    engine.FS.mkdir('/definitions');

    //Add primary definitions
    for (const rawDefinition in definitions)
    {
      //Cast raw definition type
      const definition = <keyof typeof definitions>rawDefinition;

      const path = `/definitions/${definition}.def.json`;

      //Copy file to memory filesystem
      engine.FS.writeFile(path, JSON.stringify(definitions[definition]));
    }

    //Add secondary definition
    engine.FS.writeFile('/definitions/printer.def.json', JSON.stringify(definition.printer));

    for (const [i, extruder] of definition.extruders.entries())
    {
      engine.FS.writeFile(`/definitions/extruder-${i}.def.json`, JSON.stringify(extruder));
    }

    //Store extruder count for removal, later
    extruderCount = definition.extruders.length;
  },

  observeProgress: () => new Observable(observer =>
  {
    proxyObserver = observer;
  }),

  /**
   * Run Cura
   * @param overrides Cura overrides
   * @param verbose Wether or not to enable verbose logging in Cura
   * @param file The file
   * @param extension The file extension
   * @param progress The progress event handler
   */
  async run(overrides: override[] | null, verbose: boolean | null, file: ArrayBuffer, extension: string): Promise<TransferDescriptor | Error>
  {
    /**
     * The bias of the file converter progress (Range: 0-1)
     * 
     * A higher value indicates more time is usually taken
     * by the file converter and less time by the slicer
     */
    const converterBias = extension == 'stl' ? 0 : 0.3;

    /**
     * The bias of the slicer progress
     * 
     * Percent inverse of the file converter bias
     */
    const slicerBias = 1 - converterBias;

    //Convert the file to an STL
    const stl = await convert(file, extension, converterProgress =>
    {
      //Emit progress
      if (proxyObserver != null && proxyObserver.next != null)
      {
        proxyObserver.next(converterProgress * converterBias);
      }
    });

    //Handle errors
    if (stl instanceof Error)
    {
      return stl;
    }
    else
    {
      //Write the file
      engine.FS.writeFile('Model.stl', stl);

      //Generate the progress handler callback name
      const progressHandlerName = 'cura-wasm-progress-callback';

      let previousSlicerProgress = 0;

      //@ts-ignore Register the progress handler (The globalThis context is hard coded into Cura; you'll have to recompile it to change this)
      globalThis[progressHandlerName] = (slicerProgress: number) =>
      {
        //Round the slicer progress
        slicerProgress = Math.round(100 * slicerProgress) / 100;

        if (slicerProgress != previousSlicerProgress)
        {
          //Emit progress
          if (proxyObserver != null && proxyObserver.next != null)
          {
            proxyObserver.next((slicerProgress * slicerBias) + converterBias);
          }

          previousSlicerProgress = slicerProgress;
        }
      };

      //Generate CLI arguments
      const args = generate(progressHandlerName, overrides, verbose);

      //Log
      if (verbose)
      {
        console.log(`Calling Cura Engine with ${args.join(' ')}`);
      }

      //Run Cura (Blocking)
      engine.callMain(args);

      //@ts-ignore Delete the progress handler
      delete globalThis[progressHandlerName];

      //Read the file (Uint8Array) and convert to an ArrayBuffer
      const gcode = engine.FS.readFile('Model.gcode').buffer;

      //Remove the files
      engine.FS.unlink('Model.stl');
      engine.FS.unlink('Model.gcode');

      //Return a ThreadJS transferable (ArrayBuffer)
      return Transfer(gcode);
    }
  },

  /**
   * Remove the 3D printer definition files from the virtual file system
   */
  async removeDefinitions(): Promise<void>
  {
    //Remove primary definitions
    for (const rawDefinition in definitions)
    {
      //Cast raw definition type
      const definition = <keyof typeof definitions>rawDefinition;

      const path = `/definitions/${definition}.def.json`;

      //Copy file to memory filesystem
      engine.FS.unlink(path);
    }

    //Remove secondary definition
    engine.FS.unlink('/definitions/printer.def.json');

    for (let i = 0; i < extruderCount; i++)
    {
      engine.FS.unlink(`/definitions/extruder-${i}.def.json`);
    }

    engine.FS.rmdir('/definitions');
  }
};

//Export
expose(worker);