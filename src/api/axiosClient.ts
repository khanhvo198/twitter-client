import axios, { AxiosInstance } from "axios";
import queryString from "query-string";

const baseURL : string = "http:localhost:8080/api/v1";

function getToken() : string {
  return "Token DMM"
}

const axiosClient : AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": 'application/json'
  },
  paramsSerializer: (param) => queryString.stringify(param)
})

axiosClient.interceptors.request.use(async (config) => {
  const token : string = getToken()
  config.headers!.Authorization = `Bearer ${token}`
})
axiosClient.interceptors.response.use((res) => {
  if(res && res.data) {
    return res.data
  }
  return res
}, (err) => {
  throw err
})

export default axiosClient