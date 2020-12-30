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

    const {gcode, metadata} = await slicer.slice(file, '3mf');

    //Optionally save
    if (saveFiles)
    {
      fs.writeFileSync('./3mf-normal.gcode', new Uint8Array(gcode));
    }

    expect(file.byteLength).to.be.equal(0);

    expect(hash(gcode)).to.equal('44fc9aa6556c6504ff8bf83b553ee684e1fd7de1ec7f549fd75acebcdaf146fb');

    expect(metadata).to.eql({
      flavor: 'UltiGCode',
      printTime: 9064,
      material1Usage: 11172,
      material2Usage: 0,
      nozzleSize: 0.4,
      filamentUsage: 11172
    });

    await slicer.destroy();
  });
};