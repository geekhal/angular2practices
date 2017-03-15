import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CanDeactivateGuard } from '../can-deactive-guard.service';
import { CrisisDetailResolver } from './crisis-detail-resolver.service';
const crisisCenterRoutes: Routes = [
  {
    path: '',
    redirectTo: '/crisis-center',
    pathMatch: 'full'
  },
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolver
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CrisisDetailResolver
  ]
})
export class CrisisCenterRoutingModule { }
