import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray,FormBuilder } from "@angular/forms";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent  {
myForm:FormGroup;
genders=['male','female'];
constructor(private formBuilder:FormBuilder){
  this.myForm=new FormGroup({
    'userData':new FormGroup({
       'username':new FormControl('Vlad',[Validators.required,this.exampleValidator]),
    'email':new FormControl('',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
    }),
    
    'password':new FormControl('',Validators.required),
    'gender':new FormControl('male'),
    'hobbies':new FormArray([new FormControl('cooking',Validators.required,this.asyncExample)])
  });
  this.myForm.valueChanges.subscribe(
    (data:any)=>console.log(data)
  );
  
}
  onSubmit(){
    console.log(this.myForm);
  }
  addHobby(){
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('',Validators.required,this.asyncExample));
  }
  exampleValidator(control:FormControl):{[s:string]:boolean}{
    if(control.value==='Example'){
      return {example:true};
    }
    return null;
  }
  asyncExample(control:FormControl):Promise<any>|Observable<any>{
    const promise=new Promise<any>(
      (resolve,reject)=>{
        setTimeout(()=>{
          if(control.value==='Example')
          {resolve({'invalid':true});}
          else{resolve(null);}
        },1500);
      }
    );
    return promise;
  }
}
