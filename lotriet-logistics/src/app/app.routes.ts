import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPagesComponent } from './pages/services-pages/services-pages.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'services', component: ServicesPagesComponent },
  { path: 'contact', component: ContactPageComponent },
];
