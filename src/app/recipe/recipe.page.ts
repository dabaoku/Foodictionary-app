import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GetRecipeService } from '../services/get-recipe.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  recipe_id:string;             
  recipe_name: any;
  recipe_total_time : number;
  recipe_description: string;
  recipe_note: string;
  recipe_level: string;
  recipe_video: string;
  recipe_image: string;
  ingredients:any;

  constructor( 
              private router: Router,
              private route: ActivatedRoute,
               private getRecipeService: GetRecipeService,
               private dom: DomSanitizer,
               private navCtrl: NavController) {this.recipe_id = this.route.snapshot.paramMap.get('id'); }


  ngOnInit() {
   this.showRecipe();
   this.showIngredients()
  }

showRecipe(){
 
  this.getRecipeService.request(this.recipe_id).subscribe( data =>{
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

showIngredients(){

  this.getRecipeService.request(this.recipe_id).subscribe( data=>{
   this.ingredients = data.ingredient;
   console.log(this.ingredients)
  })

}

showVideo(){
  this.dom.bypassSecurityTrustResourceUrl(this.recipe_video);
  console.log(this.recipe_video)
}
async goToTeaching(){
  //await this.navCtrl.navigateForward('video-teaching/'+ this.recipe_id);
  await this.router.navigateByUrl('video-teaching/'+ this.recipe_id);
}

}
