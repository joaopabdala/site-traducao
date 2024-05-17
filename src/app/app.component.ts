import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template:`
    <main class="main">
      <app-nav >
        <router-outlet>
        </router-outlet>
      </app-nav>
    < /main>`
  ,
  imports: [
    RouterOutlet,
    NavComponent,
    SearchBarComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mitski';
}
