import { Injectable } from '@angular/core';
import { Release } from './release';

export const RELEASES = [
  {
    name: "1.0",
    date: "June 13, 2017",
    notes: "Requires Java 1.7+",
    bugs: "None",
    downloads: [
      {
        module: "commons-cli",
        suffix: ".jar",
        md5: "b587e4ccfa5c6bb7a295109bd3395662",
        sha1: "75075309dd045a0618069fc339972119fa6fe611"
      },
      {
        module: "commons-cli",
        suffix: "-javadoc.jar",
        md5: "a1359159250e74da497198502856eef8",
        sha1: "34e2d07b2237d2335973cf8e94844f7f4425abbb"
      },
      {
        module: "commons-cli",
        suffix: "-sources.jar",
        md5: "d04136d52313ffd54b798acf8faca1e6",
        sha1: "d063836886dbcd51ffcce2f058c0ee80cebf8c86"
      },

      {
        module: "commons-compress",
        suffix: ".jar",
        md5: "1344935618c4684c41b007b71a1bafc1",
        sha1: "0f1609c301347783935df528ee2c1a08a8c4d607"
      },
      {
        module: "commons-compress",
        suffix: "-javadoc.jar",
        md5: "5057a0c1892faa16559f1581047f4da9",
        sha1: "b52fd7d3da184074c92783b075d8a507122f514b"
      },
      {
        module: "commons-compress",
        suffix: "-sources.jar",
        md5: "a63f7bf66ed9f8cc330a1e09331c11d5",
        sha1: "bbb2a8cc30447340be2fe5a4d537536d9d0d299a"
      },

      {
        module: "commons-config",
        suffix: ".jar",
        md5: "862a5885c92941fe6b72f15b3e9dbf36",
        sha1: "0b16405c002ea8c763ee8218927a8b30d3afa121"
      },
      {
        module: "commons-config",
        suffix: "-javadoc.jar",
        md5: "8b4f8db78f979c39093650d769046359",
        sha1: "4b4d3835181494912f7ef900b95a07fcd170eb69"
      },
      {
        module: "commons-config",
        suffix: "-sources.jar",
        md5: "9ddd6823242ccbfa0578f0599b9d8ee5",
        sha1: "d858a20ca27a2415ad435815dc37cfaa2dc0f6d1"
      }
    ]
  }
];

@Injectable()
export class ReleaseService {

  getLatestRelease(): Promise<Release> {
    return Promise.resolve(RELEASES[RELEASES.length - 1]);
  }

  getRelease(name: string): Promise<Release> {
    return Promise.resolve(RELEASES.find(release => release.name == name));
  }

  getReleases(): Promise<Release[]> {
    return Promise.resolve(RELEASES);
  }
}
