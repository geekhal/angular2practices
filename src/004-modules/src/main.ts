// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { platformBrowser } from '@angular/platform-browser';
// The app module
import { AppModule } from './app/app.module';
// Compile and launch the module
// platformBrowser().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(AppModule);