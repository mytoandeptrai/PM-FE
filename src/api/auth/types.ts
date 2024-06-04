export interface IRefreshTokenRequest {
  refresh_token: string;
}

export interface IRefreshTokenResponse {
  data: {
    accessToken: string;
  };
}

export interface ILoginParams {
  username: string;
  password: string;
}

export interface ILoginResponse {
  username: string;
  accessToken: string;
}

export interface ILoginServerParams {
  username: string;
  accessToken: string;
}

export interface ILoginServerResponse {}

export interface IRegisterParams {
  fullname: String;
  age: Number;
  username: String;
  password: String;
  gender: Number;
  address: String;
  email: String;
  phone: Number;
  password_confirm: String;
}

export interface IRegisterResponse extends ILoginResponse {}
