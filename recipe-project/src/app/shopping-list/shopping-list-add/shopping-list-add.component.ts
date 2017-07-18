import { Component, OnInit, Input, OnChanges, EventEmitter,Output } from '@angular/core';
import { Ingredient } from "app/ingredient";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";


@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit,OnChanges {
  isAdd=true;
@Input() item:Ingredient;
@Output() cleared=new EventEmitter();
  constructor(private sls:ShoppingListService) { }

  ngOnInit() {
  }
ngOnChanges(changes){
  if(changes.item.currentValue===null){
    this.isAdd=true;
    this.item={name:null,amount:null};
  }else{
    this.isAdd=false;
  }
}
onSubmit(value:Ingredient){
  const newIngredient=new Ingredient(value.name,value.amount);
  if(!this.isAdd){this.sls.editItem(this.item,newIngredient);
  this.onClear();}
    else{
      this.item=newIngredient;
      this.sls.addItem(this.item);
    }
  
}
onDelete(){
  this.sls.deleteItem(this.item);
  this.onClear();
}
onClear(){
  this.isAdd=true;
  this.cleared.emit(null);
}
}
