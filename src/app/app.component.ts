import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular Router</h1>
  <nav>
  <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  <router-outlet name="popup"></router-outlet>
  <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
