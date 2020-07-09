/**
 * @fileoverview Normal Cura WASM Tests
 */

//Imports
const {expect} = require('chai');
const CuraWASM = require('../../dist/cjs/index');
const fs = require('fs');
const crypto = require('crypto');

/**
 * Hash raw using the specified algorithm
 * @param {ArrayBuffer} raw
 * @param {string} algorithm
 */
const hash = (raw, algorithm = 'sha256') =>
{
  return crypto.createHash(algorithm).update(new Uint8Array(raw)).digest('hex');
};

//Get the STL
const stl = fs.readFileSync('./demo/benchy.stl').buffer;

//Export
module.exports = () =>
{
  it('will slice the file', async () =>
  {
    const slicer = new CuraWASM({
      definition: 'ultimaker2'
    });

    const gcode = await slicer.slice(stl);

    expect(hash(gcode)).to.equal('a0b0247aa8657e5d0d4d7daf9c63b149568f22e2a2fe35af7ff268120f3afa88');

    await slicer.destroy();
  });
};