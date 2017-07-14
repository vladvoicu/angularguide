import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';

import { CrisisService,Crisis } from './crisis.service';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
  
  template: `
   
    
    <ul class="items">
      <li *ngFor="let crisis of crises|async"
        (click)="onSelect(crisis)"
         [class.selected]="isSelected(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
 
    
  `,
 
  providers: [CrisisService]
})
export class CrisisListComponent implements OnInit {
  crises:Observable<Crisis[]>;
  selectedId:number;
  constructor(private router:Router,private service: CrisisService,private route:ActivatedRoute) { }

  ngOnInit(){
      this.crises=this.route.paramMap.switchMap((params:ParamMap)=>{this.selectedId=+params.get('id');
    return this.service.getCrises();});
  }
isSelected(crisis:Crisis){
  return crisis.id===this.selectedId;
}
 onSelect(crisis:Crisis){
   this.router.navigate([crisis.id],{relativeTo:this.route});
  }
  
}

