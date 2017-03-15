// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CrisisService, Crisis } from './crisis.service';

@Component({
    template: `
    <router-outlet></router-outlet>
    <ul class="items">
        <li *ngFor="let crisis of crises | async">
        <a [routerLink]="[crisis.id]"
            [class.selected]="isSelected(crisis)">
            <span class="badge">{{ crisis.id }}</span>
            {{ crisis.name }}
        </a>
        </li>
    </ul>`
})
export class CrisisListComponent implements OnInit {
    crises: Observable<Crisis[]>;
    private selectedId: number;
    constructor(
        private service: CrisisService,
        private route: ActivatedRoute,
        private router: Router
    ) { }
    ngOnInit() {
        this.crises = this.route.params
            .switchMap((params: Params) => {
                this.selectedId = +params['id'];
                return this.service.getCrises();
            });
    }
    isSelected(crisis: Crisis) { return crisis.id === this.selectedId; }
    onSelect(crisis: Crisis) {
        this.selectedId = crisis.id;

        // Navigate with relative link
        this.router.navigate([crisis.id], { relativeTo: this.route });
    }

}
