/**
 * @fileoverview Rollup build config
 */

//Imports
// import {terser} from 'rollup-plugin-terser';
import {resolve as resolvePath} from 'path';
import commonjs from '@rollup/plugin-commonjs';
import polyfill from 'rollup-plugin-polyfill-node';
import resolve from '@rollup/plugin-node-resolve';
import threads from 'rollup-plugin-threads';
import typescript from 'rollup-plugin-typescript2';
import wasm from '@rollup/plugin-wasm';
import pkg from './package.json';

/**
 * Warning handler
 * @param {import('rollup').RollupWarning} warning 
 * @param {import('rollup').WarningHandler} warn 
 */
const onwarn = (warning, warn) =>
{
  //Hide ThreadsJS warnings
  if (warning.code != 'EVAL' && warning.code != 'THIS_IS_UNDEFINED')
  {
    warn(warning);
  }
};

//External dependencies
const external = Object.keys(pkg.dependencies);

/**
 * Global Typescript Rollup plugin options
 * @type {import('rollup-plugin-typescript2').RPT2Options}
 */
const typescriptOptions = {
  tsconfig: resolvePath('./tsconfig.json'),
  useTsconfigDeclarationDir: true
};

//Generate Rollup configs
const configs = [];
for (const name of ['cjs', 'es'])
{
  //Add the config
  configs.push({
    input: 'src/index.ts',
    output: [
      {
        exports: name == 'cjs' ? 'default' : 'auto',
        file: `dist/${name}.js`,
        format: name
      }
    ],
    external,
    onwarn,
    plugins: [
      commonjs(),
      ...(name != 'cjs' ? [
        resolve({
          browser: true,
          preferBuiltins: false,
        }),
        polyfill()
      ] : []),
      typescript(typescriptOptions),
      threads({
        external,
        include: '**/worker.ts',
        onwarn,
        plugins: [
          commonjs(),
          ...(name != 'cjs' ? [
            resolve({
              browser: true,
              preferBuiltins: false
            }),
            polyfill()
          ] : []),
          typescript(typescriptOptions),
          wasm({
            maxFileSize: Infinity
          }),
          // terser()
        ]
      }),
      // terser()
    ]
  });
}

//Export
export default configs;