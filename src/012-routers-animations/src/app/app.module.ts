import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }