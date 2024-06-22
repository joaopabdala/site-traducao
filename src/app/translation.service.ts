import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private apiUrl = 'http://localhost:5000/translate';

  constructor(private http: HttpClient) {}

  translateText(text: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({
      q: text,
      source: 'en',
      target: 'pt',
      format: 'text',
      api_key: ''
    });
    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
