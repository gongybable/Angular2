import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { RegisterInfo } from './register-info';

@Component({
  selector: 'my-register',
  templateUrl: 'app/register/register.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class RegisterComponent {
    registerInfo: RegisterInfo = {
        emailAddress: '',
        userName: '',
        password: ''
    };

    register() {
        console.log("Register button clicked with register infomation:" + JSON.stringify(this.registerInfo));
    }
}