import axios from 'axios'
import Authentication from '@/services/Authentication'

export default () => {
  return axios.create({
    baseURL: `http://${process.env.API_HOST}:${process.env.API_PORT}/api`,
    headers: {
      common: {
        Authorization: `Bearer ${Authentication.getAuthHeader()}`
      }
    }
  })
}
