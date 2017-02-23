import { Component, OnInit } from '@angular/core';

import { Hero, HeroesService } from './heroes.service';

@Component({
  template: `
    <h3 highlight>Hero List</h3>
    <div *ngFor='let hero of heroes | async'>
      <a routerLink="{{hero.id}}">{{hero.id}} - {{hero.name}}</a>
    </div>
  `
})
export class HeroesListComponent implements OnInit {
  heroes: Promise<Hero[]>;
  constructor(private heroService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}