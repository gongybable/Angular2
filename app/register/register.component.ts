import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

import { AuthInfo } from '../shared/auth-info';
import { AuthService } from '../shared/nav/auth.service';

@Component({
    selector: 'my-register',
    templateUrl: 'app/register/register.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class RegisterComponent {
    mode = 'Observable';

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    registerInfo: AuthInfo = new AuthInfo('', '', '');

    register() {
        this.authService.register(this.registerInfo).subscribe(
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