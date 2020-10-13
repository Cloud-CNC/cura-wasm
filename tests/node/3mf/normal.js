/**
 * @fileoverview Normal Cura WASM Tests
 */

//Imports
const {expect} = require('chai');
const {hash} = require('../utils');
const CuraWASM = require('../../../dist/cjs/main');
const fs = require('fs');

//Get the file
const file = fs.readFileSync('./demo/benchy.3mf').buffer;

//Export
module.exports = () =>
{
  it('will slice the file via transfering the ArrayBuffer', async () =>
  {
    const slicer = new CuraWASM({
      definition: 'ultimaker2'
    });

    const gcode = await slicer.slice(file, '3mf');

    expect(file.byteLength).to.be.equal(0);

    expect(hash(gcode)).to.equal('86daabc058054ea6fa06274b356e5083fe8eeaa583c54c07113f508af7b7adbf');

    await slicer.destroy();
  });
};