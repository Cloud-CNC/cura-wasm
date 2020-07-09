/**
 * @fileoverview Rollup build config
 */

//Imports
import _ from 'lodash';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

//Global build config
const global = {
  input: [
    'src/index.ts',
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
  onwarn: (warning, warn) =>
  {
    //Hide eval warning from Emscripten
    if (warning.code != 'EVAL')
    {
      warn(warning);
    }
  }
};

//ES
const es = _.merge({
  output: [
    {
      dir: 'dist/es',
      format: 'es',
      name: 'CuraWASM'
    }
  ]
}, global);

//CJS
const cjs = _.merge({
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      name: 'CuraWASM'
    }
  ]
}, global);

//Export
export default [es, cjs];