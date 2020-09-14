import { Component, OnInit } from '@angular/core';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service';
import { GetRecipeService } from '../services/get-recipe.service';
import { NavController } from '@ionic/angular';
import { GetAllIngredientService } from '../services/get-all-ingredient.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-manual-input',
  templateUrl: './manual-input.page.html',
  styleUrls: ['./manual-input.page.scss'],
})
export class ManualInputPage implements OnInit {
 searchItem: string;
 tempIngredients: any;
//  Ingredients: any;
 allIngredient;


  constructor(
              private storage: Storage,
              private allRecipeIngredientsService: AllRecipeIngredientsService,
              private getAllIngredientService: GetAllIngredientService, 
              private getRecipeService: GetRecipeService,
              private navCtrl: NavController) { }

  ngOnInit() {
  
    this.getAllIngredientService.request().subscribe( data =>{
      this.allIngredient = data;
     });

  
  }



  
 
  

  search() {

    const food = this.searchItem;
    console.log("test food",food)
    let Ingredients = [null];
    let j = 0;
    this.storage.get('voiceResultName').then(
    (data)=> {
      let messages = data.toString().split(',');
     
      console.log("A",messages)
      for (let i = 0 ; i <= this.allIngredient.response.data.length ; i++) {
        if (food.includes(this.allIngredient.response.data[i]?.ingredient_name)) {
          Ingredients[j] = (this.allIngredient.response.data[i].ingredient_name);
          j++;
         }
      }
      for(let i = 0 ; i < Ingredients.length ; i++){
      
        messages.push(Ingredients[i]);
      }
      // this.message = Array.from(new Set(this.message));
      messages = Array.from(new Set(messages));
      console.log("B",messages);
      this.storage.set('voiceResultName', messages).then(
        (setData) =>{
          console.log('Set ok');
          this.navCtrl.navigateRoot('main').then(() => {
            window.location.reload();
          });   
        }
      );
      this.storage.get('voiceResultName').then(
        (getData) =>{
          console.log('HI', getData);     
        }
      )
  
    
    } 

    )
    // this.tempIngredients = food.split(' ');
   

    // this.navCtrl.navigateForward('result');
  }
}
