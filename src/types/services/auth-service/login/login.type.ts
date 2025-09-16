export interface LoginTypeResult {
	tokens: {
		accessToken: string;
		refreshToken: string;
	};
	user: {
		name: string;
		lastName: string;
		id: number;
	};
}
export interface LoginBody{
    email: string;
    password: string;
    rememberMe: boolean;
}