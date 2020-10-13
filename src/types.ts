/**
 * @fileoverview Cura WASM types
 */

//Imports
import definitions from './definitions/index';

/**
 * Type representing all available printer definitions
 */
export type definitionsType = keyof typeof definitions;

export interface override
{
  /**
   * The scope of the override
   *
   * If set to `undefined`, the override will apply to all extruders
   *
   * If set to a valid string `e<Number>` (`e0`, `e1`, `e2`, etc.),
   * the override will apply to the corresponding extruder. Counting is
   * zero based, so the first extruder is `e0`
   */
  scope: string,

  /**
   * The property to override
   */
  key: string,

  /**
   * The value to override with
   */
  value: string
}