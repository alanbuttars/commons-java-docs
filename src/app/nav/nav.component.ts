import { Component, Input, OnInit }      from '@angular/core';

import { ReleaseService } from './../releases/release.service';
import { Release } from './../releases/release';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  @Input() clazz: string;
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
