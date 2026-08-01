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

  readonly portfolioItems = [
  {
    title: 'Business Website',
    category: 'Web Design',
    image: 'assets/images/portfolio1.jpg'
  },
  {
    title: 'Mobile App',
    category: 'UI / UX',
    image: 'assets/images/portfolio2.jpg'
  },
  {
    title: 'Dashboard',
    category: 'Development',
    image: 'assets/images/portfolio3.jpg'
  },
];
}