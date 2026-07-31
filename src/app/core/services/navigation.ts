import { Injectable } from '@angular/core';
import { NavigationItem } from '../models/navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  readonly items: NavigationItem[] = [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'Services',
      route: '/services'
    },
    {
      label: 'Portfolio',
      route: '/portfolio'
    },
    {
      label: 'About',
      route: '/about'
    },
    {
      label: 'Contact',
      route: '/contact'
    }
  ];

}