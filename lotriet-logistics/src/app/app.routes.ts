import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
    data: { preload: true },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about-page/about-page.component').then((m) => m.AboutPageComponent),
    data: { preload: true },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services-pages/services-pages.component').then(
        (m) => m.ServicesPagesComponent,
      ),
    data: { preload: true },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact-page/contact-page.component').then((m) => m.ContactPageComponent),
    data: { preload: true },
  },
];
