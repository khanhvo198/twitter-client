import { LoginPayload } from "../features/auth/authSlice";
import { User } from "../models/User";
import axiosClient from "./axiosClient";


export interface AuthenticationReponse {
  token: string,
  user?: User,
}

export const authAPI = {
  async login (payload: LoginPayload): Promise<any>  {
    const response = await axiosClient.post('/auth/login', payload)
    return response
  }
}