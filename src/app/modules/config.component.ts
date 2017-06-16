import { Component, Input }      from '@angular/core';

declare var $: any;
declare var hljs: any;
declare var ga: any;

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html'
})
export class ConfigModuleComponent {
  ngAfterViewInit() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
    ga('create', 'UA-52727032-2', 'auto');
    ga('send', 'pageview');
  }
}
