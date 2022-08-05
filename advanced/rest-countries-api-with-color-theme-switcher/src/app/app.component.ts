import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rest-countries-api-with-color-theme-switcher';
  theme: string = document.body.getAttribute('data-theme')!;

  toggleDarkTheme(): void {
    this.theme = document.body.getAttribute('data-theme')!;
    if (this.theme === 'light')
      document.body.setAttribute('data-theme', 'dark');
    else
      document.body.setAttribute('data-theme', 'light');
  }
}
