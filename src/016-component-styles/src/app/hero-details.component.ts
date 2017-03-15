import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-details',
  template: `
    <h2>{{hero.name}}</h2>
    <hero-team [hero]=hero></hero-team>
    <ng-content></ng-content>
  `,
  styleUrls: ['./hero-details-box.css','./hero-details.component.css']
})
export class HeroDetailsComponent {
  @Input() hero: Hero;
}