import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  message: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {

  readonly testimonials: Testimonial[] = [
    {
      name: 'John Anderson',
      role: 'CEO, FinTech Solutions',
      message: 'Nova Studio transformed our vision into an outstanding product. The design and performance exceeded our expectations.'
    },
    {
      name: 'Sarah Wilson',
      role: 'Founder, Creative Hub',
      message: 'Professional, responsive, and highly skilled. The team delivered an exceptional website on time.'
    },
    {
      name: 'Michael Brown',
      role: 'Product Manager',
      message: 'The user experience and attention to detail were impressive. We would gladly work with Nova Studio again.'
    }
  ];

}