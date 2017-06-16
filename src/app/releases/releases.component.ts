import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ReleaseService } from './release.service';
import { Release } from './release';

declare var ga: any;

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html'
})
export class ReleasesComponent implements OnInit {
  release: Release;

  constructor(
    private releaseService: ReleaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => {
        return this.releaseService.getRelease(params.name)
      })
      .subscribe(release => {
        this.release = release
      });
    ga('create', 'UA-52727032-2', 'auto');
    ga('send', 'pageview');
  }
}
