import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllReceipePage } from './all-receipe.page';

const routes: Routes = [
  {
    path: '',
    component: AllReceipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllReceipePageRoutingModule {}
