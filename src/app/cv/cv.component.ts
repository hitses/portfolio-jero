import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  @Input() company!: string;
  @Input() center!: string;
  @Input() date!: string;
  @Input() paragraphs!: string[];
  @Input() link!: string;
  @Input() icons!: string[];
  isHidden: boolean = true;

  toggle() {
    this.isHidden = !this.isHidden;
  }
}
