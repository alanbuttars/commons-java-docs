import { Component, Input }      from '@angular/core';

declare var $: any;
declare var hljs: any;

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html'
})
export class CliModuleComponent {
  ngAfterViewInit() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
}
