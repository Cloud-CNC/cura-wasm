/**
 * @fileoverview Cura WASM With Overrides Tests
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
  it('will slice the file via transfering the ArrayBuffer with overrides', async () =>
  {
    const slicer = new CuraWASM({
      definition: 'ultimaker2',
      overrides: [
        {
          key: 'mesh_position_x',
          value: '20'
        }
      ]
    });

    const gcode = await slicer.slice(file, 'stl');

    expect(file.byteLength).to.be.equal(0);

    expect(hash(gcode)).to.equal('d8d34537a814083854b556c5a3850b78c632602d170a0d0434a980d111765c7b');

    await slicer.destroy();
  });
};