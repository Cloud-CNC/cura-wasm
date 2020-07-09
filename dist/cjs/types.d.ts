/**
 * @fileoverview Cura WASM types
 */
import definitions from './definitions/index';
/**
 * Type representing all available printer definitions
 */
declare type definitionsType = keyof typeof definitions;
export type { definitionsType };
