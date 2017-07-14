import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
  
  template: `
   
    <h2>Heroes</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes|async"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <button routerLink="/sidekicks">Go to sidekicks</button>
    
  `,
 
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  heroes:Observable<Hero[]>;
  private selectedId:number;
  constructor(private router:Router,private service: HeroService,private route:ActivatedRoute) { }

  ngOnInit(){
      this.heroes=this.route.paramMap.switchMap((params:ParamMap)=>{this.selectedId=+params.get('id');
    return this.service.getHeroes();});
  }
isSelected(hero:Hero){return hero.id===this.selectedId;}
 onSelect(hero:Hero){this.router.navigate(['/hero',hero.id]);}
  
}

