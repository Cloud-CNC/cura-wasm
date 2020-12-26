/**
 * @fileoverview CLI Argument Utilities
 */

//Imports
import {override as overrideType} from './types';

/**
 * Generate Cura CLI arguments
 * @param progressHandlerName The name of the Cura progress handler callback
 * @param definition The printer definition
 * @param overrides Cura overrides
 * @param verbose Wether or not to enable verbose logging in Cura
 */
export const generate = (progressHandlerName: string, overrides: overrideType[] | null, verbose: boolean | null): string[] =>
{
  //Initial arguments
  const args = [
    'slice',
    '-j',
    'definitions/printer.def.json',
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
        args.push(`-${override.scope}`, '-s', `${override.key}=${override.value}`);
      }
    }
  }

  return args;
};