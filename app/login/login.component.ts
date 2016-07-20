import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { LoginInfo } from './login-info';

@Component({
  selector: 'my-login',
  templateUrl: 'app/login/login.component.html',
  directives: [ROUTER_DIRECTIVES]
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