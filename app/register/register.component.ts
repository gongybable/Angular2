import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { RegisterInfo } from './registerInfo';

@Component({
    selector: 'my-register',
    templateUrl: 'app/register/register.component.html'
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