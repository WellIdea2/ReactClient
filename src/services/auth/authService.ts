import { AuthenticationRequest, AuthenticationResponse } from '../../types/auth/Auth';
import instance from "../config/axiosConfig";
import { authPaths } from './authPaths';

export async function login(authenticationRequest: AuthenticationRequest) {
  const response = await instance.post<AuthenticationResponse>(authPaths.LOGIN(), authenticationRequest);

  return response.data;
}