export interface AuthenticationResponse {
    accessToken: AccessTokenView;
}

export interface AccessTokenView {
    token: string;
}

export interface AuthenticationRequest {
    email: string;
    password: string;
}