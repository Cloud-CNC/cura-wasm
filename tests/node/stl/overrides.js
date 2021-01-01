/**
 * @fileoverview Cura WASM With Overrides Tests
 */

//Imports
const {CuraWASM} = require('../../../dist/cjs');
const {expect} = require('chai');
const {hash, saveFiles} = require('../utils');
const {resolveDefinition} = require('cura-wasm-definitions');
const fs = require('fs');

//Get the file
const file = fs.readFileSync('./demo/benchy.stl').buffer;

//Export
module.exports = () =>
{
  it('will slice the file via transfering the ArrayBuffer with overrides', async () =>
  {
    const slicer = new CuraWASM({
      definition: resolveDefinition('ultimaker2'),
      overrides: [
        {
          key: 'mesh_position_x',
          value: '20'
        },
        {
          key: 'layer_height',
          value: '0.2'
        }
      ]
    });

    const {gcode, metadata} = await slicer.slice(file, 'stl');

    //Optionally save
    if (saveFiles)
    {
      fs.writeFileSync('./stl-overrides.gcode', new Uint8Array(gcode));
    }

    expect(file.byteLength).to.be.equal(0);

    expect(hash(gcode)).to.equal('d7e8d30ac5e50aba611403b3c88e46fc05c0404ed317e752285bf0bf6502ab28');

    expect(metadata).to.eql({
      flavor: 'UltiGCode',
      printTime: 5285,
      material1Usage: 12315,
      material2Usage: 0,
      nozzleSize: 0.4,
      filamentUsage: 12315
    });

    await slicer.destroy();
  });
};