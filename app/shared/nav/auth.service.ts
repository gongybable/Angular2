import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { AuthInfo } from '../auth-info';
import { CONSTANTS } from '../constant';
import { UserInfo } from '../user-info';

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    private baseUrl: string = CONSTANTS.baseApiUrl;
    private loginUrl: string = this.baseUrl + '/auth/login';
    private registerUrl: string = this.baseUrl + '/auth/register';

    isLoggedIn(): Observable<boolean> {
    	return this.http.get(this.baseUrl, CONSTANTS.httpOptions)
                .map(res => {
                    let body = res.json().data;
                    return body.authenticated;
                }).catch(this.handleError);
    }

    logIn(data: AuthInfo): Observable<UserInfo> {
        return this.post(this.loginUrl, data);
    }

    register(data: AuthInfo): Observable<UserInfo> {
        return this.post(this.registerUrl, data);
    }

    private post(url: string, data: AuthInfo) {
        return this.http.post(url, data, CONSTANTS.httpOptions)
                .map(res => {
                    return res.json().data;
                }).catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.message || error);
    }
}