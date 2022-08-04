import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";



const axiosClient : AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": 'application/json'
  }
})

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const token: string | null = localStorage.getItem('token')
    if(token) {
      config.headers!.Authorization = `Bearer ${token}`
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;