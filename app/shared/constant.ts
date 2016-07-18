interface HttpOptions {
	withCredentials: boolean;
}

export const CONSTANTS: {
	baseApiUrl: string;
	httpOptions: HttpOptions;
} = {
	baseApiUrl: 'http://localhost:8000/api',
	httpOptions: {
		withCredentials: true
	}
};