import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipePage } from './receipe.page';

const routes: Routes = [
  {
    path: '',
    component: ReceipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipePageRoutingModule {}
