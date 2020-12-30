/**
 * @fileoverview Cura WASM STL Unit Tests
 */

//Export
module.exports = () =>
{
  require('./normal')();
  require('./command')();
  require('./clone')();
  require('./overrides')();
};