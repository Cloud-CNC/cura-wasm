/**
 * @fileoverview Mocha + Chai NodeJS Tests
 */

//Warn developer about how Node tests require built files
console.warn('FYI: You must build Cura WASM before running tests!');

//Tests
describe('cura wasm', () =>
{
  describe('stl', require('./stl/index'));
  describe('3mf', require('./3mf/index'));
});