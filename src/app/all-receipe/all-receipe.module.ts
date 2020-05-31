import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllReceipePageRoutingModule } from './all-receipe-routing.module';

import { AllReceipePage } from './all-receipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllReceipePageRoutingModule
  ],
  declarations: [AllReceipePage]
})
export class AllReceipePageModule {}
