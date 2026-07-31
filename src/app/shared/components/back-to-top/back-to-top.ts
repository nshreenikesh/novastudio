import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss'
})
export class BackToTop {

  isVisible = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}