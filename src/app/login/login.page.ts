import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppActions from '../loginCredential/app.actions';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  count$: Observable<number>;
  Email: string;
  Password: string;
  constructor(private store: Store<{}>,
              private router: Router,
              private cookieService: CookieService) {}
 ngOnInit() {
  // this.cookieService.set('flag', 'login');
  // const user_email = this.cookieService.get('email');
  // const user_pwd = this.cookieService.get('password');
  // const user_flag = this.cookieService.get('flag');
  // if (user_flag === 'logout') {
  //   console.log ( 'login' );
  // } else {
  //   const cookiedata = {
  //     auth_email: user_email,
  //     auth_password: user_pwd
  //   };
  //   this.store.dispatch(AppActions.login({credentials: cookiedata}));
  // }
  }

submit() {
  const userdata = {
      auth_email: this.Email,
      auth_password: this.Password
    };
  this.store.dispatch(AppActions.login({credentials: userdata}));
 
}

goRegister() {
 this.router.navigateByUrl('register');
}



}
