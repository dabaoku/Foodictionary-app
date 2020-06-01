import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GetRecipeService } from '../services/get-recipe.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  constructor( private route: ActivatedRoute,
               private getRecipeService: GetRecipeService) { }
  recipe_name:any;
  recipe_total_time:number;
  recipe_description: string;
  recipe_note: string;
  recipe_level: string;
  recipe_video: string;
  recipe_image: string;
  ngOnInit() {
   this.showRecipe();
  }

showRecipe(){
  const recipe_id =this.route.snapshot.paramMap.get('id');
  this.getRecipeService.request(recipe_id).subscribe( data =>{
  console.log(data.recipe)
  this.recipe_name = data.recipe[0].recipe_name;
  this.recipe_total_time = data.recipe[0].recipe_total_time;
  this.recipe_description = data.recipe[0].recipe_description;
  this.recipe_note = data.recipe[0].recipe_note;
  this.recipe_level = data.recipe[0].recipe_level;
  this.recipe_video = data.recipe[0].recipe_video;
  this.recipe_image = data.recipe[0].recipe_image;



  })
}

}
