import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  formattedYear = 2016 == new Date().getFullYear() ? 2016 : 2016 + "-" + new Date().getFullYear();
}
