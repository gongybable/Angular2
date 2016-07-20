import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginInfo } from './login-info';

@Component({
  selector: 'my-app',
  template: `
      <h1>My First Angular 2 App</h1>
      <form class="form-horizontal">
        <div class="form-group">
            <label class="control-label col-xs-12 col-sm-3 col-lg-2">Email Address:</label>
            <div class="col-xs-12 col-sm-4 col-lg-3">
                <input type="text" class="form-control" [(ngModel)]="loginInfo.emailAddress" name="emailAddress">
            </div>
        </div>

        <div class="form-group">
            <label class="control-label col-xs-12 col-sm-3 col-lg-2">Password:</label>
            <div class="col-xs-12 col-sm-4 col-lg-3">
                <input type="text" class="form-control" [(ngModel)]="loginInfo.password" name="password">
            </div>
        </div>
        <div class="form-group">
            <label class="col-xs-12 col-sm-3 col-lg-2 control-label">&nbsp;</label>
            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
                <button type="button" class="btn btn-primary" (click)="logIn()">Login</button>
            </div>
        </div>
    </form>
    `
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