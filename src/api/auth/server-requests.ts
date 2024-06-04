import { ILoginServerParams, ILoginServerResponse } from '@/api/auth/types';
import http from '@/api/http';

export const loginServerRequest = async (params: ILoginServerParams) => {
  const res = await http.post<ILoginServerResponse>('/api/auth/login', params, {
    baseUrl: '',
  });
  return res;
};
