import axios from 'axios'

export const api = axios

api.defaults.baseURL = 'http://localhost:8000/api/'

api.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res.data
  }
  return Promise.reject({
    message: 'Something went wrong.'
  })
})
