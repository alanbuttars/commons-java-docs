import { Component, OnInit } from '@angular/core';

import { ReleaseService } from './../releases/release.service';
import { Release } from './../releases/release';

declare var ga: any;

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

    ga('create', 'UA-52727032-2', 'auto');
    ga('send', 'pageview');
  }
}
