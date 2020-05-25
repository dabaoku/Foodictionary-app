import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoTeachingPageRoutingModule } from './video-teaching-routing.module';

import { VideoTeachingPage } from './video-teaching.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoTeachingPageRoutingModule
  ],
  declarations: [VideoTeachingPage]
})
export class VideoTeachingPageModule {}
