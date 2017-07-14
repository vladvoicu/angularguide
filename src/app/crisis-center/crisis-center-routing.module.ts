import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import {CrisisCenterComponent} from './crisis-center.component';
 import {CrisisCenterHomeComponent} from './crisis-center-home.component';
const crisesCenterRoutes: Routes = [
   { path:'crisis-center',component:CrisisCenterComponent,
   children:[
       {path:'',component:CrisisListComponent,
    children:[
        {path:':id',component:CrisisDetailComponent},
        {path:'',component:CrisisCenterHomeComponent}
    ]}
   ]}
];
 
 
@NgModule({
  imports: [
    RouterModule.forChild(crisesCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }