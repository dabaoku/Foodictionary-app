import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavController} from '@ionic/angular';
import { LogoutService } from '../services/logout.service';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service';
import { CookieService } from 'ngx-cookie-service';
import { VirtualTimeScheduler } from 'rxjs';
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

  ngOnInit() {
    const foods = localStorage.getItem('voiceResultName');
    this.Ingredients = foods.split(','); 
    console.log(localStorage.getItem('voiceResultPicture'));

 
    for ( let i = 0 ;  i < this.Ingredients.length ; i++) {
      if ( this.Ingredients[i] === '') {
        this.Ingredients.splice( i, 1 );
      }
    }
   
    
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

  navigateToManual() {
    this.navCtrl.navigateForward('manual-input');
  }
  goToCamera(){
    this.navCtrl.navigateForward('foodfilter');
  }
  goSearch(){
 
    localStorage.setItem('manual-input', this.Ingredients);
    this.navCtrl.navigateForward('result');
  }
  removePost(post){
    let index = this.Ingredients.indexOf(post);

    if(index > -1){
      this.Ingredients.splice(index, 1);
    }

    localStorage.setItem('voiceResultName', this.Ingredients.toString());
}

}
