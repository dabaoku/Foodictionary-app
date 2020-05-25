import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppActions from '../loginCredential/app.actions';
import { Router } from '@angular/router';
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
    private router: Router) {}
 ngOnInit() {
  }
submit(){
  const userdata = {
      auth_email: this.Email,
      auth_password: this.Password
  }
  this.store.dispatch(AppActions.login({credentials: userdata}))

}

goRegister(){

  this.router.navigateByUrl('register')
}



}
