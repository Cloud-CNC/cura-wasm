/**
 * @fileoverview CLI Argument Utilities
 */

//Imports
import {definitionsType, override as overrideType} from './types';

/**
 * Generate Cura CLI arguments
 * @param progressHandlerName The name of the Cura progress handler callback
 * @param definition The printer definition
 * @param overrides Cura overrides
 * @param verbose Wether or not to enable verbose logging in Cura
 */
export const generate = (progressHandlerName: string, definition: definitionsType, overrides: overrideType[] | null, verbose: boolean | null): string[] =>
{
  //Initial arguments
  const args = [
    'slice',
    '-j',
    `definitions/${definition}.def.json`,
    '-l',
    'Model.stl',
    '-o',
    'Model.gcode',
    '--progress',
    progressHandlerName
  ];

  //Verbose logging
  if (verbose)
  {
    args.push('-v');
  }

  //Overrides
  if (overrides != null)
  {
    for (const override of overrides)
    {
      //Global scope applies the setting to all extruders
      if (override.scope == null)
      {
        args.push('-s', `${override.key}=${override.value}`);
      }
      else
      {
        args.push('-s', override.scope, `${override.key}=${override.value}`);
      }
    }
  }

  return args;
};