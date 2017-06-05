import { Component, Input }      from '@angular/core';

declare var $: any;
declare var hljs: any;

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html'
})
export class ConfigModuleComponent {
  ngAfterViewInit() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
}
