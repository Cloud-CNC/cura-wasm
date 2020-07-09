/**
 * @fileoverview Cura WASM
 */
/// <reference types="node" />
import { EventEmitter } from 'events';
import type { definitionsType } from './types';
/**
 * Configuration for Cura WASM
 */
interface config {
    /**
     * The 3D printer definition to use
     *
     * Default: `fdmprinter`
     */
    definition: definitionsType;
    /**
     * Overrides for the specified 3D printer definition
     */
    overrides: {
        /**
         * The scope of the override
         *
         * If set to `undefined`, the override will apply to all extruders
         *
         * If set to a valid string `e<Number>` (`e0`, `e1`, `e2`, etc.),
         * the override will apply to the corresponding extruder. Counting is
         * zero based, so the first extruder is `e0`
         */
        scope: string;
        /**
         * The property to override
         */
        key: string;
        /**
         * The value to override with
         */
        value: string;
    }[];
    /**
     * Wether to enable verbose logging or not (Useful for debugging)
     */
    verbose?: boolean;
}
/**
 * @class Cura compiled to Web Assembly (WASM)
 */
export default class CuraWASM extends EventEmitter {
    /**
     * Consumer provided configuration for Cura WASM
     */
    private config;
    /**
     * Wether the consumer has called the `load` function or not
     */
    private loaded;
    /**
     * A number holding the previous progress to prevent duplicate progress events
     */
    private oldProgress;
    /**
     * Cura WASM runs in multiple threads to avoid blocking the main thread,
     * this worker is what runs Cura Engine in a separate thread
     */
    private worker;
    constructor(config: Partial<config>);
    /**
     * Load emscripten and add definitions (Internal use only)
     */
    private load;
    /**
     * Slice the provided STL using the settings specified in the constructor
     * @param stl The raw STL to slice
     * @returns The raw, sliced GCODE
     */
    slice(stl: ArrayBuffer): Promise<ArrayBuffer>;
    /**
     * Cleanup all assets and destroy the worker
     */
    destroy(): Promise<void>;
    /**
     * Verbose logging method (Internal use only)
     * @param msg
     */
    private log;
}
export {};
