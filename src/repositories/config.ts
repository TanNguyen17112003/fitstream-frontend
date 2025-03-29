import axios from 'axios'

export const AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000'
})

// // Adding  an interceptor to AxiosInstance to modify the request
// AxiosInstance.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem('accessToken')
//   config.headers.Authorization = accessToken
//   return config
// })
