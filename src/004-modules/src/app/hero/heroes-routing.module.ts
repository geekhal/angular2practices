import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { HeroComponent } from './heroes.component';
import { HeroListComponent } from './heroes-list.component';
import { HeroDetailComponent } from './heroes-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'hero', pathMatch: 'full' },
    {
        path: 'hero',
        component: HeroComponent,
        children: [
            { path: '', component: HeroListComponent },
            { path: ':id', component: HeroDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRoutingModule { }