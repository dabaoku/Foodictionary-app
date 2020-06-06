import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GetRecipeService } from '../services/get-recipe.service';
import { DomSanitizer } from '@angular/platform-browser';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-video-teaching',
  templateUrl: './video-teaching.page.html',
  styleUrls: ['./video-teaching.page.scss'],
})
export class VideoTeachingPage implements OnInit {
  recipe_id : string;  
  steps:any; 



  constructor(private route: ActivatedRoute,
              private getRecipeService: GetRecipeService,
              private dom: DomSanitizer,
              private navCtrl: NavController) { this.recipe_id = this.route.snapshot.paramMap.get('id');}

  ngOnInit() {
    this.showSteps();
  }

showSteps(){
  this.getRecipeService.request(this.recipe_id).subscribe(data =>{
    this.steps = data.step;
    console.log(this.steps)


  })
}


}
