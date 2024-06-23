import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, SearchBarComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  texts: any[] = [];
  filteredTexts: any[] = [];

  private apiUrl = 'http://localhost:3000/texts'; 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadTexts();
  }

  loadTexts(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.texts = data;
        this.filteredTexts = this.texts;
      },
      error: (error) => {
        console.error('Error loading texts:', error);
      }
    });
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
