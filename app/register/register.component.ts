import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AuthInfo } from '../shared/auth-info';
import { AuthService } from '../shared/nav/auth.service';
import { CONSTANTS } from '../shared/constant';

@Component({
    selector: 'my-register',
    templateUrl: 'app/register/register.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class RegisterComponent {
    mode = 'Observable';

    registerInfo: AuthInfo = new AuthInfo('', '', '');
    registerError: string = '';
    submitting: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    register() {
        this.registerInfo.emailAddress = this.registerInfo.emailAddress.trim();
        this.registerInfo.userName = this.registerInfo.userName.trim();
        this.registerInfo.password = this.registerInfo.password.trim();

        if (this.registerInfo.emailAddress === '' || !this.stringCheck(CONSTANTS.emailRegExp, this.registerInfo.emailAddress)) {
            this.registerError = 'Email Address is missing or not valid';
            return;
        }

        if (this.registerInfo.userName === '') {
            this.registerError = 'User name is missing';
            return;
        }

        if (this.registerInfo.password === '' || !this.stringCheck(CONSTANTS.passwordRegExp, this.registerInfo.password)) {
            this.registerError = 'Password is missing or not valid';
            return;
        }

        this.submitting = true;

        this.authService.register(this.registerInfo).subscribe(
            data => {
                if (data.userName) {
                    this.submitting = false;
                    this.router.navigate(['/mainpage']);
                }
            },
            error => {
                this.submitting = false;
                if (error._body) {
                    try {
                        let err: any = JSON.parse(error._body);
                        if (err['error'][0].code === 'DUPLICATE_DATA') {
                            this.registerError = 'Email address is alreay used';
                            return;
                        }
                    } finally {
                        console.log(error);
                    }
                }
                this.router.navigate(['/error']);
            }
        )
    }

    private stringCheck(regex: string, data: string) {
        let reg: RegExp = new RegExp(regex);
        return reg.test(data);
    }
}