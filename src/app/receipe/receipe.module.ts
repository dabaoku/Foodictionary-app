import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceipePageRoutingModule } from './receipe-routing.module';

import { ReceipePage } from './receipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceipePageRoutingModule
  ],
  declarations: [ReceipePage]
})
export class ReceipePageModule {}
