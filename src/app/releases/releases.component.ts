import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ReleaseService } from './release.service';
import { Release } from './release';

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
        console.log(release);
        this.release = release
      });
  }
}
