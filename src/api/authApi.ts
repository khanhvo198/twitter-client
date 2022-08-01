import { IUser } from "../features/auth/authSlice";
import axiosClient from "./axiosClient";


export const authAPI = {
  login: async (payload: IUser) => {
    const response = await axiosClient.post('/auth/login', payload)
    return response
  }
}