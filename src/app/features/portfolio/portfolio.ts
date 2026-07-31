import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements AfterViewInit {

  @ViewChildren('statCard')
  statCards!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('animate');

          } else {

            entry.target.classList.remove('animate');

          }

        });

      },
      {
        threshold: 0.25
      }
    );

    this.statCards.forEach(card => {
      observer.observe(card.nativeElement);
    });

  }

}