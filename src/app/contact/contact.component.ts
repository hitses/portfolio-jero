import { Component } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private recaptchaV3Service: ReCaptchaV3Service) {}

  // TODO : Add REACTIVE form validations
  // public send(form: NgForm): void {
  //   if (form.invalid) {
  //     for (const control of Object.keys(form.controls)) {
  //       form.controls[control].markAsTouched();
  //     }
  //     return;
  //   }

  //   this.recaptchaV3Service.execute('importantAction')
  //   .subscribe((token: string) => {
  //     console.debug(`Token [${token}] generated`);
  //   });
  // }
}
