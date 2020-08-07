import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavController} from '@ionic/angular';
import { LogoutService } from '../services/logout.service';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
              private logoutService: LogoutService,
              private router: Router,
              private navCtrl: NavController,
              private cookieService: CookieService,
              private allRecipeIngredients: AllRecipeIngredientsService) { }
  
Ingredients: any;
Happy;

  ngOnInit() {
    const foods = localStorage.getItem('voiceResultName');
    this.Ingredients = foods.split(','); 
    console.log(localStorage.getItem('voiceResultPicture'))
  }

  goToRecipe() {
    this.navCtrl.navigateForward('recipe-list');
  }

  goToVoice() {
    this.navCtrl.navigateForward('voice');
  }

  goToFoodFilter() {
    this.navCtrl.navigateForward('foodfilter');
  }

  showAll(ingredient: string) {
      this.navCtrl.navigateForward('search-result/' + ingredient);
    }


 

  logout() {
    this.logoutService.request().subscribe((data) => {
      alert(data);
      this.cookieService.delete('email');
      this.cookieService.delete('password');
      this.cookieService.set('flag', 'logout');
      this.router.navigateByUrl('login');
    });
  }
}
