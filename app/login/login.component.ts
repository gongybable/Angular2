import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

import { AuthInfo } from '../shared/auth-info';
import { AuthService } from '../shared/nav/auth.service';

@Component({
    selector: 'my-login',
    templateUrl: 'app/login/login.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
    mode = 'Observable';

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    loginInfo: AuthInfo = new AuthInfo('', '');

    logIn() {
        this.authService.logIn(this.loginInfo).subscribe(
            data => {
                if (data.userName) {
                    this.router.navigate(['/mainpage']);
                }
            },
            error => {
                this.router.navigate(['/error']);
            }
        )
    }
}