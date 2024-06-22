import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  title = 'NavComponent';
  logoImage = 'https://i.pinimg.com/474x/7b/50/96/7b5096b72d57257a688948ea655a0097.jpg'
}
