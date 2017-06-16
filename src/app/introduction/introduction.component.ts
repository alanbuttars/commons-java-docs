import { Component } from '@angular/core';

declare var ga: any;

@Component({
  selector: 'app-introuduction',
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent {

  ngOnInit(): void {
    ga('create', 'UA-52727032-2', 'auto');
    ga('send', 'pageview');
  }
}
