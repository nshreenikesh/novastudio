import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  readonly stats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '6+', label: 'Years Experience' }
  ];

}