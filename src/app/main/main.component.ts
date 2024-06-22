import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, SearchBarComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  texts: any[] = [];
  filteredTexts: any[] = [];

  ngOnInit(): void {
    this.loadTexts();
  }

  loadTexts(): void {
    this.texts = JSON.parse(localStorage.getItem('texts') || '[]');
    this.filteredTexts = this.texts;
  }

  onSearchTextChanged(searchText: string): void {
    this.filteredTexts = this.texts.filter(text =>
      text.title.toLowerCase().includes(searchText.toLowerCase()) ||
      text.author.toLowerCase().includes(searchText.toLowerCase()) ||
      text.text.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  toggleText(index: number): void {
    this.filteredTexts[index].isExpanded = !this.filteredTexts[index].isExpanded;
  }
}
