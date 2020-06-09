import { Component, OnInit } from '@angular/core';
import { FoodFillterUrlService } from './food-fillter-url.service';

@Component({
  selector: 'app-foodfilter',
  templateUrl: './foodfilter.page.html',
  styleUrls: ['./foodfilter.page.scss'],
})
export class FoodfilterPage implements OnInit {
  url: string;
  detectOutcome: any;
  tagName = [];

  constructor(
    private foodFillterUrlService: FoodFillterUrlService,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.foodFillterUrlService
    .request(this.url) 
    .subscribe((data) => {
      this.detectOutcome = data.predictions;
      console.log('ts data:', data);
      console.log('ts detectOutcome:', this.detectOutcome);
      console.log('ts detectOutcome length:', this.detectOutcome.length);

      for (let i = 0, length = this.detectOutcome.length; i < length; i++) {
        if (this.detectOutcome[i].probability >= 0.7) {
          console.log(this.detectOutcome[i].tagName);
          // this.tagName = this.detectOutcome[i].tagName;
          this.tagName.push(this.detectOutcome[i].tagName);
          // this.tagName[i].push(this.detectOutcome[i].tagName);
          // console.log(this.tagName[i]);
        }
      }
     
      console.log(Array.from(new Set(this.tagName)));


    });
  }

}
