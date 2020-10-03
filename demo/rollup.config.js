/**
 * @fileoverview Rollup demo config
 */

//Imports
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import threads from 'rollup-plugin-threads';
import typescript from 'rollup-plugin-typescript2';

//Export
module.exports = {
  input: [
    'demo/index.js'
  ],
  output: [
    {}
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
    terser()
  ],
  onwarn: (warning, warn) =>
  {
    //Hide eval warning from Emscripten
    if (warning.code != 'EVAL' && warning.code != 'THIS_IS_UNDEFINED')
    {
      warn(warning);
    }
  }
};