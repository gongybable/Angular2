import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AuthInfo } from '../shared/auth-info';
import { AuthService } from '../shared/nav/auth.service';
import { CONSTANTS } from '../shared/constant';
import { Utils } from '../shared/utils.service';

@Component({
    selector: 'my-login',
    templateUrl: 'app/login/login.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
    mode = 'Observable';

    loginInfo: AuthInfo = new AuthInfo('', '');
    loginError: string = '';
    submitting: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
        private utils: Utils
    ) { }

    logIn() {
        this.loginInfo.emailAddress = this.loginInfo.emailAddress.trim();
        this.loginInfo.password = this.loginInfo.password.trim();

        if (this.loginInfo.emailAddress === '' || !this.utils.stringCheck(CONSTANTS.emailRegExp, this.loginInfo.emailAddress)) {
            this.loginError = 'Email Address is missing or not valid';
            return;
        }

        if (this.loginInfo.password === '' || !this.utils.stringCheck(CONSTANTS.passwordRegExp, this.loginInfo.password)) {
            this.loginError = 'Password is missing or not valid';
            return;
        }

        this.submitting = true;

        this.authService.logIn(this.loginInfo).subscribe(
            data => {
                this.submitting = false;
                this.router.navigate(['/mainpage']);
            },
            error => {
                this.submitting = false;
                try {
                    if (error._body && this.utils.isJson(error._body)) {
                        let err: any = JSON.parse(error._body);
                        if (err['error'] && err['error'][0] && err['error'][0].code === 'AUTHENTICATION_FAILED') {
                            this.loginError = 'Either email or password is not correct';
                            return;
                        } else {
                            throw err;
                        }
                    } else {
                        throw error;
                    }
                } catch (er) {
                    console.log(er);
                    this.router.navigate(['/error']);
                }
            }
        )
    }
}