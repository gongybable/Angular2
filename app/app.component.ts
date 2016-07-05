import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { LoginInfo } from './loginInfo';

@Component({
  selector: 'my-app',
  template: 'app/app.component.html'
})

export class AppComponent {
    loginInfo: LoginInfo = {
        emailAddress: '',
        password: ''
    };

    logIn() {
        console.log("Login button clicked with login infomation:" + JSON.stringify(this.loginInfo));
    }
}