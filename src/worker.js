/**
 * @fileoverview Cura WASM Worker
 */

//Imports
import {expose, Transfer} from 'threads';
import {Observable} from 'observable-fns';
import CuraEngine from './CuraEngine.js';
import definitions from './definitions/index.js';

//Instance variables
let engine;

/**
 * Cura WASM's low-level singleton for interfacing with Cura Engine
 */
const worker = {
  /**
   * @function Initialize the emscripten module
   * @param {boolean?} verbose Wether to enable verbose logging (Useful for debugging)
   * @returns {Promise<void>}
   */
  async initialize(verbose)
  {
    //Emscripten config
    const config = {
      noInitialRun: true
    };

    if (!verbose)
    {
      config.print = () => null;
      config.printErr = () => null;
    }

    engine = await CuraEngine(config);
  },

  /**
   * @function Add 3D printer definition files to the virtual filesystem
   * @returns {Promise<void>}
   */
  async addDefinitions()
  {
    engine.FS.mkdir('/definitions');

    Object.keys(definitions).forEach(definition =>
    {
      const path = `definitions/${definition}`;

      //Copy file to memory filesystem
      engine.FS.writeFile(path, JSON.stringify(definitions[definition]));
    });
  },

  /**
   * @function Add the file to the virtual filesystem
   * @param {string} path The path to the file
   * @param {Transferable<ArrayBuffer>} data The raw data to write to the file
   * @returns {Promise<void>}
   */
  async addFile(path, data)
  {
    //Convert the ThreadJS transferable (ArrayBuffer) to a Uint8Array
    const bytes = new Uint8Array(data);

    //Write the file
    engine.FS.writeFile(path, bytes);
  },

  /**
   * @function Observes the callback when the [name] function is called with respect to the globalThis context
   * @param {string} name The name of the function
   * @returns {Observable<any>}
   */
  observeCallback(name)
  {
    //Return an "observable" (EventEmitter++)
    return new Observable(observer =>
    {
      globalThis[name] = param =>
      {
        observer.next(param);
      };
    });
  },

  /**
   * @function Call the main function
   * @param {Array<String>} cliArguments Command line arguments to be passed to Cura Engine
   * @returns {Promise<void>}
   */
  async main(cliArguments)
  {
    engine.callMain(cliArguments);
  },

  /**
   * @function Retrieves a file
   * @param {string} path Path to the file
   * @returns {Promise<Transferable<ArrayBuffer>>}
   */
  async getFile(path)
  {
    //Read the file (Uint8Array) and convert to an ArrayBuffer
    const bytes = engine.FS.readFile(path).buffer;

    //Return a ThreadJS transferable (ArrayBuffer)
    return new Transfer(bytes);
  },

  /**
   * @function Remove the file from the virtual filesystem
   * @param {string} path
   * @returns {Promise<void>}
   */
  async removeFile(path)
  {
    engine.FS.unlink(path);
  },

  /**
   * @function Remove the 3D printer definition files from the virtual file system
   * @returns {Promise<void>}
   */
  async removeDefinitions()
  {
    Object.keys(definitions).forEach(definition =>
    {
      const path = `definitions/${definition}`;

      //Copy file to memory filesystem
      engine.FS.unlink(path);
    });

    engine.FS.rmdir('/definitions');

    //Delete Cura Engine
    Object.keys(engine).forEach(key =>
    {
      delete engine[key];
    });
  }
};

//Export
expose(worker);