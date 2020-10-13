/**
 * @fileoverview Mocha + Chai NodeJS Tests
 */

//Warn developer about how Node tests require built files
console.warn('FYI: You must build Cura WASM before running tests!');

//Tests
describe('demo', () =>
{
  require('./normal')();
  require('./clone')();
  require('./overrides')();
});