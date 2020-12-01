/**
 * @fileoverview Rollup build config
 */

//Imports
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import threads from 'rollup-plugin-threads';
import typescript from 'rollup-plugin-typescript2';

/**
 * Rollup event handler
 */
const onwarn = (warning, warn) =>
{
  //Hide eval warning from Emscripten and this -> undefined warning
  if (warning.code != 'EVAL' && warning.code != 'THIS_IS_UNDEFINED')
  {
    warn(warning);
  }
};

/**
 * Typescript Rollup plugin options
 */
const typescriptOptions = {
  useTsconfigDeclarationDir: true
};

//CJS
const cjs = {
  external: [
    'child_process',
    'events',
    'os',
    'path',
    'tty',
    'util'
  ],
  input: [
    'src/index.ts'
  ],
  plugins: [
    resolve({
      browser: false,
      preferBuiltins: true,
      //Force Rollup to use the CJS version of Threads JS
      mainFields: [
        'main'
      ]
    }),
    json(),
    commonjs(),
    typescript(typescriptOptions),
    threads({
      external: [
        'child_process',
        'events',
        'os',
        'path',
        'tty',
        'util'
      ],
      include: '**/worker.ts',
      plugins: [
        resolve(),
        json(),
        commonjs(),
        typescript(typescriptOptions)
      ],
      onwarn
    }),
    terser()
  ],
  output: [
    {
      file: 'dist/cjs.js',
      format: 'cjs'
    }
  ],
  onwarn
};

//ES
const es = {
  input: [
    'src/index.ts'
  ],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
      //Force Rollup to use the CJS version of Threads JS
      mainFields: [
        'main'
      ]
    }),
    json(),
    commonjs(),
    typescript(typescriptOptions),
    threads({
      include: '**/worker.ts',
      plugins: [
        resolve({
          browser: true,
          preferBuiltins: false
        }),
        json(),
        commonjs(),
        typescript(typescriptOptions)
      ]
    }),
    terser()
  ],
  output: [
    {
      file: 'dist/es.js',
      format: 'es'
    }
  ],
  onwarn
};

//Export
export default [cjs, es];