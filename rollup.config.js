/**
 * @fileoverview Rollup build config
 */

//Imports
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import threads from 'rollup-plugin-threads';
import typescript, {RPT2Options} from 'rollup-plugin-typescript2';
import {defineConfig, RollupWarning, WarningHandler} from 'rollup';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

/**
 * External packages
 */
const external = Object.keys(pkg.dependencies);

/**
 * Rollup event handler
 * @param {RollupWarning} warning 
 * @param {WarningHandler} warn 
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
 * @type {RPT2Options}
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
      format: 'cjs'
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
    threads({
      include: '**/worker.ts',
      external,
      plugins: [
        resolve(),
        commonjs(),
        typescript(typescriptOptions)
      ],
      onwarn
    }),
    terser()
  ],
  onwarn
});