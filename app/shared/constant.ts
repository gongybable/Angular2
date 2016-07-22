interface HttpOptions {
    withCredentials: boolean;
}

export const CONSTANTS: {
    baseApiUrl: string;
    httpOptions: HttpOptions;
    passwordRegExp: string;
    emailRegExp: string;
} = {
    baseApiUrl: 'http://localhost:8000/api',
    httpOptions: {
        withCredentials: true
    },
    passwordRegExp: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$',
    emailRegExp: '^(([^<>()[\\]\\.,;:\\s@\"]+(\\.[^<>()[\\]\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
};