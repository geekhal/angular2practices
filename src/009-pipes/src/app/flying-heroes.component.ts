import { Component } from '@angular/core';

import { HEROES, Flyer } from './heroes';

@Component({
    moduleId: `${module.id}`,
    selector: 'flying-heroes',
    // templateUrl: './flying-heroes.component.html'
    templateUrl: './flying-heroes-impure.component.html'
})

export class FlyingHeroesComponent {
  heroes: any[] = [];
  canFly = true;
  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
  }

  reset() { this.heroes = HEROES.slice(); }
}
