import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService} from '../services/user-login.service';
import {
  AlertController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import * as AppActions from './app.actions';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  mergeMapTo,
  tap,
} from 'rxjs/operators';

@Injectable()
export class AppEffects {
  // rootEffectsInit$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ROOT_EFFECTS_INIT),
  //     mergeMapTo(this.storageService.loadLoggedInUser$),
  //     map((user) => {
  //       if (user === null) {
  //         return AppActions.loadUserFailure({ error: 'EMPTY_USER' });
  //       }

  //       return AppActions.loadUserSuccess({ user });
  //     }),
  //     catchError((error) => of(AppActions.loadUserFailure({ error }))),
  //   ),
  // );

  // loadUserSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AppActions.loadUserSuccess),
  //     mergeMapTo(this.storageService.loadLoggedInUser$),
  //     mergeMap(({ accessToken, refreshToken }) =>
  //       this.accountBasicInfoService.request(accessToken).pipe(
  //         map((user) =>
  //           AppActions.getAccountBasicInfoSuccess({
  //             user: {
  //               ...user,
  //               accessToken,
  //               refreshToken,
  //             },
  //           }),
  //         ),
  //         catchError((error) =>
  //           of(AppActions.getAccountBasicInfoFailure({ error })),
  //         ),
  //       ),
  //     ),
  //   ),
  // );

  // getAccountBasicInfoFailure$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AppActions.getAccountBasicInfoFailure),
  //     mergeMapTo(this.storageService.loadLoggedInUser$),
  //     mergeMap(({ accessToken, refreshToken }) =>
  //       this.authApiService.refresh(accessToken, refreshToken).pipe(
  //         map((user) => AppActions.refreshTokenSuccess({ user })),
  //         catchError((error) => of(AppActions.refreshTokenFailure({ error }))),
  //       ),
  //     ),
  //   ),
  // );

  // everyLoginSuccess$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(
  //         AppActions.getAccountBasicInfoSuccess,
  //         AppActions.refreshTokenSuccess,
  //         AppActions.loginSuccess,
  //       ),
  //       map((action) => action.user),
  //       tap((user) => this.storageService.saveLoggedInUser(user)),
  //       tap((user) => this.localeService.change(user.locale)),
  //     ),
  //   { dispatch: false },
  // );

  login$ = createEffect(
    () =>
    this.actions$.pipe(ofType(AppActions.login),
    map( (action) => action.credentials),
    tap(() => this.presentLoading() ),
    exhaustMap((credentials) => 
    this.userLoginService.request(credentials).pipe(
      map((user) => AppActions.loginSuccess({ user })),
      catchError((error) => of(AppActions.loginFailure({error}))),
    ) 
    )
  ));

 


  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.loginSuccess),
        tap(() => this.dismissLoading()),
        tap(() => this.router.navigateByUrl('main')),
      ),
    { dispatch: false },
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.loginFailure),
        map(async () => await this.dismissLoading()),
        map(() => this.presentLoginFailureAlert()),
      ),
    { dispatch: false },
  );

  // logout$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AppActions.logOut),
  //       tap(() => this.storageService.removeLoggedInUserId()),
  //       tap(() => this.navController.navigateRoot('portal')),
  //     ),
  //   { dispatch: false },
  // );

  constructor(
    private actions$: Actions,
  //  private storageService: StorageService,
    private userLoginService: UserLoginService,
    private alertController: AlertController,
    private router: Router,
    private navController: NavController,
   // private localeService: LocaleService,
    private loadingController: LoadingController,
    //private accountBasicInfoService: AccountBasicInfoService,
  ) {}

  private async presentLoginFailureAlert() {
    const header = "fail";
    const message = "login fail"
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  /**
   * ?????? loading
   */
  private async presentLoading() {
    const loading = await this.loadingController.create({
      backdropDismiss: true,
    });

    loading.present();
  }

  /**
   * ?????? loading
   */
  private async dismissLoading() {
    let loading = await this.loadingController.getTop();

    // ????????????????????????????????????????????? loading (????????????????????????????????????????????????)
    // ??????????????????????????????????????? loading dismiss ???
    // ?????????????????????????????? loading ??????
    while (loading) {
      await loading.dismiss();
      loading = await this.loadingController.getTop();
    }
  }
}
