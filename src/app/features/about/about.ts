import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements AfterViewInit {

  @ViewChild('timeline', { static: true })
  timeline!: ElementRef;

  @ViewChildren('timelineItem')
  timelineItems!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          // Animate the timeline line
          if (entry.target === this.timeline.nativeElement) {

            if (entry.isIntersecting) {
              entry.target.classList.add('animate-line');
            } else {
              entry.target.classList.remove('animate-line');
            }

            return;
          }

          // Animate each timeline card
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

    // Observe the timeline container
    observer.observe(this.timeline.nativeElement);

    // Observe each timeline item
    this.timelineItems.forEach(item => {
      observer.observe(item.nativeElement);
    });

  }

}