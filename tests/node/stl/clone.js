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

    expect(hash(gcode)).to.equal('b601f088a80203b20f1e84b7afcd27d9c2122f46539f48a120fa0bf36ffc36a1');

    await slicer.destroy();
  });
};