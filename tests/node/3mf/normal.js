/**
 * @fileoverview Normal Cura WASM Tests
 */

//Imports
const {CuraWASM} = require('../../../dist/cjs');
const {expect} = require('chai');
const {hash, saveFiles} = require('../utils');
const {resolveDefinition} = require('cura-wasm-definitions');
const fs = require('fs');

//Get the file
const file = fs.readFileSync('./demo/benchy.3mf').buffer;

//Export
module.exports = () =>
{
  it('will slice the file via transfering the ArrayBuffer', async () =>
  {
    const slicer = new CuraWASM({
      definition: resolveDefinition('ultimaker2')
    });

    const gcode = await slicer.slice(file, '3mf');

    //Optionally save
    if (saveFiles)
    {
      fs.writeFileSync('./3mf-normal.gcode', new Uint8Array(gcode));
    }

    expect(file.byteLength).to.be.equal(0);

    expect(hash(gcode)).to.equal('e777ca6d8fb935ea823a5bf5324a979e0ad932339265ee08e45be6b17c6ad531');

    await slicer.destroy();
  });
};