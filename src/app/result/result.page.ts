import { Component, OnInit } from '@angular/core';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service';
import { GetRecipeService } from '../services/get-recipe.service';
import { NavController } from '@ionic/angular';
import { format } from 'url';
import { stringify } from 'querystring';
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
    RecipeList5 = [];
    RecipeList4 = [];
    RecipeList3 = [];
    RecipeList2 = [];
    RecipeList1 = [];
    countArray = [];
  ngOnInit() {
    for ( let count = 0; count < 101 ; count++){
      this.countArray.push(0);
    }
    const food = localStorage.getItem('manual-input');
    console.log(food);
    this.Ingredients = food.split(',');
    console.log(this.Ingredients)
    this.allRecipeIngredientsService.request().subscribe((data) => {

    for( let i = 0 ; i < data.length ; i++ ){
      for( let j = 0 ; j < this.Ingredients.length ; j++){
        if(this.Ingredients[j] ===  data[i].ingredient_name) {
          this.countArray[data[i].id]++;
         // console.log("hi", this.countArray);
          // this.getRecipeService.request( data[i].id ).subscribe(async (recipedata)=>{
         
          //   this.RecipeList.push(recipedata);
          //   //console.log(this.RecipeList);

          // });
        }
      }
    }
console.log(this.countArray)
    for( let m = 1; m < 101 ; m++){
      if(this.countArray[m] >= 5){
        const mm = JSON.stringify(m);
        this.getRecipeService.request(mm).subscribe( (recipe)=>{
          this.RecipeList5.push(recipe);
        })
      } else if(this.countArray[m] === 4){
          const mm = JSON.stringify(m);
          this.getRecipeService.request(mm).subscribe( (recipe)=>{
          this.RecipeList4.push(recipe);
        })
      } else if(this.countArray[m] === 3){
        const mm = JSON.stringify(m);
        this.getRecipeService.request(mm).subscribe( (recipe)=>{
          this.RecipeList3.push(recipe);
        })
      }else if(this.countArray[m] === 2){
        const mm = JSON.stringify(m);
        this.getRecipeService.request(mm).subscribe( (recipe)=>{
          this.RecipeList2.push(recipe);
        })
      } else if(this.countArray[m] === 1){
        const mm = JSON.stringify(m);
        this.getRecipeService.request(mm).subscribe( (recipe)=>{
          this.RecipeList1.push(recipe);
        })
      }
    }

  })  
  }

}
