/**
 * @fileoverview Mocha + Chai NodeJS Tests
 */

//Tests
describe('demo', () =>
{
  require('./normal')();
  require('./overrides')();
});