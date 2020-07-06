/**
 * @fileoverview Cura WASM With Overrides Tests
 */

//Imports
const {expect} = require('chai');
const CuraWASM = require('../dist/node/main').default;
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
  it('will slice the file with overrides', async () =>
  {
    const slicer = new CuraWASM({
      overrides: [
        {
          key: 'mesh_position_x',
          value: '20'
        }
      ]
    });

    const gcode = await slicer.slice(stl);

    expect(hash(gcode)).to.equal('4d15c9f7a04b9a465b5b99cca9f39f283fc248eba0edc6c529738d38963254a1');

    await slicer.destroy();
  });
};