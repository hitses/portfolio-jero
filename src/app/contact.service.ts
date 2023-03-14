import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Contact } from './interfaces/main';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  contact(body: any): Observable<Contact> {
    const url = `${this.baseUrl}/mail/contact`;
    return this.http.post<Contact>(url, body);
  }
}
