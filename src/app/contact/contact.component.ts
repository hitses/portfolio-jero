import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  mailSended: boolean = false;
  sending: boolean = false;
  contact: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(2)]],
    email: [, [Validators.required, Validators.email]],
    subject: [, [Validators.required, Validators.minLength(2)]],
    message: [, [Validators.required, Validators.maxLength(250)]],
  });
  name!: string;
  email!: string;
  subject!: string;
  message!: string;
  invalidName!: string;
  invalidEmail!: string;
  invalidSubject!: string;
  invalidMessage!: string;
  sendButton!: string;

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private fb: FormBuilder,
    private contactService: ContactService,
    private translate: TranslateService
  ) {
    this.contactTranslations();
  }

  invalidField(field: string) {
    return (
      this.contact.controls[field].errors &&
      this.contact.controls[field].touched
    );
  }

  send() {
    if (this.contact.invalid) {
      this.contact.markAllAsTouched();
      return;
    }

    const body = this.contact.value;
    body.language = 'es';

    this.sending = true;

    this.contactService.contact(body).subscribe((res) => {
      this.recaptchaV3Service
        .execute('importantAction')
        .subscribe((token: string) => {
          console.debug(`Token [${token}] generated`);
        });

      if (res.status === 200) {
        this.mailSended = true;
        this.sending = false;
      }
      this.contact.reset();
    });
  }

  contactTranslations() {
    this.translate.stream(`contact.labels.name`).subscribe((res: string) => {
      this.name = res;
    });

    this.translate.stream(`contact.labels.email`).subscribe((res: string) => {
      this.email = res;
    });
    this.translate.stream(`contact.labels.subject`).subscribe((res: string) => {
      this.subject = res;
    });
    this.translate.stream(`contact.labels.message`).subscribe((res: string) => {
      this.message = res;
    });
    this.translate.stream(`contact.invalids.name`).subscribe((res: string) => {
      this.invalidName = res;
    });
    this.translate.stream(`contact.invalids.email`).subscribe((res: string) => {
      this.invalidEmail = res;
    });
    this.translate
      .stream(`contact.invalids.subject`)
      .subscribe((res: string) => {
        this.invalidSubject = res;
      });
    this.translate
      .stream(`contact.invalids.message`)
      .subscribe((res: string) => {
        this.invalidMessage = res;
      });
    this.translate.stream(`contact.buttons.send`).subscribe((res: string) => {
      this.sendButton = res;
    });
  }
}
