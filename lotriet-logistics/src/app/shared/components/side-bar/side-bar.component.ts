import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    CommonModule,
    ButtonComponent,
    TranslateModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  sidebarVisible = false;

  toggleSideBar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  constructor(private router: Router) {}

  isOtherLinkActive(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/';
  }
}
