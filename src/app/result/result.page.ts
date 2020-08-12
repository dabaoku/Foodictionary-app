import { Component, OnInit } from '@angular/core';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service';
import { GetRecipeService } from '../services/get-recipe.service';
import { NavController } from '@ionic/angular';
import { format } from 'url';
@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor(private allRecipeIngredientsService: AllRecipeIngredientsService,
              private getRecipeService: GetRecipeService,
              private navCtrl: NavController) { }
    Ingredients: any;
    RecipeList = [];
    RecipeLists = [];
  ngOnInit() {
    const food = localStorage.getItem('manual-input');
    console.log(food);
    this.Ingredients = food.split(',');
    console.log(this.Ingredients)
    this.allRecipeIngredientsService.request().subscribe((data) => {

    for( var i = 0 ; i < data.length ; i++ ){
      for( var j = 0 ; j < this.Ingredients.length ; j++){
        if(this.Ingredients[j] ===  data[i].ingredient_name){
          this.getRecipeService.request( data[i].id ).subscribe(async (recipedata)=>{
            const countData = {
              id:recipedata.recipe[0].id,
              name: recipedata.recipe[0].recipe_name,
            }
            this.RecipeList.push(recipedata);
            console.log(this.RecipeList);

           
          });
        }
      }
    }
  })  
  }

}
