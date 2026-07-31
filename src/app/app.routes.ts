import { Routes } from '@angular/router';
import { MainLayout } from './shared/layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home').then(m => m.Home)
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./features/services/services').then(m => m.Services)
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./features/portfolio/portfolio').then(m => m.Portfolio)
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about').then(m => m.About)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact').then(m => m.Contact)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];