/**
 * @fileoverview Background worker
 */

//Imports
import browser from '@wasmer/wasi/lib/bindings/browser';
import node from '@wasmer/wasi/lib/bindings/node';
import {Subject} from 'observable-fns';
import {WASI} from '@wasmer/wasi';
import {WasmFs} from '@wasmer/wasmfs';
import {expose, Transfer} from 'threads';
import CuraEngine from '../wapm_packages/cloud-cnc-bot/cura-engine@0.0.1-alpha.2/cura-engine.wasm';
import AbstractWorker from './abstract-worker';

/**
 * Private worker properties/methods
 */
const state = {
  /**
   * Web Assembly filesystem
   */
  wasmFs: null as WasmFs | null,

  /**
   * Print metadata observable
   */
  metadata: new Subject(),

  /**
   * Slicing progress observable
   */
  progress: new Subject(),

  /**
   * Web Assembly instance
   */
  instance: null as WebAssembly.Instance | null,

  /**
   * Whether or not to enable verbose logging
   */
  verbose: false,

  /**
   * System interface instance
   */
  wasi: null as WASI | null

};

/**
 * Log a message
 * @param message Message to log
 */
const log = (message: string) =>
{
  if (state.verbose)
  {
    console.log(message);
  }
};

/**
 * Background worker singleton
 */
const worker = {
  initialize: async (
    args: string[],
    env: Record<string, string>,
    files: Record<string, ArrayBuffer>,
    verbose: boolean
  ) =>
  {
    //Update state
    state.verbose = verbose;

    //Initialize the filesystem
    state.wasmFs = new WasmFs();
    log('Initialized filesystem');

    //Get bindings
    const bindings = typeof process == 'object' ? node : browser;

    //Initialize WASI
    state.wasi = new WASI({
      args: ['/cura-engine.wasm', ...args],
      env,
      bindings: {
        ...bindings,
        fs: state.wasmFs.fs
      },
    });
    log('Initialized WASI');

    //Load the WASM
    const module = await CuraEngine();
    log('Loaded WASM');

    //Instantiate the WASM module
    state.instance = await WebAssembly.instantiate(module, {
      ...state.wasi.getImports(module),
      env: {
        //TODO: remove
        test_import: () => 
        {
          console.log('Test import fired!');
        }
      }
    });
    log('Instantiated WASM module');

    //Load files
    for (const [name, file] of Object.entries(files))
    {
      state.wasmFs.fs.writeFileSync(name, new Uint8Array(file), {
        encoding: 'binary'
      });
    }
    log('Loaded files');
  },

  getMetadata: () => state.metadata,

  getProgress: () => state.progress,

  slice: async (outputLocation: string) =>
  {
    //Run Cura Engine
    state.wasi!.start(state.instance!);
    log('Ran WASM');

    //Read the output
    const output = state.wasmFs!.fs.readFileSync(outputLocation, {
      encoding: 'binary'
    }) as Buffer;
    log('Read output');

    //Make the output transferable
    return Transfer(output);
  }
} as AbstractWorker;

//Expose
expose(worker);

//Export
export default '';