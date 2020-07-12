/**
 * @fileoverview Rollup build config
 */

//Imports
import _ from 'lodash';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
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
    json(),
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: true
    }),
    replace({
      'worker.ts': 'worker.js'
    }),
    terser(),
    copy({
      //Re-exports
      targets: [
        {
          src: 'src/main-cjs.js',
          dest: 'dist/cjs/',
          rename: 'main.js'
        },
        {
          src: 'src/main-es.js',
          dest: 'dist/es/',
          rename: 'main.js'
        }
      ]
    })
  ],
  onwarn: (warning, warn) =>
  {
    //Hide eval warning from Emscripten and this -> undefined warning
    if (warning.code != 'EVAL' && warning.code != 'THIS_IS_UNDEFINED')
    {
      warn(warning);
    }
  }
};

//CJS
const cjs = _.merge({
  external: [
    'crypto',
    'events',
    'os',
    'path',
    'tty',
    'util'
  ],
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs'
    }
  ]
}, global);
cjs.plugins.unshift(resolve({
  preferBuiltins: true
}));

//ES
const es = _.merge({
  output: [
    {
      dir: 'dist/es',
      format: 'es'
    }
  ]
}, global);
es.plugins.unshift(resolve({
  browser: true,
  preferBuiltins: false,
  //Force Rollup to use the CJS version of Threads JS
  mainFields: [
    'main'
  ]
}));

//Export
export default [cjs, es];