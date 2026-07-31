import { Component } from '@angular/core';

import { Hero } from './components/hero/hero';
import { Trusted } from './components/trusted/trusted';
import { Services } from './components/services/services';
import { Portfolio } from './components/portfolio/portfolio';
import { About } from './components/about/about';
import { Testimonials } from './components/testimonials/testimonials';
import { Pricing } from './components/pricing/pricing';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  Hero,
  Trusted,
  Services,
  Portfolio,
  About,
  Testimonials,
  Pricing,
  Contact
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}