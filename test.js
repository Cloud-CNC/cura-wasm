const CuraWASM = require('./dist/cjs');

const main = async () =>
{
  const slicer = new CuraWASM();

  await slicer.slice();
};

main();