import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: RouterConfig = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'mainpage', component: MainPageComponent },
    { path: '**', redirectTo: '/login' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];