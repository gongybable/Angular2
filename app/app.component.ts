import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import './shared/rxjs-operators';

import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import { Utils } from './shared/utils.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [LoginComponent, RegisterComponent, MainPageComponent],
    providers: [Utils]
})

export class AppComponent { }