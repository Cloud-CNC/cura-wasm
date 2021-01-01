/**
 * @fileoverview Cura WASM Unit Test Utilities
 */

//Imports
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

/**
 * If you want to save the GCODE output from running Node unit tests,
 * add `SAVE_FILES=true` to your environment. This is useful when
 * recalculating hashes for tests.
 */
const saveFiles = !!process.env.SAVE_FILES;

//Export
module.exports = {
  hash,
  saveFiles
};