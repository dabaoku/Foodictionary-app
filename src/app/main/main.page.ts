import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router,
              private navCtrl:NavController) { }

  ngOnInit() {
  }
  goToRecipe(){
    this.navCtrl.navigateForward('recipe-list')
    //this.router.navigateByUrl('recipe-list');
  }

}
