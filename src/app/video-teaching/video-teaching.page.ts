import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GetRecipeService } from '../services/get-recipe.service';
import {NavController} from '@ionic/angular';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';



@Component({
  selector: 'app-video-teaching',
  templateUrl: './video-teaching.page.html',
  styleUrls: ['./video-teaching.page.scss'],
})
export class VideoTeachingPage implements OnInit {
  recipe_id : string;  
  steps: any; 
  VideoUrl;
  

  constructor(private route: ActivatedRoute,
              private getRecipeService: GetRecipeService,
              private dom: DomSanitizer,
              private navCtrl: NavController,
              private sanitizer: DomSanitizer) { this.recipe_id = this.route.snapshot.paramMap.get('id');}

  ngOnInit() {
    this.showSteps();
  }

showSteps(){
  this.getRecipeService.request(this.recipe_id).subscribe(data =>{
    this.steps = data.step;
    console.log("ss", data.recipe[0].recipe_video)
    this.VideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.recipe[0].recipe_video);

  })
    

}


}
