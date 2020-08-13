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
    localStorage.setItem('voiceResultName', this.Ingredients);
    this.navCtrl.navigateRoot('main').then(() => {
      window.location.reload();
    });    // this.navCtrl.navigateForward('result');
  }
}
