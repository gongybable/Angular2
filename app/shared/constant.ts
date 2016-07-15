interface HttpOptions {
	withCredentials: boolean;
}

export const CONSTANTS: {
	baseApiUrl: string;
	httpOptions: HttpOptions;
} = {
	baseApiUrl: 'http://192.168.1.130:8000/api',
	httpOptions: {
		withCredentials: true
	}
};