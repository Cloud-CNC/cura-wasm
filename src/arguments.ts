/**
 * @fileoverview Argument generator helper
 */

//Imports
import {multiply} from 'mathjs';

/**
 * Cura override scope
 * 
 * * `global`: the override applies to all extruders
 * * `e[N]`: the override applies to the `n+1`th extruder
 */
type Scope = 'global' | 'e0' | 'e1' | 'e2' | 'e3' | 'e4' | 'e5' | 'e6' | 'e7' | 'e8' | 'e9' | string;

/**
 * Cura argument override
 */
export interface Override
{
  /**
   * Override scope
   */
  scope: Scope;

  /**
   * Override key
   */
  key: string;

  /**
   * Override value
   */
  value: string;
}

/**
 * 3D vector
 */
type Vector = [number, number, number];

/**
 * Argument config
 */
export interface ArgumentConfig
{
  /**
   * Whether or not to center the model on the build platform (Overrides the
   * translation vector)
   */
  center: boolean;

  /**
   * Additional argument overrides
   */
  overrides: Override[];

  /**
   * Rotation vector (In radians)
   */
  rotation: Vector;

  /**
   * Scale vector (Relative to model dimensions)
   */
  scale: Vector;

  /**
   * Translation vector (Relative to model dimensions)
   */
  translation: Vector;
}

/**
 * Argument generator helper
 */
export default (config: Partial<ArgumentConfig>) =>
{
  const args = [];

  //Transformation matrix
  let transformationMatrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];

  //Rotations
  if (config.rotation != null)
  {
    //Generate the matrices
    const xMatrix = [
      [1, 0, 0],
      [0, Math.cos(config.rotation[0]), -Math.sin(config.rotation[0])],
      [0, Math.sin(config.rotation[0]), Math.cos(config.rotation[0])]
    ];

    const yMatrix = [
      [Math.cos(config.rotation[1]), 0, Math.sin(config.rotation[1])],
      [0, 1, 0],
      [-Math.sin(config.rotation[1]), 0, Math.cos(config.rotation[1])]
    ];

    const zMatrix = [
      [Math.cos(config.rotation[2]), -Math.sin(config.rotation[2]), 0],
      [Math.sin(config.rotation[2]), Math.cos(config.rotation[2]), 0],
      [0, 0, 1]
    ];

    //Update the transformation matrix
    transformationMatrix = multiply(transformationMatrix, multiply(xMatrix, multiply(yMatrix, zMatrix)));
  }

  //Scales
  if (config.scale != null)
  {
    //Generate the matrix
    const scaleMatrix = [
      [config.scale[0], 0, 0],
      [0, config.scale[1], 0],
      [0, 0, config.scale[2]]
    ];

    //Update the transformation matrix
    transformationMatrix = multiply(transformationMatrix, scaleMatrix);
  }

  //Add the transformation matrix
  args.push('-s', 'mesh_rotation_matrix', JSON.stringify(transformationMatrix));

  //Center model
  if (config.center != null)
  {
    args.push('-s', 'center_object', config.center);
  }
  //Translation vector
  else if (config.translation != null)
  {
    args.push('-s', 'mesh_position_x', config.translation[0]);
    args.push('-s', 'mesh_position_y', config.translation[1]);
    args.push('-s', 'mesh_position_z', config.translation[2]);
  }

  //Overrides
  if (config.overrides != null)
  {
    for (const override of config.overrides)
    {
      if (override.scope == 'global')
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