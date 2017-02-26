import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroBirthdayComponent } from './hero-birthday1.component';
import { HeroBirthday2Component } from './hero-birthday2.component';
import { PowerBoosterComponent } from './power-booster.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import { FlyingHeroesComponent } from './flying-heroes.component';
import { HeroAsyncMessageComponent } from './hero-async-message.component';
import { HeroListComponent } from './hero-list.component';

import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesImpurePipe, FlyingHeroesPipe } from './flying-heroes.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroBirthdayComponent,
    HeroBirthday2Component,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    HeroAsyncMessageComponent,
    HeroListComponent,
    ExponentialStrengthPipe,
    FlyingHeroesImpurePipe,
    FlyingHeroesPipe,
    FetchJsonPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
