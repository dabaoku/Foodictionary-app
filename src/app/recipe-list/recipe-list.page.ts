import { Component, OnInit } from '@angular/core';
import { GetAllRecipeService } from '../services/get-all-recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss'],
})

export class RecipeListPage implements OnInit {

  RecipeList: any;
  searchItem: string;
  allRecipe;
  searchRecipe;
  notSearch = true;

  constructor(private getAllRecipeService: GetAllRecipeService) {
   }

  ngOnInit() {
    this.showAllRecipe();
  }

  showAllRecipe(){
    this.getAllRecipeService.request().subscribe( data =>{
     this.RecipeList = data;
    })
  }

  search() {
    this.getAllRecipeService.request().subscribe( data =>{
      const keyword = this.searchItem;
      this.allRecipe = data;
      this.notSearch = false;
      let searchRecipe = [null];
      let j = 0;
      for (let i = 0 ; i <= this.allRecipe.length ; i++) {
        if (this.allRecipe[i]?.recipe_name.includes(keyword)) {
          console.log(keyword);
          searchRecipe[j] = this.allRecipe[i];
          j++;
        }
      }
      console.log(searchRecipe)
      this.searchRecipe = searchRecipe;
      console.log(this.searchRecipe)
     })
  }

  onCancel($event){
    this.notSearch = true;
  }

}
