import { Injectable } from '@angular/core';
import { CompressFileType } from './compress-file-type';

export const FILE_TYPES = [
  { fileType: "7z",     category: "archive",          compression: true, decompression: true },
  { fileType: "ar",     category: "archive",          compression: true, decompression: true },
  { fileType: "arj",    category: "archive",          compression: false, decompression: true },
  { fileType: "bzip2",  category: "compressed file",  compression: true, decompression: true },
  { fileType: "cpio",   category: "archive",          compression: true, decompression: true },
  { fileType: "deflate", category: "compressed file", compression: true, decompression: true },
  { fileType: "dump",   category: "archive",          compression: false, decompression: true },
  { fileType: "gzip",   category: "compressed file",  compression: true, decompression: true },
  { fileType: "jar",    category: "archive",          compression: true, decompression: true },
  { fileType: "lzma",   category: "compressed file",  compression: true, decompression: true },
  { fileType: "pack200", category: "compressed file", compression: true, decompression: true },
  { fileType: "snappy", category: "compressed file",  compression: false, decompression: true },
  { fileType: "tar",    category: "archive",          compression: true, decompression: true },
  { fileType: "xz",     category: "compressed file",  compression: true, decompression: true },
  { fileType: "z",      category: "compressed file",  compression: false, decompression: true },
  { fileType: "zip",    category: "archive",          compression: true, decompression: true },
];

@Injectable()
export class CompressFileTypeService {

  getCompressFileTypes(): Promise<CompressFileType[]> {
    return Promise.resolve(FILE_TYPES);
  }
}
