import { Component } from '@angular/core';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss'
})
export class Pricing {

  readonly plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '$499',
      description: 'Perfect for startups and personal brands.',
      featured: false,
      features: [
        'Landing Page',
        'Responsive Design',
        'Basic SEO',
        'Email Support'
      ]
    },
    {
      name: 'Professional',
      price: '$999',
      description: 'Best choice for growing businesses.',
      featured: true,
      features: [
        'Multi-page Website',
        'Angular Development',
        'Performance Optimization',
        'Priority Support'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations.',
      featured: false,
      features: [
        'Custom Development',
        'Dedicated Team',
        'API Integration',
        '24/7 Support'
      ]
    }
  ];

}