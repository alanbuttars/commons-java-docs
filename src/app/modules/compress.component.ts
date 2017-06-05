import { Component, Input }      from '@angular/core';

declare var $: any;
declare var hljs: any;

@Component({
  selector: 'app-compress',
  templateUrl: './compress.component.html'
})
export class CompressModuleComponent {
  ngAfterViewInit() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
}
