/**
 * @fileoverview Cura WASM
 */

//Imports
import {EventEmitter} from 'events';
import {BlobWorker, ModuleThread, spawn, Thread} from 'threads';
import WorkerText from './worker';
import AbstractWorker from './abstract-worker';

/**
 * Cura WASM
 */
class CuraWASM extends EventEmitter
{
  /**
   * Background worker thread
   */
  private thread: ModuleThread<AbstractWorker> | undefined;

  constructor()
  {
    super();
  }

  async slice()
  {
    //Spawn the background worker
    this.thread = await spawn<AbstractWorker>(BlobWorker.fromText(WorkerText));

    //Initialize the worker
    await this.thread.initialize(['help'], {}, {}, true);

    //Get subjects
    // const metadata = this.thread.getMetadata();
    // const progress = this.thread.getProgress();

    //Slice
    /*const gcode = */await this.thread.slice('/output.stl');

    //Terminate
    await Thread.terminate(this.thread);
  }
}

//Export
export default CuraWASM;