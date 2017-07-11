import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import {Recipe} from'../recipe';
import {RecipeItemComponent} from './recipe-item.component';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[];
@Output() recipeSelected=new EventEmitter<Recipe>();
recipe=new Recipe('Dummy','Dummy','https://www.gustos.ro/assets/recipes_images/2014/03/17/205129/tn4_img_0043.jpg');

  ngOnInit() {
  }
onSelected(recipe:Recipe){
this.recipeSelected.emit(recipe);
}
}
