import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoTeachingPage } from './video-teaching.page';

const routes: Routes = [
  {
    path: '',
    component: VideoTeachingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoTeachingPageRoutingModule {}
