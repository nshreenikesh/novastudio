import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  readonly theme = signal<Theme>('light');

  toggleTheme(): void {

    const nextTheme = this.theme() === 'light' ? 'dark' : 'light';

    this.theme.set(nextTheme);

    document.documentElement.setAttribute('data-theme', nextTheme);

    localStorage.setItem('theme', nextTheme);

  }

  initializeTheme(): void {

    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme) {
      this.theme.set(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

  }

}