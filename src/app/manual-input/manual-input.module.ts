import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicModule } from '@ionic/angular';

import { ManualInputPageRoutingModule } from './manual-input-routing.module';

import { ManualInputPage } from './manual-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualInputPageRoutingModule,
  ],
  providers: [NativeStorage],
  declarations: [ManualInputPage]
})
export class ManualInputPageModule {}
