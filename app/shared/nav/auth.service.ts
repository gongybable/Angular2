import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

// import { Observable }     from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';

import { CONSTANTS } from '../constant';

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    private authUrl = CONSTANTS.baseApiUrl;

    isLoggedIn(): Observable<boolean> {
    	return this.http.get(this.authUrl, { withCredentials: true })
                    .map(res => {
                        let body = res.json().data;
                        return body.authenticated;
                    }).catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.message || error);
    }
}