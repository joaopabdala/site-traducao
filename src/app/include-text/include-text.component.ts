import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-include-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './include-text.component.html', 
  styleUrls: ['./include-text.component.scss']
})
export class IncludeTextComponent {
  private apiUrl = 'http://localhost:3000/texts';
  form: FormGroup;

  constructor(private fb: FormBuilder, private translationService: TranslationService, private router: Router, private http: HttpClient) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ0-9 \-]+$')]],
      author: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ0-9 \-]+$')]],
      text: ['', Validators.required]
    });
  }

  get title() { return this.form.get('title'); }
  get author() { return this.form.get('author'); }
  get text() { return this.form.get('text'); }

  async onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      const translatedText = await this.translateText(formData.text);
      const savedData = {
        ...formData,
        translatedText: translatedText.translatedText
      };
      this.http.post(this.apiUrl, savedData).subscribe({
        next: () => this.router.navigate(['']),
        error: (error) => console.error('Error saving text:', error)
      });
  
      this.router.navigate(['']);
    }
  }

  async translateText(text: string) {
    try {
      const response = await this.translationService.translateText(text).toPromise();
      return response;
    } catch (error) {
      console.error('Error calling translation service:', error);
      throw error;
    }
  }
}
