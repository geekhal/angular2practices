import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: '<app-title [subtitle]="subtitle"></app-title>'
  templateUrl: './app.component.html'
//   styleUrls: ['./app.component.css']
})
export class AppComponent {
  subtitle = '(v1)';
}