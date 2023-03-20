import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { createTranslateLoader } from './helpers/translationConfig';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CvComponent,
    FooterComponent,
    HomeComponent,
    LoaderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
