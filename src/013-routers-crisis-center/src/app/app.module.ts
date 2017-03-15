import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    CrisisCenterModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
