import { Component, OnInit } from '@angular/core';

import { UserInfo } from '../shared/user-info';
import { UsersService } from './users.service';

@Component({
    selector: 'main-page',
    templateUrl: 'app/main-page/main-page.component.html',
    providers: [ UsersService ]
})

export class MainPageComponent implements OnInit {
    users: UserInfo[] = [];

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe(
                data => {
                    console.log(data['users']);
                    this.users = data['users'];
                });
    }
}