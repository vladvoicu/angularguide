import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-list',
  template: `
  <h2>Crisis Center</h2>
  <p>Get your crisis here</p>`,
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
