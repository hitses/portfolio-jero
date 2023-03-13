import { Component } from '@angular/core';
import jobs from '../../assets/jobs.json';
import studies from '../../assets/studies.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  jobs = jobs.jobs;
  studies = studies.studies;
}
