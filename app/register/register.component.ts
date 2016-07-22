import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AuthInfo } from '../shared/auth-info';
import { AuthService } from '../shared/nav/auth.service';
import { CONSTANTS } from '../shared/constant';
import { Utils } from '../shared/utils.service';

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
        private router: Router,
        private utils: Utils
    ) { }

    register() {
        this.registerInfo.emailAddress = this.registerInfo.emailAddress.trim();
        this.registerInfo.userName = this.registerInfo.userName.trim();
        this.registerInfo.password = this.registerInfo.password.trim();

        if (this.registerInfo.emailAddress === '' || !this.utils.stringCheck(CONSTANTS.emailRegExp, this.registerInfo.emailAddress)) {
            this.registerError = 'Email Address is missing or not valid';
            return;
        }

        if (this.registerInfo.userName === '') {
            this.registerError = 'User name is missing';
            return;
        }

        if (this.registerInfo.password === '' || !this.utils.stringCheck(CONSTANTS.passwordRegExp, this.registerInfo.password)) {
            this.registerError = 'Password is missing or not valid';
            return;
        }

        this.submitting = true;

        this.authService.register(this.registerInfo).subscribe(
            data => {
                this.submitting = false;
                this.router.navigate(['/mainpage']);
            },
            error => {
                this.submitting = false;
                try {
                    if (error._body && this.utils.isJson(error._body)) {
                        let err: any = JSON.parse(error._body);
                        if (err['error'] && err['error'][0] && err['error'][0].code === 'DUPLICATE_DATA') {
                            this.registerError = 'Email address is alreay used';
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