import { Component, OnInit } from '@angular/core';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service';
import { GetRecipeService } from '../services/get-recipe.service';
import { NavController } from '@ionic/angular';
import { GetAllIngredientService } from '../services/get-all-ingredient.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
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
 message = [] ;

  constructor(private nativeStorage: NativeStorage,
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
    let Ingredients = [null];
    let j = 0;
    // this.tempIngredients = food.split(' ');
    for (let i = 0 ; i <= this.allIngredient.response.data.length ; i++) {
      if (food.includes(this.allIngredient.response.data[i]?.ingredient_name)) {
        Ingredients[j] = (this.allIngredient.response.data[i].ingredient_name);
        j++;
       }
    }

    // const cookie
    const local = this.nativeStorage.getItem('voiceResultName').then(
    data =>{
      this.message = data.substring(0, data.length  ).split(',');
    }

   );
    console.log(local);
   
   
   
    for(let i = 0 ;i < Ingredients.length ;i++){
      this.message.push(Ingredients[i]);
    }
    //messages.push(this.Ingredients);
    this.message = Array.from(new Set(this.message));
    console.log(this.message);
    this.nativeStorage.setItem('voiceResultName',this.message.toString());
    this.navCtrl.navigateRoot('main').then(() => {
      window.location.reload();
    });    // this.navCtrl.navigateForward('result');
  }
}
