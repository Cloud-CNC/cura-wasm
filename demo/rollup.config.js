/**
 * @fileoverview Rollup demo config
 */

//Imports
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

//Export
module.exports = {
  input: [
    'demo/index.js',
    'src/worker.ts'
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
    typescript({
      rollupCommonJSResolveHack: true
    }),
    replace({
      'worker.ts': 'worker.js'
    }),
    terser()
  ],
  output: [
    {}
  ],
  onwarn: (warning, warn) =>
  {
    //Hide eval warning from Emscripten
    if (warning.code != 'EVAL')
    {
      warn(warning);
    }
  }
};