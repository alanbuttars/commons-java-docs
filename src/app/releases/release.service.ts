import { Injectable } from '@angular/core';
import { Release } from './release';

export const RELEASES = [
  {
    name: "1.0",
    date: "June 1, 2017",
    notes: "Requires Java 1.7+",
    bugs: "None",
    downloads: [
      {
        name: "commons-parent-1.0-src.tar.gz",
        hash: "6c756f5fa3374569ee6113b2b566390b1c9900ce"
      },
      {
        name: "commons-parent-1.0-src.zip",
        hash: "8c9ef633b59b1b8224994af2047f14474259b231"
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
