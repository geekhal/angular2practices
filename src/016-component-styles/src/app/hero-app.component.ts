import { Component, HostBinding } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-app',
  template: `
    <h1>Tour of Heroes</h1>
    <hero-app-main [hero]=hero></hero-app-main>`,
  styles: ['h1 { font-weight: normal; }']
})
export class HeroAppComponent {
  hero = new Hero(
    'Human Torch',
    ['Mister Fantastic', 'Invisible Woman', 'Thing']
  );

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }
}