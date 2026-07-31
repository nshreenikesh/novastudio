import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavigationService } from '../../../core/services/navigation';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
toggleTheme() {
throw new Error('Method not implemented.');
}

  navigation = inject(NavigationService);

  // Mobile menu
  menuOpen = signal(false);

  // Scroll state
  scrolled = signal(false);

  toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

}