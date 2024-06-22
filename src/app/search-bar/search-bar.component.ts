import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  search = '';

  @Output() searchTextChanged = new EventEmitter<string>();

  onSearchChange(): void {
    this.searchTextChanged.emit(this.search);
  }
}
