import { provideRouter, RouterConfig } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { AuthedGuard, UnAuthedGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginComponent } from '../../login/login.component';
import { MainPageComponent } from '../../main-page/main-page.component';
import { RegisterComponent } from '../../register/register.component';

export const routes: RouterConfig = [
    { path: 'login', component: LoginComponent, canActivate: [UnAuthedGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [UnAuthedGuard] },
    { path: 'mainpage', component: MainPageComponent, canActivate: [AuthedGuard] },
    { path: '**', redirectTo: '/login' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    HTTP_PROVIDERS,
    AuthedGuard,
    UnAuthedGuard,
    AuthService
];