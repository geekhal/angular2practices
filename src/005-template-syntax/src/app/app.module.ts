import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SizerComponent } from './sizer.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SizerComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
