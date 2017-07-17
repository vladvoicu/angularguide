import { Injectable } from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../ingredient';

@Injectable()
export class RecipeService {
  private recipes:Recipe[]=[new Recipe('schnitzel','good','https://www.gustos.ro/assets/recipes_images/2014/03/17/205129/tn4_img_0043.jpg',[new Ingredient('french fries',2),new Ingredient('pork meat',1)]),
new Recipe('salad','very good','https://www.gustos.ro/assets/recipes_images/2014/03/17/205129/tn4_img_0043.jpg',[])];

  constructor() { }
getRecipes(){
  return this.recipes;
}
getRecipe(id:number)
{
  return this.recipes[id];
}
deleteRecipe(recipe:Recipe){
  this.recipes.splice(this.recipes.indexOf(recipe),1);
}
}
