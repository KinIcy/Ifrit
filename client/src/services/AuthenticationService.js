import Api from '@servie/Api'

export default{
  register (credentials) {
    return Api().post('register', credentials)
  }
}
