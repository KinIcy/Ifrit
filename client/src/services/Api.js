import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://192.168.99.100:4500/api`
  })
}