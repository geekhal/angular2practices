import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-team',
  template: `
    <h3>Team</h3>
    <ul>
      <li *ngFor="let member of hero.team">
        {{member}}
      </li>
    </ul>`,
    styleUrls: ['./hero-team.component.css']
})
export class HeroTeamComponent {
  @Input() hero: Hero;
}