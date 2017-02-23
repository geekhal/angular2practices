import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { ContactModule }    from './contact/contact.module';
import { CrisisModule } from './crisis/crisis.module';
import { HeroModule } from './hero/hero.module';
import { CoreModule }       from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    CrisisModule,
    HeroModule,
/*
    CoreModule,
*/
    CoreModule.forRoot({userName: 'Miss Marple'}),
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }