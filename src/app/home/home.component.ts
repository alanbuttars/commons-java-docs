import { Component, OnInit }      from '@angular/core';

import { ReleaseService } from './../releases/release.service';
import { Release } from './../releases/release';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  releases: Release[];

  constructor(
    private releaseService: ReleaseService,
  ) { }

  ngOnInit(): void {
    this.releaseService.getReleases()
      .then(releases => {
        this.releases = releases;
      });
  }
}
