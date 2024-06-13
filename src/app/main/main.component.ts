import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ NgFor, NgIf, CommonModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit {
  texts: any[] = [];

  ngOnInit(): void {
    this.loadTexts();
  }

  loadTexts() {
    this.texts = JSON.parse(localStorage.getItem('texts') || '[]');
  }

  toggleText(index: number): void {
    this.texts[index].isExpanded = !this.texts[index].isExpanded;
  }

}