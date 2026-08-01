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

  readonly testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechVision',
      image: 'assets/images/client1.jpg',
      review: 'Nova Studio transformed our online presence with a modern, high-performing website.'
    },
    {
      name: 'Michael Brown',
      role: 'Founder, StartHub',
      image: 'assets/images/client2.jpg',
      review: 'The team delivered exactly what we envisioned. Fast, professional and highly skilled.'
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Director',
      image: 'assets/images/client3.jpg',
      review: 'Our customer engagement improved dramatically after the redesign. Highly recommended.'
    }
  ];

}