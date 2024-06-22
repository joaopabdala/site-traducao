import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-include-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './include-text.component.html', 
  styleUrls: ['./include-text.component.scss']
})
export class IncludeTextComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private translationService: TranslationService, private router: Router) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      author: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
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
      const existingTexts = JSON.parse(localStorage.getItem('texts') || '[]');
      existingTexts.push(savedData);
      localStorage.setItem('texts', JSON.stringify(existingTexts));
  
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
