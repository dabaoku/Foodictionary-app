import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodfilterPage } from './foodfilter.page';

const routes: Routes = [
  {
    path: '',
    component: FoodfilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodfilterPageRoutingModule {}
