import { Component, OnInit } from '@angular/core';
import { FoodFilterUrlService } from './food-filter-url.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-foodfilter',
  templateUrl: './foodfilter.page.html',
  styleUrls: ['./foodfilter.page.scss'],
})
export class FoodfilterPage implements OnInit {
  url: string;
  detectOutcome: any;
  tagName = [];
  newTagName: any;

  constructor(
    private foodFilterUrlService: FoodFilterUrlService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  submit() {
    this.foodFilterUrlService
    .request(this.url) 
    .subscribe((data) => {
      this.detectOutcome = data.predictions;
      console.log('ts data:', data);
      console.log('ts detectOutcome:', this.detectOutcome);
      console.log('ts detectOutcome length:', this.detectOutcome.length);

      for (let i = 0, length = this.detectOutcome.length; i < length; i++) {
        if (this.detectOutcome[i].probability >= 0.7) {
          console.log('1',this.detectOutcome[i].tagName);
          // this.tagName = this.detectOutcome[i].tagName;
          this.tagName.push(this.detectOutcome[i].tagName);
          // this.tagName[i].push(this.detectOutcome[i].tagName);
          // console.log(this.tagName[i]);
        }
      }
      console.log('push過的tagName', this.tagName);
      console.log('2', Array.from(new Set(this.tagName)));
      console.log('push且經過set過的tagName', this.tagName);

      this.newTagName = Array.from(new Set(this.tagName));
      console.log('newTagName' , this.newTagName);
      console.log('newTagName toString' , this.newTagName.toString());

    });
  }

  //還要寫動態刪除辨識錯誤的食材

  SentDetectOutcome() {
    localStorage.setItem('newTagName', this.newTagName.toString());

    this.navCtrl.navigateRoot('main').then(() => {
      window.location.reload();
    });
  }

}
