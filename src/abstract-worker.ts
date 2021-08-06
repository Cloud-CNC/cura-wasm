/**
 * @fileoverview Abstract background worker
 */

//Imports
import {Observable} from 'observable-fns';
import {TransferDescriptor} from 'threads';

/**
 * Abstract background worker
 */
abstract class AbstractWorker
{
  /**
   * Initialize the worker
   * @param args CLI arguments
   * @param env Environment variables
   * @param files Files to add to the in-memory filesystem
   * @param verbose Whether or not to enable verbose logging
   */
  abstract initialize(
    args: string[],
    env: Record<string, string>,
    files: Record<string, ArrayBuffer>,
    verbose: boolean
  ): Promise<void>;

  /**
   * Get observers
   * @returns Metadata, progress observer
   */
   abstract getObservers(): [Observable<any>, Observable<any>];

  /**
   * Slice the file
   * @param outputLocation Location of output
   * @returns GCODE buffer
   */
  abstract slice(outputLocation: string): Promise<TransferDescriptor<Buffer>>;

  /**
   * Destroy the background worker
   */
  abstract destroy(): Promise<void>;

  [key: string]: any;
}

//Export
export default AbstractWorker;