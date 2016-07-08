import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { CONSTANTS } from './constant';

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    private authUrl = CONSTANTS.baseApiUrl;

    isLoggedIn(): Observable<boolean> {
    	return this.http.get(this.authUrl)
                   .map(this.extractData);
                   // .catch(this.handleError);
    }

    private extractData(res: any) {
        let body = res.json().data || { };
        if (body.userID) { return true; }
        return false;
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.message || error);
    }
}