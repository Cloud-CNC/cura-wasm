/**
 * @fileoverview Background worker
 */

//Imports
import browser from '@wasmer/wasi/lib/bindings/browser';
import node from '@wasmer/wasi/lib/bindings/node';
import {Observable/*, SubscriptionObserver*/} from 'observable-fns';
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
   * Metadata observer
   */
  metadataObserver: null as Observable<any> | null,

  /**
   * Metadata subscription
   */
  //metadataSubscription: null as SubscriptionObserver<any> | null,

  /**
   * Progress observer
   */
  progressObserver: null as Observable<any> | null,

  /**
   * Progress subscription
   */
  //progressSubscription: null as SubscriptionObserver<any> | null,

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

    //Initialize the observers
    state.metadataObserver = new Observable(()/*observer*/ =>
    {
      //this.metadataSubscription = observer;
    });

    state.progressObserver = new Observable(()/*observer*/ =>
    {
      //this.progressSubscription = observer;
    });

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
    log('Initialized system interface');

    //Load the WASM
    const module = await CuraEngine();
    state.instance = await WebAssembly.instantiate(module, {
      ...state.wasi.getImports(module),
      /*imports: {
        hello_javascript: () => 
        {
          console.log('HELLO!!!');
          alert('HELLO!!!');
        }
      }*/
    });

    log('Loaded Cura Engine binary');

    //Load files
    for (const [name, file] of Object.entries(files))
    {
      state.wasmFs.fs.writeFileSync(name, new Uint8Array(file), {
        encoding: 'binary'
      });
    }
    log('Loaded files');
  },

  getObservers: (): [Observable<any>, Observable<any>] =>
  {
    return [
      state.metadataObserver!,
      state.progressObserver!
    ];
  },

  slice: async (outputLocation: string) =>
  {
    //Run Cura Engine
    state.wasi!.start(state.instance!);
    log('Ran Cura Engine');

    //Read the output
    const output = state.wasmFs!.fs.readFileSync(outputLocation, {
      encoding: 'binary'
    }) as Buffer;
    log('Read output');

    //Make the output transferable
    return Transfer(output);
  },

  destroy: async () =>
  {
    throw new Error('Not implemented!');
  }
} as AbstractWorker;

//Expose
expose(worker);

//Export
export default '';