import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Hero,
         HeroesService }    from './heroes.service';

@Component({
  template: `
    <h3 highlight>Hero Detail</h3>
    <div *ngIf="hero">
      <div>Id: {{hero.id}}</div><br>
      <label>Name:
        <input [(ngModel)]="hero.name">
      </label>
    </div>
    <br>
    <a routerLink="../">Hero List</a>
  `
})
export class HeroesDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.heroesService.getHero(id).then(heroes => this.hero = heroes);
  }
}