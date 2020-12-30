/**
 * @fileoverview Cura WASM Demo
 */

//Imports
import {CuraWASM} from '../src/index.ts';
import {FileFormats} from 'unified-3d-loader';
import {resolveDefinition} from 'cura-wasm-definitions';

//Update file input accept attribute
const extensions = [];
for (const format of Object.values(FileFormats))
{
  extensions.push(...format.extensions.map(extension => `.${extension}`));
}
document.getElementById('upload').accept = extensions;

//Getters and handlers (These are overwritten by Cypress)
window.getFile = async () =>
{
  return await document.getElementById('upload').files[0];
};

window.handleFinish = async gcode =>
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

window.transferFile = true;

//Upload
document.getElementById('slice').addEventListener('click', async () =>
{
  //Get the file
  const file = await window.getFile();
  const bytes = await file.arrayBuffer();
  const extension = file.name.split('.').pop();

  //Create a slicer
  const slicer = new CuraWASM({
    command: window.command,
    definition: resolveDefinition('ultimaker2'),
    overrides: window.overrides,
    transfer: window.transferFile
  });

  //Add progress handler
  slicer.on('progress', percent =>
  {
    document.getElementById('progress').value = percent;
    document.getElementById('percent').innerText = `${percent}%`;
  });

  //Slice
  const start = Date.now();
  const {gcode, metadata} = await slicer.slice(bytes, extension);
  const end = Date.now();

  console.log(metadata);

  //Used by E2E tests
  window.afterFile = bytes;

  //Calculate elapsed time
  const elapsed = new Date(end - start);

  //Format estimated time
  const estimatedTime = `${Math.floor(metadata.printTime / 3600)}h ${Math.floor(metadata.printTime % 3600 / 60)}m ${Math.floor(metadata.printTime % 3600 % 60)}s`;

  //Display metadata
  document.getElementById('metadata').innerText = `Elapsed time: ${elapsed.valueOf()}ms
GCODE flavor: ${metadata.flavor}
Estimated print time: ${estimatedTime}
Nozzle Size: ${metadata.nozzleSize}mm
Filament Usage: ${metadata.filamentUsage}mm³
Material 1 usage: ${metadata.material1Usage}mm³
Material 2 usage: ${metadata.material2Usage}mm³`;

  //Get download button
  const download = document.getElementById('download');

  //Set download callback
  download.disabled = false;
  download.addEventListener('click', () => window.handleFinish(gcode, metadata));

  //Cleanup
  await slicer.destroy();
});