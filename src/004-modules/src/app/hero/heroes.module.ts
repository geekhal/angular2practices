import { NgModule }            from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { HeroesComponent }       from './heroes.component';
import { HeroesDetailComponent } from './heroes-detail.component';
import { HeroesListComponent }   from './heroes-list.component';
import { HeroesRoutingModule }   from './heroes-routing.module';

@NgModule({
  imports: [ SharedModule, HeroesRoutingModule ],
  declarations: [
    HeroesComponent, HeroesDetailComponent, HeroesListComponent,
  ]
})
export class HeroesModule { }