export const CONSTANTS: {
	baseApiUrl: string;
} = {
	baseApiUrl: 'http://localhost:8000/api'
};

//Tutorial 4
// import { Headers } from '@angular/http';

// interface HttpOptions {
// 	headers?: Headers;
// 	withCredentials: boolean;
// }

// let httpHeaders = new Headers({
//   'content-type': 'application/json'
// });

// export const CONSTANTS: {
// 	baseApiUrl: string;
// 	httpOptionsWithHeader: HttpOptions;
// 	httpOptionsWithoutHeader: HttpOptions;
// } = {
// 	baseApiUrl: 'http://localhost:8000/api',
// 	httpOptionsWithHeader: {
// 		headers: httpHeaders,
// 		withCredentials: true
// 	},
// 	httpOptionsWithoutHeader: {
// 		withCredentials: true
// 	}
// };