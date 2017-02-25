import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeavyLoaderComponent } from './heavy-loader.component';
import { StructuralDirectivesComponent } from './structural-directives.component';

import { UnlessDirective } from './unless.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HeavyLoaderComponent,
    StructuralDirectivesComponent,
    UnlessDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
