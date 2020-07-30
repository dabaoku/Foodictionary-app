import { Component, OnInit } from '@angular/core';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GetRecipeService } from '../services/get-recipe.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
Ingredient: string;
RecipeList = [ ];
  constructor(
              private getRecipeService: GetRecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private navCtrl: NavController,
              private allRecipeIngredients: AllRecipeIngredientsService) { 
                this.Ingredient = this.route.snapshot.paramMap.get('ingredient');
              }

  ngOnInit() {
  
    this.allRecipeIngredients.request().subscribe((data) => {
      for( var i = 0 ; i < data.length ; i++ ){
        if(this.Ingredient === data[i].ingredient_name){
          this.getRecipeService.request( data[i].id ).subscribe((recipedata)=>{
            this.RecipeList.push(recipedata);
          });
        }

      }
    });
    console.log(this.RecipeList)
  }

}
