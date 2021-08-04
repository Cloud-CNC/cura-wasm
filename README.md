# Cura WASM
[![npm](https://img.shields.io/npm/v/cura-wasm)](https://npmjs.com/package/cura-wasm)
[![tests](https://img.shields.io/github/workflow/status/cloud-cnc/cura-wasm/CI%2FCD?label=ci%2Fcd)](https://github.com/cloud-cnc/cura-wasm/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/67a492b070316bea1936/maintainability)](https://codeclimate.com/github/cloud-cnc/cura-wasm/maintainability)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FCloud-CNC%2Fcura-wasm.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FCloud-CNC%2Fcura-wasm?ref=badge_shield)

[Cura Engine](https://github.com/ultimaker/curaengine) for [Web Assembly (WASM)](https://webassembly.org).

If you're not using JavaScript/TypeScript, check out [Cloud CNC's Cura Engine fork](https://github.com/cloud-cnc/cura-engine) instead (Which should run anywhere [Wasmer](https://wasmer.io) runs).

## Features
* Supports multiple input file formats including 3MF, AMF, PLY, OBJ, and STL via the [Unified 3D Loader](https://github.com/cloud-cnc/unified-3d-loader)
* Provides print metadata (Filament usage, estimated time, etc.)
* Written in modern TypeScript
* Ships with **everything** already compiled
* Works in the browser and on NodeJS

## Install
```console
npm i cura-wasm
```

## License
All source code in this repository is dual licensed under the MIT and AGPL 3.0
licenses (Choose whichever license you prefer). Packages published though NPM
are licensed under the AGPL 3.0 license only. See [`LICENSE`](LICENSE) for more
information.

## License Obligations

### Downstream Modifications
See [Cloud CNC's Cura Engine fork](https://github.com/cloud-cnc/cura-engine#downstream-modifications)

### Source
See [Cloud CNC's Cura Engine fork](https://github.com/cloud-cnc/cura-engine#source)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FCloud-CNC%2Fcura-wasm.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FCloud-CNC%2Fcura-wasm?ref=badge_large)