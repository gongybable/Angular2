import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { LoginInfo } from './loginInfo';

@Component({
  selector: 'my-login',
  templateUrl: 'app/login/login.component.html'
})

export class LoginComponent {
    loginInfo: LoginInfo = {
        emailAddress: '',
        password: ''
    };

    logIn() {
        console.log("Login button clicked with login infomation:" + JSON.stringify(this.loginInfo));
    }
}