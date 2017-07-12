import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent} from './shopping-list-add/shopping-list-add.component';
import {Ingredient} from '../ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items:Ingredient[]=[];

  constructor() { }

  ngOnInit() {
  }

}
