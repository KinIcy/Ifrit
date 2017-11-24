import Api from '@/services/Api'

export default{
  register (credentials) {
    return Api().post('user/signUp', credentials)
  },
  signIn (credentials) {
    return Api().post('user/signIn', credentials)
  }
}
