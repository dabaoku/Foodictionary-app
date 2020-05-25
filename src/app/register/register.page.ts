import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../services/user-register.service';
import { Router } from '@angular/router';
import {
  AlertController,
} from '@ionic/angular';
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

  constructor(private userRegisterService: UserRegisterService,
    private router: Router, private alertController: AlertController,) { }

  ngOnInit() {
  }
  submit()
  {
    this.userRegisterService.request(this.Username, this.Email, this.Password, this.PasswordConfirm)
    .subscribe(async data=>{
      console.log(data)

      const header = "Success";
      const message = "註冊成功"
      const alert = await this.alertController.create({
        header,
        message,
        buttons: ['OK'],
      });
  
      await alert.present();
      this.router.navigateByUrl('login')
    })
  }
back(){
this.router.navigateByUrl('login')
}
}
