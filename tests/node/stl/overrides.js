/**
 * @fileoverview Cura WASM With Overrides Tests
 */

//Imports
const {expect} = require('chai');
const {hash, saveFiles} = require('../utils');
const {resolveDefinition} = require('cura-wasm-definitions');
const CuraWASM = require('../../../dist/cjs/main');
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
        }
      ]
    });

    const gcode = await slicer.slice(file, 'stl');

    //Optionally save
    if (saveFiles)
    {
      fs.writeFileSync('./stl-overrides.gcode', new Uint8Array(gcode));
    }

    expect(file.byteLength).to.be.equal(0);

    expect(hash(gcode)).to.equal('8a3c52fd73736baea9e3c8f29e4c05938c42ad9c72ffea9a9dbe71530268098b');

    await slicer.destroy();
  });
};