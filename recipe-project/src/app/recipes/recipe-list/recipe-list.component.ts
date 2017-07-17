import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import {Recipe} from'../recipe';
import {RecipeItemComponent} from './recipe-item.component';
import {RecipeService} from '../recipe.service';
import {RouterModule,Router} from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[];


constructor(private recipeService:RecipeService){}

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

}
