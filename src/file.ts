/**
 * @fileoverview File Utilities
 */

//Imports
import {FileFormats, Unified3dLoader} from 'unified-3d-loader';

/**
 * Convert a pair of vertices and normals to a binary STL
 * @param normals The STL normals
 * @param vertices The STL vertices (Should be 3x the length of the normals)
 */
export const meshToSTL = (normals: number[], vertices: number[]): ArrayBuffer =>
{
  //Create a binary STL
  const length = 84 + (50 * normals.length);
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  //Set face count
  dataView.setUint32(80, normals.length, true);

  //Iterate over each face
  for (let face = 0; face < normals.length / 3; face++)
  {
    //Get current offsets
    const binaryOffset = 84 + (50 * face);
    const normalOffset = 3 * face;
    const verticeOffset = 9 * face;

    //Set the normal
    dataView.setFloat32(binaryOffset, normals[normalOffset], true);
    dataView.setFloat32(binaryOffset + 4, normals[normalOffset + 1], true);
    dataView.setFloat32(binaryOffset + 8, normals[normalOffset + 2], true);

    //Set the first vertex
    dataView.setFloat32(binaryOffset + 12, vertices[verticeOffset], true);
    dataView.setFloat32(binaryOffset + 16, vertices[verticeOffset + 1], true);
    dataView.setFloat32(binaryOffset + 20, vertices[verticeOffset + 2], true);

    //Set the second vertex
    dataView.setFloat32(binaryOffset + 24, vertices[verticeOffset + 3], true);
    dataView.setFloat32(binaryOffset + 28, vertices[verticeOffset + 4], true);
    dataView.setFloat32(binaryOffset + 32, vertices[verticeOffset + 5], true);

    //Set the third vertex
    dataView.setFloat32(binaryOffset + 36, vertices[verticeOffset + 6], true);
    dataView.setFloat32(binaryOffset + 40, vertices[verticeOffset + 7], true);
    dataView.setFloat32(binaryOffset + 44, vertices[verticeOffset + 8], true);
  }

  return buffer;
};

/**
 * Convert a 3D file to an STL
 * @param file The file
 * @param extension The file extension
 * @param progress The progress event handler
 */
export const convert = async (file: ArrayBuffer, extension: string, progress: (progress: number) => void): Promise<Uint8Array | Error> =>
{
  //Get the unified-3d-loader file format
  const format = Object.values(FileFormats).find(format => format.extensions.includes(extension));

  //If an STL, bypass unified-3d-loader
  if (extension == 'stl')
  {
    return new Uint8Array(file);
  }
  //If unified-3d-loader is capable of parsing the file, use it
  else if (format != null)
  {
    //Parse/load
    const parser = new Unified3dLoader();

    parser.on('progress', (loaderProgress: number) =>
    {
      progress(loaderProgress);
    });

    const meshes = await parser.load(file, format, {
      index: {
        normals: false,
        vertices: false
      }
    });

    //Convert to a binary STL
    if (meshes.length == 0)
    {
      return new Error('[Unified-3D-Loader] Got 0 meshes when parsing the supplied file!');
    }
    else
    {
      //Warn about multiple meshes
      if (meshes.length > 1)
      {
        console.warn(`[Unified-3D-Loader] Got ${meshes.length} meshes when parsing the user supplied file, using the first one! (Some features may be disabled!)`);
      }

      //@ts-ignore Unified-3D-Loader will return a numeric array if the normal index setting is false
      const normals: number[] = meshes[0].normals;

      //@ts-ignore Unified-3D-Loader will return a numeric array if the vertice index setting is false
      const vertices: number[] = meshes[0].vertices;

      //Convert the ArrayBuffer STL to a Uint8Array
      const stl = meshToSTL(normals, vertices);

      return new Uint8Array(stl);
    }
  }
  else
  {
    return new Error(`[Unified-3D-Loader] Unable to parse file with extension: ${extension}`);
  }
};