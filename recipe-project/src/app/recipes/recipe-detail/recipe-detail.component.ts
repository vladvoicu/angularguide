import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import {Router,ActivatedRoute} from '@angular/router';
import { RecipeService } from "app/recipes/recipe.service";
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
selectedRecipe:Recipe;
private recipeIndex:number;
  constructor(private sls:ShoppingListService,private router:Router,private route:ActivatedRoute,private recipesService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params:any)=>{this.recipeIndex=params['id'];
  this.selectedRecipe=this.recipesService.getRecipe(this.recipeIndex)});
  }
onAddToS()
{
this.sls.addItems(this.selectedRecipe.ingredients);
}
onEdit()
{
  this.router.navigate(['/recipes',this.recipeIndex,'edit']);
}
onDelete()
{
  this.recipesService.deleteRecipe(this.selectedRecipe);
  this.router.navigate(['/recipes']);
}
}
