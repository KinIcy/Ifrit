import router from '../router'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  async signIn (creds, redirect) {
    const response = await AuthenticationService.signIn({
      email: creds.email,
      password: creds.password
    })
    localStorage.setItem('token', response.data.token)
    this.user.authenticated = true
    // Redirect to a specified route
    if (redirect) {
      router.push(redirect)
    }
  },
  async register (creds, redirect) {
    const response = await AuthenticationService.register({
      name: creds.inputName,
      password: creds.inputPassword,
      email: creds.inputEmail,
      genre: creds.inputGenre,
      familyName: creds.inputFamilyName,
      date: creds.inputDate,
      nickname: creds.inputNickname,
      aboutMe: creds.inputAboutMe
    })
    console.log(response.data)
    localStorage.setItem('token', response.data.token)
    this.user.authenticated = true
    if (redirect) {
      // Router.go(redirect)
    }
  },
  // To log out, we just need to remove the token
  logout () {
    localStorage.removeItem('token')
    this.user.authenticated = false
  },
  checkAuth () {
    var jwt = localStorage.getItem('token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },
  // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    return localStorage.getItem('token')
  }
}
