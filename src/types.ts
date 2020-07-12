/**
 * @fileoverview Cura WASM types
 */

//Imports
import definitions from './definitions/index';

/**
 * Type representing all available printer definitions
 */
type definitionsType = keyof typeof definitions;

//Export
export type {
  definitionsType
};