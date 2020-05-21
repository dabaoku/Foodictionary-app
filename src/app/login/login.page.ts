import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  Email: string;
  Password: string;
  constructor(private userLoginService: UserLoginService) { }

  ngOnInit() {
  }
submit(){
  this.userLoginService.request(this.Email,this.Password).subscribe(
    (data) =>{
     
     alert(data)
    }

  )
}
}
