const CuraWASM = require('./dist/cjs');

const main = async () =>
{
  /**
   * @type {import('./src/index').default}
   */
  const slicer = new CuraWASM();

  await slicer.slice();
};

main();