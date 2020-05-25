import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'manual-input',
    loadChildren: () => import('./manual-input/manual-input.module').then( m => m.ManualInputPageModule)
  },
  {
    path: 'receipe',
    loadChildren: () => import('./receipe/receipe.module').then( m => m.ReceipePageModule)
  },
  {
    path: 'foodfilter',
    loadChildren: () => import('./foodfilter/foodfilter.module').then( m => m.FoodfilterPageModule)
  },
  {
    path: 'receipe-list',
    loadChildren: () => import('./receipe-list/receipe-list.module').then( m => m.ReceipeListPageModule)
  },
  {
    path: 'video-teaching',
    loadChildren: () => import('./video-teaching/video-teaching.module').then( m => m.VideoTeachingPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
