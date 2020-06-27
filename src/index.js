/**
 * @fileoverview Cura WASM
 */

//Imports
import {EventEmitter} from 'events';
import {v4 as uuid} from 'uuid';
import {spawn, Thread, Transfer, Worker} from 'threads';

/**
 * @class Cura compiled to Web Assembly (WASM)
 */
export default class CuraWASM extends EventEmitter
{
  /**
   * @param {object} config The slicer configuration
   * @param {string} config.definition The 3D printer definition to use
   * @param {Object[]} config.overrides Overrides for the current 3D printer definition
   * @param {string?} config.overrides[].scope The scope of the setting. If `undefined`, the setting will apply to all extruders. Other valid values are `e0`, `e1`, etc. corresponding to the extruder number starting from 0.
   * @param {string} config.overrides[].key The override's key/name
   * @param {string} config.overrides[].value The override's value
   * @param {boolean?} config.verbose Wether to enable verbose logging (Useful for debugging)
   */
  constructor(config)
  {
    super();

    //Store config
    this.config = config;

    //Defaults
    this.config = {
      definition: 'ultimaker2',
      overrides: [],
      verbose: false,
      ...this.config
    };
  }

  /**
 * @private
 * @function Load emscripten and add definitions (Internal use only)
 * @returns {Promise<void>}
 */
  async load()
  {
    //Initialize worker
    this.worker = await spawn(new Worker('./worker.js'));
    await this.worker.initialize(this.config.verbose);
    this.log('Initialized worker!');

    await this.worker.addDefinitions();
    this.log('Added definitions!');

    //Set loaded flag
    this.loaded = true;
  }

  /**
   * @function Slice the provided STL using the settings specified in the constructor
   * @param {ArrayBuffer} stl The raw STL to slice
   * @returns {Promise<ArrayBuffer>} The raw, sliced GCODE
   */
  slice(stl)
  {
    return new Promise(async (resolve, reject) =>
    {
      //Make sure we've loaded emscripten
      if (!this.loaded)
      {
        await this.load();
      }

      //Convert the model to a ThreadJS transferable (ArrayBuffer)
      const bytes = new Transfer(stl);

      //Add model
      this.worker.addFile('Model.stl', bytes);
      this.log('Added model!');

      //Generate event callback function name(s) (C++ will call these, so they need to be unique)
      const progressHandlerName = uuid();

      //Register callbacks
      this.worker.observeCallback(progressHandlerName).subscribe(progress =>
      {
        //Normalize progress
        progress = Math.trunc(100 * progress);

        //Filter out repeat progress updates
        if (this.oldProgress != progress)
        {
          this.log(`Progress: ${progress}%`);

          //Event event
          this.emit('progress', progress);
        }

        //Update old progress
        this.oldProgress = progress;
      });

      this.log('Registered callbacks!');

      //Generate arguments
      const cliArguments = [
        'slice',
        '-j',
        `definitions/${this.config.definition}.def.json`,
        '-l',
        'Model.stl',
        '-o',
        'Model.gcode',
        '--progress',
        progressHandlerName
      ];

      //Append verbose flag
      if (this.config.verbose)
      {
        cliArguments.push('-v');
      }

      //Append overrides
      if (this.config.overrides != null) 
      {
        this.config.overrides.forEach(override =>
        {
          //Global scope applies the setting to all extruders
          if (override.scope == null)
          {
            cliArguments.push('-s', `${override.key}=${override.value}`);
          }
          else
          {
            cliArguments.push('-s', override.scope, `${override.key}=${override.value}`);
          }
        });
      }

      //Slice
      this.log('Starting CuraEngine!');
      await this.worker.main(cliArguments);

      //Read file and return GCODE
      const gcode = await this.worker.getFile('Model.gcode');

      //Return GCODE
      resolve(gcode);
    });
  }

  /**
   * @function Cleanup all assets and destroy the worker
   * @returns {Promise<void>}
   */
  async destroy()
  {
    //Remove model
    await this.worker.removeFile('Model.stl');
    this.log('Removed model!');

    //Remove definitions
    await this.worker.removeDefinitions();
    this.log('Removed definitions!');

    //Destroy the worker
    await Thread.terminate(this.worker);
  }

  /**
   * @private
   * @function Verbose logging method (Internal use only)
   * @param {string} msg 
   */
  log(msg)
  {
    if (this.config.verbose)
    {
      console.log(msg);
    }
  }
}