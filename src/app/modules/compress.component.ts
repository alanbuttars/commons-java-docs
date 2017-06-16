import { Component, Input, OnInit }      from '@angular/core';

import { CompressFileTypeService } from './compress-file-type.service';
import { CompressFileType } from './compress-file-type';

declare var $: any;
declare var hljs: any;
declare var ga: any;

@Component({
  selector: 'app-compress',
  templateUrl: './compress.component.html'
})
export class CompressModuleComponent implements OnInit {
  compressFileTypes: CompressFileType[];

  constructor(
    private compressFileTypeService: CompressFileTypeService,
  ) { }

  ngOnInit(): void {
    this.compressFileTypeService.getCompressFileTypes()
      .then(compressFileTypes => {
        this.compressFileTypes = compressFileTypes;
      })
  }

  ngAfterViewInit() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
    ga('create', 'UA-52727032-2', 'auto');
    ga('send', 'pageview');
  }

  getFileType(fileType): CompressFileType {
    return this.compressFileTypes.find(compressFileType => compressFileType.fileType == fileType)
  }
}
