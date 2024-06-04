import {
  ILoginParams,
  ILoginResponse,
  IRefreshTokenRequest,
  IRefreshTokenResponse,
  IRegisterParams,
  IRegisterResponse,
} from '@/api/auth/types';
import { request } from '@/api/axios';

export const refreshTokenRequest = async (body: IRefreshTokenRequest): Promise<IRefreshTokenResponse> => {
  const { data } = await request({
    url: '/api/auth/renew_token',
    method: 'POST',
    data: body,
  });

  return data;
};

export const registerRequest = async (params: IRegisterParams): Promise<IRegisterResponse> => {
  const { data } = await request({
    url: '/api/auth/signup',
    method: 'POST',
    data: params,
  });

  return data;
};

export const loginRequest = async (params: ILoginParams): Promise<ILoginResponse> => {
  const { data } = await request({
    url: '/api/auth/login',
    method: 'POST',
    data: params,
  });

  return data;
};

export const logoutRequest = async (): Promise<boolean> => {
  const { data } = await request({
    url: '/api/auth/logout',
    method: 'POST',
  });

  return data;
};
