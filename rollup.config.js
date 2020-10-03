/**
 * @fileoverview Rollup build config
 */

//Imports
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import threads from 'rollup-plugin-threads';
import typescript from 'rollup-plugin-typescript2';

const onwarn = (warning, warn) =>
{
  //Hide eval warning from Emscripten and this -> undefined warning
  if (warning.code != 'EVAL' && warning.code != 'THIS_IS_UNDEFINED')
  {
    warn(warning);
  }
};

//CJS
const cjs = {
  external: [
    'child_process',
    'crypto',
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
    typescript(),
    threads({
      external: [
        'child_process',
        'crypto',
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
        typescript()
      ]
    }),
    //terser(),
    copy({
      //Re-exports
      targets: [
        {
          src: 'src/main-cjs.js',
          dest: 'dist/cjs/',
          rename: 'main.js'
        }
      ]
    })
  ],
  output: [
    {
      dir: 'dist/cjs',
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
    typescript(),
    threads({
      include: '**/worker.ts',
      plugins: [
        resolve({
          browser: true,
          preferBuiltins: false
        }),
        json(),
        commonjs(),
        typescript()
      ]
    }),
    terser(),
    copy({
      //Re-exports
      targets: [
        {
          src: 'src/main-es.js',
          dest: 'dist/es/',
          rename: 'main.js'
        }
      ]
    })
  ],
  output: [
    {
      dir: 'dist/es',
      format: 'es'
    }
  ],
  onwarn
};

//Export
export default [cjs, es];