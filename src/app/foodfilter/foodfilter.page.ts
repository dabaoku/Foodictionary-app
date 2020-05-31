import { Component, OnInit } from '@angular/core';
import { FoodFillterUrlService } from './food-fillter-url.service';

@Component({
  selector: 'app-foodfilter',
  templateUrl: './foodfilter.page.html',
  styleUrls: ['./foodfilter.page.scss'],
})
export class FoodfilterPage implements OnInit {
  url: string;
  detectOutcome: string;

  constructor(
    private foodFillterUrlService: FoodFillterUrlService,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.foodFillterUrlService
    .request(this.url)
    .subscribe((data) => {
      this.detectOutcome = data;
    });
  }

}
