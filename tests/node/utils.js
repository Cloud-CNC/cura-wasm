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

//Export
module.exports = {
  hash
};