/**
 * @fileoverview CLI Argument Utilities
 */

//Imports
import {override as overrideType} from './types';

/**
 * Generate Cura CLI arguments
 * @param definition The printer definition
 * @param overrides Cura overrides
 * @param verbose Wether or not to enable verbose logging in Cura
 */
export const generate = (overrides: overrideType[] | null, verbose: boolean | null): string[] =>
{
  //Initial arguments
  const args = [
    'slice'
  ];

  //Verbose logging
  if (verbose)
  {
    args.push('-v');
  }

  //Definition and output
  args.push(
    '-j',
    'definitions/printer.def.json',
    '-o',
    'Model.gcode'
  );

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

  //Input (The HAS to be after the overrides)
  args.push(
    '-l',
    'Model.stl',
  );

  return args;
};