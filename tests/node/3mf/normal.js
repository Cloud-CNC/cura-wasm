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

    expect(hash(gcode)).to.equal('7db7cf2d46dfc782b0dd18beb77d03f392cd2e6c31a707493bc657ed32648473');

    await slicer.destroy();
  });
};