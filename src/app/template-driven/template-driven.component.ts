import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
  .ng-invalid{
    border:1px solid red
    }`]
})
export class TemplateDrivenComponent implements OnInit {
  user={
    username:'vlad',
    email:'sss@d.com',
    password:'ddfdfd',
    gender:'male'
  };
  genders=['male','female'];
  constructor() { }

  ngOnInit() {
  }
onSubmit(form:NgForm){
  console.log(form.value);
}
}
