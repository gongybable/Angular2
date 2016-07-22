import { Injectable } from '@angular/core';

@Injectable()
export class Utils {
    stringCheck(regex: string, data: string): boolean {
        let reg: RegExp = new RegExp(regex);
        return reg.test(data);
    }

    isJson(str: any): boolean {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
}