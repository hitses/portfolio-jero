import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  @Input() title!: string;
  @Input() ps!: string[];
  @Input() icons!: string[];

  isHidden: boolean = true;

  toggle() {
    this.isHidden = !this.isHidden;
  }
}
