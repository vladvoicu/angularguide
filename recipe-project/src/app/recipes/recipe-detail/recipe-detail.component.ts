import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() selectedRecipe:Recipe;
  constructor(private sls:ShoppingListService) { }

  ngOnInit() {
  }
onAddToS()
{
this.sls.addItems(this.selectedRecipe.ingredients);
}
}
