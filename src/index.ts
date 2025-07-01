import archieve from "./archieve";
import audio from "./audio";
import book from "./book";
import code from "./code";
import document from "./document";
import executable from "./executable";
import font from "./font";
import image from "./image";
import sheet from "./sheet";
import slide from "./slide";
import video from "./video";
import web from "./web";

/**
 * An object mapping file categories to their respective file extension arrays.
 */
export const fileExtensions = {
  archieve,
  audio,
  book,
  code,
  document,
  executable,
  font,
  image,
  sheet,
  slide,
  video,
  web,
};

/**
 * Determines the file type for a given file extension that includes a leading dot.
 *
 * @param extension - The file extension string, including the leading dot (e.g., ".jpg").
 * @returns The type name as a string if found, otherwise "other".
 */
export function dotExtensionToCategotry(extension: string) {
  const type = Object.keys(fileExtensions).find((key) =>
    // @ts-ignore
    fileExtensions[key].includes(extension.substring(1))
  );
  return type ? type : "other";
}

/**
 * Determines the file type for a given file extension without a leading dot.
 *
 * @param extension - The file extension string without the leading dot (e.g., "jpg").
 * @returns The type name as a string if found, otherwise "other".
 */
export function extensionToCategotry(extension: string) {
  const type = Object.keys(fileExtensions).find((key) =>
    //@ts-ignore
    fileExtensions[key].includes(extension)
  );
  return type ? type : "other";
}
