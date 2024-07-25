import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-services-pages',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './services-pages.component.html',
  styleUrl: './services-pages.component.css',
})
export class ServicesPagesComponent {
  translate = inject(TranslateService);
  services = toSignal(this.translate.get('services.serviceOptions'));
}
