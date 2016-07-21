import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfo } from '../shared/user-info';
import { UsersService } from './users.service';

@Component({
    selector: 'main-page',
    templateUrl: 'app/main-page/main-page.component.html',
    providers: [ UsersService ]
})

export class MainPageComponent implements OnInit {
    users: UserInfo[] = [];

    constructor(
        private usersService: UsersService,
        private router: Router
    ) { }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe(
                data => {
                    this.users = data['users'];
                });
    }

    logOut() {
        this.usersService.logOut().subscribe(
            data => {
                if (data) {
                    this.router.navigate(['/login']);
                }
            },
            error => {
                this.router.navigate(['/error']);
            }
        )
    }
}