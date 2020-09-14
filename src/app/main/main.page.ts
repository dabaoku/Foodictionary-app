import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavController} from '@ionic/angular';
import { LogoutService } from '../services/logout.service';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service';
import { VirtualTimeScheduler } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
              private storage: Storage,
              private nativeStorage: NativeStorage,
              private logoutService: LogoutService,
              private router: Router,
              private navCtrl: NavController,
              private allRecipeIngredients: AllRecipeIngredientsService) { }
  
Ingredients: any;

  ngOnInit() {
    this.storage.get('voiceResultName').then(
      (data) => {
        const foods = data.toString();
        this.Ingredients = foods.split(',');     
     
        for ( let i = 0 ;  i < this.Ingredients.length ; i++) {
          if ( this.Ingredients[i] === '') {
            this.Ingredients.splice( i, 1 );
          }
        } 
      }
    )

   
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
    this.storage.set('voiceResultName', this.Ingredients.toString());
    // localStorage.setItem('voiceResultName', this.Ingredients.toString());
}

}
