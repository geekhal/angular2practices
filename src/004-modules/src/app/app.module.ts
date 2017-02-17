import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactModule } from './contact/contact.module';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';

import { UserService } from './user.service';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule
  ],
  declarations: [
    AppComponent,
    TitleComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
