import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-text-detail',
  templateUrl: './text-detail.component.html',
  styleUrls: ['./text-detail.component.scss']
})
export class TextDetailComponent implements OnInit {
  text: any;

  private apiUrl = 'http://localhost:3000/texts';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const textId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`${this.apiUrl}/${textId}`).subscribe({
      next: (data) => {
        this.text = data;
      console.log(this.text)

      },
      error: (error) => {
        console.error('Error loading text details:', error);
      }
    });
  }
}
