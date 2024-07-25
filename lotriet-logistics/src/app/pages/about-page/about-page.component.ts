import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'], // Use `styleUrls` instead of `styleUrl`
})
export class AboutPageComponent {
  // Component logic goes here
}
