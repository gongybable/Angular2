import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AuthInfo } from '../shared/auth-info';

@Component({
    selector: 'my-register',
    templateUrl: 'app/register/register.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class RegisterComponent {
    registerInfo = new AuthInfo('', '', '');
    
    register() {
        console.log("Register button clicked with register infomation:" + JSON.stringify(this.registerInfo));
    }
}