/**
 * @fileoverview Cura WASM Demo
 */

//Imports
import CuraWASM from '../src/index.ts';

//Getters and handlers (These are overwritten by Cypress)
window.getSTL = async () =>
{
  return await document.getElementById('upload').files[0].arrayBuffer();
};

window.handleGcode = async gcode =>
{
  //Create the download link and download the file
  const blob = new Blob([gcode], {
    type: 'text/plain'
  });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Output.gcode';
  link.click();
  link.remove();
};

//Upload
document.getElementById('slice').addEventListener('click', async () =>
{
  //Get the STL
  const stl = await window.getSTL();

  //Create a slicer
  const slicer = new CuraWASM({
    definition: 'ultimaker2',
    overrides: window.overrides
  });

  //Add progress handler
  slicer.on('progress', percent =>
  {
    document.getElementById('progress').value = percent;
    document.getElementById('percent').innerText = `${percent}%`;
  });

  //Slice
  const start = Date.now();
  const gcode = await slicer.slice(stl);
  const end = Date.now();

  //Calculate elapsed time
  const elapsed = new Date(end - start);

  //Display elapsed time
  document.getElementById('time').innerText = `Elapsed time: ${elapsed.valueOf()}ms`;

  //Get download button
  const download = document.getElementById('download');

  //Set download callback
  download.disabled = false;
  download.addEventListener('click', () => window.handleGcode(gcode));

  //Cleanup
  await slicer.destroy();
});