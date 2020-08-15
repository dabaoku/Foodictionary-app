import { Component, OnInit } from '@angular/core';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service';
import { GetRecipeService } from '../services/get-recipe.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-manual-input',
  templateUrl: './manual-input.page.html',
  styleUrls: ['./manual-input.page.scss'],
})
export class ManualInputPage implements OnInit {
 searchItem: string;
 Ingredients: any;

  constructor(private allRecipeIngredientsService: AllRecipeIngredientsService,
              private getRecipeService: GetRecipeService,
              private navCtrl: NavController) { }

  ngOnInit() {
   
  }

  search() {
    const food = this.searchItem;
    this.Ingredients = food.split(' ');

    const local = localStorage.getItem('voiceResultName');
    console.log(local);
    let messages = local.substring(0, local.length  ).split(',');
    for(let i = 0 ;i < this.Ingredients.length ;i++){
      messages.push(this.Ingredients[i]);
    }
    //messages.push(this.Ingredients);
    messages = Array.from(new Set(messages));
    console.log(messages);
    localStorage.setItem('voiceResultName',messages.toString());
    this.navCtrl.navigateRoot('main').then(() => {
      window.location.reload();
    });    // this.navCtrl.navigateForward('result');
  }
}
