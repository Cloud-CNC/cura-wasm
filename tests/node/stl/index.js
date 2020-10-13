/**
 * @fileoverview Cura WASM STL Unit Tests
 */

//Export
module.exports = () =>
{
  require('./normal')();
  require('./clone')();
  require('./overrides')();
};