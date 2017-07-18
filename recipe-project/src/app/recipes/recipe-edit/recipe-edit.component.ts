import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe";
import { FormArray, FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})

export class RecipeEditComponent implements OnInit {
  private recipeIndex: number;
  recipeForm: FormGroup;
  private recipe: Recipe;
  private isNew = true;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id'))
        {
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }
        else
        {
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
    });
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if(this.isNew) {
      this.recipeService.addRecipe(newRecipe);
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    console.log(newRecipe);
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }
  onAddItem(name:string,amount:string){
    (<FormArray>this.recipeForm.controls['ingredients']).push(new FormGroup(
      {
           name: new FormControl(name, Validators.required),
            amount: new FormControl(amount, [
              Validators.required,
              Validators.pattern("\\d+")
            ])
      }
    ))
  }
  onRemoveItem(index:number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }
  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew){
      //if (this.recipe.hasOwnProperty('ingredients')){
      for(let i = 0; i < this.recipe.ingredients.length; i++) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].amount, [
              Validators.required,
              Validators.pattern("\\d+")
            ])
          })
        );
      }
        //recipeIngredients.push(new FormGroup({
         //  name:new FormControl(this.recipe.ingredients[i].name,Validators.required),
         //amount:new FormControl(this.recipe.ingredients[i].amount,[Validators.required,Validators.pattern("\\d+")])}));}
      //}
        recipeName = this.recipe.name;
        recipeImage = this.recipe.imagePath;
        recipeContent = this.recipe.description; 
      }

      this.recipeForm = this.formBuilder.group({
        name: [recipeName, Validators.required],
        imagePath: [recipeImage, Validators.required],
        description: [recipeContent, Validators.required],
        ingredients: recipeIngredients
      });
      
    
  }
}

