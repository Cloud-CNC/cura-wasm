/**
 * @fileoverview Clone Cura WASM Tests
 */

//Imports
const {expect} = require('chai');
const {hash} = require('../utils');
const CuraWASM = require('../../../dist/cjs/main');
const fs = require('fs');

//Get the file
const file = fs.readFileSync('./demo/benchy.stl').buffer;

//Export
module.exports = () =>
{
  it('will slice the file via cloning the ArrayBuffer', async () =>
  {
    const slicer = new CuraWASM({
      definition: 'ultimaker2',
      transfer: false
    });

    const gcode = await slicer.slice(file, 'stl');

    expect(file.byteLength).to.be.greaterThan(0);

    expect(hash(gcode)).to.equal('a0b0247aa8657e5d0d4d7daf9c63b149568f22e2a2fe35af7ff268120f3afa88');

    await slicer.destroy();
  });
};