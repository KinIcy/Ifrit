import axios from 'axios'
import Authentication from '@/services/Authentication'

export default () => {
  return axios.create({
    // baseURL: `http://192.168.99.100:4500/api`
    baseURL: `http://localhost:8080/api`,
    headers: {
      common: {
        Authorization: `Bearer ${Authentication.getAuthHeader()}`
      }
    }
  })
}
