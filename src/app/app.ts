import { Component, AfterViewInit } from '@angular/core';
import {
  Router,
  RouterOutlet,
  NavigationEnd
} from '@angular/router';
import { filter } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' as ScrollBehavior
        });

        AOS.refresh();

      });

  }

  ngAfterViewInit(): void {

    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
      easing: 'ease-out-cubic'
    });

  }

}