import { provideRouter, RouterConfig } from '@angular/router';

import { AuthedGuard } from './shared/authed.guard';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';

export const routes: RouterConfig = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'mainpage', component: MainPageComponent, canActivate: [AuthedGuard] },
    { path: '**', redirectTo: '/login' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AuthedGuard,
    AuthService
];