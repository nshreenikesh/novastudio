import { Component } from '@angular/core';

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

  readonly projects: PortfolioItem[] = [
    {
      title: 'Finance Dashboard',
      category: 'Angular 21',
      image: 'https://picsum.photos/600/400?random=1'
    },
    {
      title: 'Healthcare Portal',
      category: 'UI / UX',
      image: 'https://picsum.photos/600/400?random=2'
    },
    {
      title: 'Travel Booking',
      category: 'Web Application',
      image: 'https://picsum.photos/600/400?random=3'
    }
  ];

}