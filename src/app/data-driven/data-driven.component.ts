import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent  {
myForm:FormGroup;
constructor(){
  this.myForm=new FormGroup({
    'userData':new FormGroup({
       'username':new FormControl('Vlad',Validators.required),
    'email':new FormControl('',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
    }),
    
    'password':new FormControl('',Validators.required)
  });
}
  onSubmit(){
    console.log(this.myForm);
  }
}
