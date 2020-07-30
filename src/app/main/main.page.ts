import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavController} from '@ionic/angular';
import { LogoutService } from '../services/logout.service';
import { AllRecipeIngredientsService } from '../services/all-recipe-ingredients.service';
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
              private allRecipeIngredients: AllRecipeIngredientsService) { }

  ngOnInit() {
  }

  goToRecipe() {
    this.navCtrl.navigateForward('recipe-list')
  }

  goToVoice() {
    this.navCtrl.navigateForward('voice')
  }

  showAll(ingredient: string) {
      this.navCtrl.navigateForward('search-result/' + ingredient);   
    }




  logout() {
    this.logoutService.request().subscribe((data)=>{
      alert(data);
      this.router.navigateByUrl('login');
    });
  }
}
