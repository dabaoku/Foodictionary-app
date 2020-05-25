import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../services/user-register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  Username: string;
  Email: string;
  Password: string;
  PasswordConfirm: string;

  constructor(private userRegisterService: UserRegisterService) { }

  ngOnInit() {
  }
  submit()
  {
    this.userRegisterService.request(this.Username, this.Email, this.Password, this.PasswordConfirm)
    .subscribe(data=>{
      console.log(data)
    })
  }

}
