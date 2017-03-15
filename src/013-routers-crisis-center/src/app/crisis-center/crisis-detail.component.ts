import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { slideInDownAnimation } from '../animations';
import { CrisisService, Crisis } from './crisis.service';
@Component({
  template: `
  <h2>CRISES</h2>
  <div *ngIf="crisis">
    <h3>"{{ crisis.name }}"</h3>
    <div>
      <label>Id: </label>{{ crisis.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="crisis.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoCrises()">Back</button>
    </p>
  </div>
  `,
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  crisis: Crisis;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }
  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getCrisis(+params['id']))
      .subscribe((crisis: Crisis) => this.crisis = crisis);
  }
  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the crisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });

  }
}