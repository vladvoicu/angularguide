
import {RouterModule,Routes} from '@angular/router';
import { RecipestartComponent } from "app/recipes/recipestart.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
export const RECIPE_ROUTES: Routes = [
    {path:'',component:RecipestartComponent},
    {path:'new',component:RecipeEditComponent},
     {path:':id',component:RecipeDetailComponent},
    {path:':id/edit',component:RecipeEditComponent}

]