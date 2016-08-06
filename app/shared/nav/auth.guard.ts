import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthedGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate() {
        return this.authService.isLoggedIn()
                    .map(res => {
                        if (res) { return true; }
                        this.router.navigate(['/login']);
                        return false;
                    }).catch(error => {
                        console.log('error catched');
                        this.router.navigate(['/error']);
                        return Observable.of(false);
                    });
    }
}

@Injectable()
export class UnAuthedGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate() {
        return this.authService.isLoggedIn()
                    .map(res => {
                        if (!res) { return true; }
                        this.router.navigate(['/mainpage']);
                        return false;
                    }).catch(error => {
                        console.log('error catched');
                        this.router.navigate(['/error']);
                        return Observable.of(false);
                    });
    }
}

@Injectable()
export class ApiGuard implements CanActivate {
    constructor(private authService: AuthService, public router: Router) {}

    canActivate() {
        return this.authService.isLoggedIn()
                    .map(res => {
                        this.router.navigate(['/login']);
                        return false;
                    }).catch(error => {
                        return Observable.of(true);
                    });
    }
}