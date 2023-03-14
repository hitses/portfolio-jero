import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    name: ['Jero', [Validators.required, Validators.minLength(2)]],
    email: [
      'jero@mailmeloinvento.com',
      [Validators.required, Validators.email],
    ],
    subject: ['Subject', [Validators.required, Validators.minLength(2)]],
    message: [
      'Mi comentario',
      [Validators.required, Validators.maxLength(250)],
    ],
  });

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

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

  // TODO : Add REACTIVE form validations
  // public send(form: NgForm): void {

  // }
}
