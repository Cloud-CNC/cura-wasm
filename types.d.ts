/**
 * @fileoverview TypeScript type augmentation
 */

declare module '*.wasm' {
  //Exports
  const load: () => Promise<WebAssembly.Module>;
  const load: (imports: WebAssembly.Imports) => Promise<WebAssembly.WebAssemblyInstantiatedSource>;
  export default load;
}