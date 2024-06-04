import { refreshTokenRequest } from '@/api/auth';
import { env } from '@/config';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

let isRefreshPending = false;

export const request = axios.create({
  baseURL: env.API_URL,
});

const onRefreshToken = async () => {
  const refreshToken = getCookie('refresh_token');

  if (refreshToken) {
    try {
      const { data } = await refreshTokenRequest({ refresh_token: refreshToken });
      setCookie('access_token', data.accessToken, { secure: true });
      return data.accessToken;
    } catch (e) {
      deleteCookie('access_token');
    }
  } else {
    deleteCookie('access_token');
  }

  return null;
};

const handleSuccess = (res: AxiosResponse) => {
  return res.data;
};

const handleError = async (error: any) => {
  const originalRequest = error.config!;
  const data = error?.response?.data as any;

  // if (data?.meta?.message === 'jwt expired' && !isRefreshPending) {
  //   isRefreshPending = true;
  //   const token = await onRefreshToken();
  //   if (token) isRefreshPending = false;
  //   axios.defaults.headers.Authorization = `Bearer ${token}`;
  //   return request(originalRequest);
  // }

  return Promise.reject(data?.meta || data || error);
};

request.interceptors.response.use(handleSuccess, handleError);

request.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = getCookie('access_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);
