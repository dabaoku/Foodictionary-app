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
    path: 'recipe/:id',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'recipe-list',
    loadChildren: () => import('./recipe-list/recipe-list.module').then( m => m.RecipeListPageModule)
  },
  {
    path: 'foodfilter',
    loadChildren: () => import('./foodfilter/foodfilter.module').then( m => m.FoodfilterPageModule)
  },
  {
    path: 'video-teaching/:id',
    loadChildren: () => import('./video-teaching/video-teaching.module').then( m => m.VideoTeachingPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'voice',
    loadChildren: () => import('./voice/voice.module').then( m => m.VoicePageModule)
  },
  {
    path: 'search-result/:ingredient',
    loadChildren: () => import('./search-result/search-result.module').then( m => m.SearchResultPageModule)
  },  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
