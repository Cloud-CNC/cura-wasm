/**
 * @fileoverview Cura WASM
 */

//Imports
import {EventEmitter} from 'events';
import WorkerText from '@worker';
import {BlobWorker, ModuleThread, spawn, Thread} from 'threads';
import AbstractWorker from './abstract-worker';

/**
 * Cura WASM
 */
class CuraWASM extends EventEmitter
{
  /**
   * Background worker thread
   */
  private worker: ModuleThread<AbstractWorker> | undefined;

  constructor()
  {
    super();
  }

  async slice()
  {
    //Spawn the background worker
    this.worker = await spawn<AbstractWorker>(BlobWorker.fromText(WorkerText));

    //Initialize the worker
    await this.worker.initialize(['help'], {}, {}, false);

    //Get observers
    //const [metadataObserver, progressObserver] = await this.worker.getObservers();

    //Slice
    /*const gcode = */await this.worker.slice('/output.stl');

    //Destroy
    await this.worker.destroy();

    //Terminate
    await Thread.terminate(this.worker);
  }
}

//Export
export default CuraWASM;