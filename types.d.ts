/**
 * @fileoverview TypeScript type augmentation
 */

declare module '*.wasm' {
  //Exports
  const instantiate: (imports?: WebAssembly.Imports) => Promise<WebAssembly.WebAssemblyInstantiatedSource>;
  export default instantiate;
}

declare module '@worker' {
  //Exports
  const wasm: string;
  export default wasm;
}