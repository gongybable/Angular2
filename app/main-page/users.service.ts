import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { CONSTANTS } from '../shared/constant';
import { UserInfo } from '../shared/user-info';

@Injectable()
export class UsersService {
    constructor(private http: Http) { }

    private baseUrl: string = CONSTANTS.baseApiUrl;
    private usersUrl: string = this.baseUrl + '/users';

    getUsers(): Observable<UserInfo[]> {
    	return this.http.get(this.usersUrl, CONSTANTS.httpOptions)
                .map(res => {
                    return res.json().data || [];
                }).catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.message || error);
    }
}