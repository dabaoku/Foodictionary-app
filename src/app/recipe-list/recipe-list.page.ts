import { Component, OnInit } from '@angular/core';
import{ GetAllRecipeService } from '../services/get-all-recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss'],
})
export class RecipeListPage implements OnInit {

  RecipeList: any;
  constructor(private getAllRecipeService: GetAllRecipeService) {
 
   }

  ngOnInit() {
    this.showAllRecipe();
  }

  showAllRecipe(){
    this.getAllRecipeService.request().subscribe( data =>{
     this.RecipeList = data

    })
  }



}
