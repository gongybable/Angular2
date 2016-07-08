import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthedGuard implements CanActivate {
    constructor(private authService: AuthService, public router: Router) {}

    canActivate() {
        return this.authService.isLoggedIn()
                    .map(res => {
                        if (res) { return true; }
                        this.router.navigate(['/login']);
                        return false;
                    }).catch(error => {
                        console.log('error catched');
                        this.router.navigate(['/login']);
                        return Observable.of(false);
                    });
    }
}