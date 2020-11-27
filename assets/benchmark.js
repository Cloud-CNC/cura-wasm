/**
 * @fileoverview NodeJS Cura WASM Benchmark
 */

//Imports
const {resolveDefinition} = require('cura-wasm-definitions');
const CuraWASM = require('../dist/cjs/main');
const fs = require('fs');

//Get the file
const file = fs.readFileSync('./demo/benchy.stl').buffer;

//Create the slicer
const slicer = new CuraWASM({
  definition: resolveDefinition('ultimaker2')
});

//Slice
console.time('slice');
slicer.slice(file, 'stl').then(() =>
{
  console.timeEnd('slice');
  process.exit();
});
