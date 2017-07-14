import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
//import { CrisisListComponent } from './crisis-center/crisis-list.component';
//import { HeroListComponent } from './heroes/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from "app/compose-message.component";
const appRoutes: Routes = [
  //{path:'crisis-center',component:CrisisListComponent},
  //{path:'heroes',component:HeroListComponent},
  {path:'',redirectTo:'/heroes',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
  {path:'compose',component:ComposeMessageComponent,outlet:'popup'}
];
@NgModule({
  
  imports: [
    
    RouterModule.forRoot(
      appRoutes,{enableTracing:true}
    )
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule{}