/**
 * @fileoverview Definitions generator
 * This file is meant executed when new definitions are added.
 * It should not be bundled and shipped in production code.
 * 
 * **THIS FILE IS MIT LICENSED!**
 */

//Imports
const {zip} = require('lodash');
const {readdirSync, writeFileSync} = require('fs');
const {join} = require('path');
const normalize = require('normalize-name');

//Get list of filtered definitions (Used for file names)
const filtered = readdirSync(__dirname)
  .filter(file => !['index.ts', 'generator.js'].includes(file))
  .map(file =>
  {
    const matches = /(.+)\.def\.json/.exec(file);

    return matches != null ? matches[1] : file;
  });

//Get list of filtered, normalized definitions (Used for definition names/keys)
const normalized = filtered.map(file => normalize(file));

//Combine filtered and normalized definitions
const definitions = zip(filtered, normalized);

//Generate imports
const definitionImports = definitions.map(definition => `import ${definition[1]} from './${definition[0]}.def.json';`).join('\r\n');

//Generate exports
const definitionExports = definitions.map(definition => `  ${definition[1]},`).join('\r\n');

//Create the file template
const template =
  `/* eslint-disable camelcase */
/**
 * @fileoverview 3D printer definitions
 * 
 * **Note: If a print definition starts with a number, it will now start with an underscore. Hyphens have also been replaced by underscores.**
 * 
 * The use of static ES6 module syntax allows for tree-shaking.
 * 
 * See https://github.com/Ultimaker/Cura/tree/master/resources/definitions
 * for more information
 */

//Imports
${definitionImports}

//Export
export default {
${definitionExports}
};
`;

//Write the file
writeFileSync(join(__dirname, 'index.ts'), template);