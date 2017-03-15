import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
    @Input() hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService
    ) { }

    ngOnInit() {
        this.route.params
            // (+) converts string 'id' to a number
            .switchMap((params: Params) => this.service.getHero(+params['id']))
            .subscribe((hero: Hero) => this.hero = hero);
    }
}