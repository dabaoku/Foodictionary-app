import { Component, OnInit } from '@angular/core';
import { GetAllRecipeService } from '../services/get-all-recipe.service';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss'],
})
export class RecipeListPage implements OnInit {

  RecipeList: any;
  constructor(private getAllRecipeService: GetAllRecipeService,
              private allRecipeIngredients: AllRecipeIngredientsService) {
 
   }

  ngOnInit() {
    this.showAllRecipe();
    this.showAll();
  }

  showAllRecipe(){
    this.getAllRecipeService.request().subscribe( data =>{
     this.RecipeList = data

    })
  }

showAll(){
this.allRecipeIngredients.request().subscribe((data)=>{
  console.log(data);
  for(let i = 0 ; i < data.length ; i++){
     if (data[i].ingredient_name === '雞蛋'){
       console.log(data[i].recipe_name)
     }
  }
});
}

}
