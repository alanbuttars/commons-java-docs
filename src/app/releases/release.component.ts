import { Component, Input }      from '@angular/core';

import { Release } from './release';

declare var $: any;
declare var hljs: any;

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html'
})
export class ReleaseComponent {
  @Input() release: Release;

  ngAfterViewInit() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
}
