import { Component, OnInit } from '@angular/core';

import { ReleaseService } from './../releases/release.service';
import { Release } from './../releases/release';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html'
})
export class InstallationComponent implements OnInit {
  release: Release;

  constructor(
    private releaseService: ReleaseService
  ) { }

  ngOnInit(): void {
    this.releaseService.getLatestRelease()
      .then(release => {
        this.release = release;
      });
  }
}
