import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-include-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './include-text.component.html',
  styleUrls: ['./include-text.component.scss']
})
export class IncludeTextComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      author: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      text: ['', Validators.required]
    });
  }

  get title() { return this.form.get('title'); }
  get author() { return this.form.get('author'); }
  get text() { return this.form.get('text'); }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      localStorage.setItem('formData', JSON.stringify(this.form.value));
    }
  }
}
