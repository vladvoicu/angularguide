import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { RecipesComponent } from "app/recipes/recipes.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import {RECIPE_ROUTES} from './recipes/recipes.routes';

const appRoutes: Routes = [

  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,children:RECIPE_ROUTES},
  {path:'shopping-list',component:ShoppingListComponent}
  
];
@NgModule({
  
  imports: [
    
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule{}