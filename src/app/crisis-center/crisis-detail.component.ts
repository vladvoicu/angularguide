import { Component,OnInit,HostBinding } from '@angular/core';

import {CrisisService,Crisis} from './crisis.service';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {slideInDownAnimation} from '../animations'

@Component({
 
  template: `
  
    <div *ngIf="crisis">
      <h3>{{crisis.name}}</h3>
      <div>
        <label>id: </label>{{crisis.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="crisis.name" placeholder="name"/>
      </div>
      <p>
      <button (click)="gotoCrises()">Back</button>
    </div>
  `,
  animations:[slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation=true;
    @HostBinding('style.display') display='block';
    @HostBinding('style.position') position='absolute';
    crisis:Crisis;

    constructor(private route:ActivatedRoute,private router:Router,private service:CrisisService){}
    ngOnInit(){
        this.route.paramMap.switchMap((params:ParamMap)=>this.service.getCrisis(params.get('id'))).subscribe((crisis:Crisis)=>this.crisis=crisis);
    }
    gotoCrises(){
        let crisisId=this.crisis?this.crisis.id:null;
        this.router.navigate(['../',{id:crisisId,foo:'foo'}],{relativeTo:this.route});
    }
 
}
