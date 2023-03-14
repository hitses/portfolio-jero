import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  language: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.use(
      localStorage.getItem('language') ||
        this.translate.getBrowserLang() ||
        this.language
    );
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
