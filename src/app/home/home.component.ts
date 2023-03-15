import { Component } from '@angular/core';
import translationEs from '../../assets/i18n/es.json';
import { TranslateService } from '@ngx-translate/core';
import { Jobs, Studies } from '../interfaces/main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  jobs: Jobs[] = [];
  studies: Studies[] = [];
  presentationParagraphs: string = '';

  constructor(private translate: TranslateService) {
    this.presentationParagraphsTranslation();
    this.jobsTranslations();
    this.studiesTranslations();
  }

  presentationParagraphsTranslation() {
    this.translate.stream('home.presentation').subscribe((res: string) => {
      this.presentationParagraphs = res;
    });
  }

  jobsTranslations() {
    this.translate.stream('home.jobs.jobs').subscribe((res: Jobs[]) => {
      this.jobs = res;
    });
  }

  studiesTranslations() {
    this.translate
      .stream('home.studies.studies')
      .subscribe((res: Studies[]) => {
        this.studies = res;
      });
  }
}
