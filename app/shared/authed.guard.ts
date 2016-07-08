import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthedGuard implements CanActivate {
    constructor(private authService: AuthService, public router: Router) {}

    canActivate() {
        console.log(this.authService.isLoggedIn());
        return this.authService.isLoggedIn()
               .map(res => {
                    if (res) { return true; }
                    this.router.navigate(['/login']);
                    return false;
               });
    }
}