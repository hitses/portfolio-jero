import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  defaultLanguage: string = 'en';
  translation =
    localStorage.getItem('language') ||
    this.translate.getBrowserLang() ||
    this.defaultLanguage;

  constructor(private translate: TranslateService) {
    this.translate.use(this.translation);
  }
}
