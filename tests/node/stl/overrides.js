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

    expect(hash(gcode)).to.equal('4d15c9f7a04b9a465b5b99cca9f39f283fc248eba0edc6c529738d38963254a1');

    await slicer.destroy();
  });
};