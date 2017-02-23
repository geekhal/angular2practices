// Exact copy except import UserService from core
import { Component }   from '@angular/core';

import { HeroesService } from './heroes.service';
import { UserService } from '../core/user.service';

@Component({
  template: `
    <h2>Heroes of {{userName}}</h2>
    <router-outlet></router-outlet>
  `,
  providers: [ HeroesService ]
})
export class HeroesComponent {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}