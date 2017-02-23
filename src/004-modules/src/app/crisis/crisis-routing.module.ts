import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'crisis', pathMatch: 'full'},
  {
    path: 'crisis',
    component: CrisisListComponent,
    children: [{
      path: ':id',
      component: CrisisDetailComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule {}