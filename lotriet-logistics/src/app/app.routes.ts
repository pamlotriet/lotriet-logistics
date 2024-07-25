import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about-page/about-page.component').then((m) => m.AboutPageComponent),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services-pages/services-pages.component').then(
        (m) => m.ServicesPagesComponent,
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact-page/contact-page.component').then((m) => m.ContactPageComponent),
  },
];
