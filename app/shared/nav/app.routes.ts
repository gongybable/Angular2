import { provideRouter, RouterConfig } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { AuthedGuard, UnAuthedGuard, ApiGuard } from './authed.guard';
import { AuthService } from './auth.service';
import { ErrorPageComponent } from '../../error-page/error-page.component';
import { LoginComponent } from '../../login/login.component';
import { MainPageComponent } from '../../main-page/main-page.component';
import { RegisterComponent } from '../../register/register.component';

export const routes: RouterConfig = [
    { path: 'login', component: LoginComponent, canActivate: [UnAuthedGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [UnAuthedGuard] },
    { path: 'mainpage', component: MainPageComponent, canActivate: [AuthedGuard] },
    { path: 'error', component: ErrorPageComponent, canActivate: [ApiGuard] },
    { path: '**', redirectTo: '/login' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    HTTP_PROVIDERS,
    AuthedGuard,
    UnAuthedGuard,
    ApiGuard,
    AuthService
];