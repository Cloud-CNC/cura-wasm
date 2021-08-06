/**
 * @fileoverview Background worker
 */

//Imports
import browser from '@wasmer/wasi/lib/bindings/browser';
import {Observable/*, SubscriptionObserver*/} from 'observable-fns';
import {WASI} from '@wasmer/wasi';
import {WasmFs} from '@wasmer/wasmfs';
import {expose, Transfer} from 'threads';
import CuraEngine from '../wapm_packages/cloud-cnc-bot/cura-engine@0.0.1-alpha.2/cura-engine.wasm';
import AbstractWorker from './abstract-worker';

/**
 * Background worker singleton
 */
class Worker implements AbstractWorker
{
  /**
   * Web Assembly filesystem
   */
  private fs: WasmFs | undefined;

  /**
   * Metadata observer
   */
  private metadataObserver: Observable<any> | undefined;

  /**
   * Metadata subscription
   */
  //private metadataSubscription: SubscriptionObserver<any> | undefined;

  /**
   * Progress observer
   */
  private progressObserver: Observable<any> | undefined;

  /**
   * Progress subscription
   */
  //private progressSubscription: SubscriptionObserver<any> | undefined;

  /**
   * Web Assembly source
   */
  private source: WebAssembly.WebAssemblyInstantiatedSource | undefined;

  /**
   * Whether or not to enable verbose logging
   */
  private verbose: boolean | undefined;

  /**
   * System interface instance
   */
  private wasi: WASI | undefined;

  /**
   * Log a message
   * @param message Message to log
   */
  private log(message: string)
  {
    if (this.verbose)
    {
      console.log(message);
    }
  }

  async initialize(
    args: string[],
    env: Record<string, string>,
    files: Record<string, ArrayBuffer>,
    verbose: boolean
  )
  {
    //Update state
    this.verbose = verbose;

    //Initialize the observers
    this.metadataObserver = new Observable(()/*observer*/ =>
    {
      //this.metadataSubscription = observer;
    });

    this.progressObserver = new Observable(()/*observer*/ =>
    {
      //this.progressSubscription = observer;
    });

    //Initialize the filesystem
    this.fs = new WasmFs();
    this.log('Initialized filesystem');

    //Initialize WASI
    this.wasi = new WASI({
      args: ['/cura-engine.wasm', ...args],
      env,
      bindings: {
        ...browser,
        fs: this.fs
      },
    });
    this.log('Initialized system interface');

    //Load the WASM
    this.source = await CuraEngine();
    this.log('Loaded Cura Engine binary');

    //Update imports
    let imports = this.wasi.getImports(this.source.module);
    imports = {
      imports: {
        hello_javascript: () => 
        {
          console.log('HELLO!!!');
          alert('HELLO!!!');
        }
      },
      ...imports
    };

    //Load files
    for (const [name, file] of Object.entries(files))
    {
      this.fs.fs.writeFileSync(name, new Uint8Array(file), {
        encoding: 'binary'
      });
    }
    this.log('Loaded files');
  }

  getObservers(): [Observable<any>, Observable<any>]
  {
    return [
      this.metadataObserver!,
      this.progressObserver!
    ];
  }

  async slice(outputLocation: string)
  {
    //Run Cura Engine
    this.wasi!.start(this.source!.instance);
    this.log('Ran Cura Engine');

    //Read the output
    const output = this.fs!.fs.readFileSync(outputLocation, {
      encoding: 'binary'
    }) as Buffer;
    this.log('Read output');

    //Make the output transferable
    return Transfer(output);
  }

  async destroy()
  {
    throw new Error('Not implemented!');
  }
}

//Instantiate the singleton
const worker = new Worker();

//Export
expose(worker as any);