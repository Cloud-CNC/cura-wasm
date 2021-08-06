/**
 * @fileoverview Rollup build config
 */

//Imports
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import threads from 'rollup-plugin-threads';
import typescript from 'rollup-plugin-typescript2';
import wasm from '@rollup/plugin-wasm';
import {defineConfig} from 'rollup';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

/**
 * External packages
 */
const external = Object.keys(pkg.dependencies);

/**
 * Rollup event handler
 * @param {import('rollup').RollupWarning} warning 
 * @param {import('rollup').WarningHandler} warn 
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
 * @type {import('rollup-plugin-typescript2').RPT2Options}
 */
const typescriptOptions = {
  useTsconfigDeclarationDir: true
};

//Export
export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/cjs.js',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: 'dist/es.js',
      format: 'es'
    }
  ],
  external,
  plugins: [
    resolve(),
    commonjs(),
    typescript(typescriptOptions),
    alias({
      entries: [
        {
          find: '@worker',
          replacement: './src/worker.ts'
        }
      ]
    }),
    threads({
      include: '**/worker.ts',
      // external,
      plugins: [
        resolve(),
        commonjs(),
        typescript(typescriptOptions),
        wasm({
          maxFileSize: Infinity
        }),
        terser()
      ],
      onwarn
    }),
    terser()
  ],
  onwarn
});