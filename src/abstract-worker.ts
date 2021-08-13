/**
 * @fileoverview Abstract background worker
 */

//Imports
import {Subject} from 'observable-fns';
import {TransferDescriptor} from 'threads';

/**
 * Abstract background worker
 */
interface AbstractWorker
{
  /**
   * Initialize the worker
   * @param args CLI arguments
   * @param env Environment variables
   * @param files Files to add to the in-memory filesystem
   * @param verbose Whether or not to enable verbose logging
   */
  initialize(
    args: string[],
    env: Record<string, string>,
    files: Record<string, ArrayBuffer>,
    verbose: boolean
  ): Promise<void>;

  /**
   * Get metadata subject
   * @returns Metadata subject
   */
  getMetadata(): Subject<any>;

  /**
   * Get progress subject
   * @returns Progress subject
   */
  getProgress(): Subject<any>;

  /**
   * Slice the file
   * @param outputLocation Location of output
   * @returns GCODE buffer
   */
  slice(outputLocation: string): Promise<TransferDescriptor<Buffer>>;

  [key: string]: any;
}

//Export
export default AbstractWorker;