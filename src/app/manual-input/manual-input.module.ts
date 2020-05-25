import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualInputPageRoutingModule } from './manual-input-routing.module';

import { ManualInputPage } from './manual-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualInputPageRoutingModule
  ],
  declarations: [ManualInputPage]
})
export class ManualInputPageModule {}
