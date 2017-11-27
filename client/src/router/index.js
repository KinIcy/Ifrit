import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import Board from '@/components/Board'
import MyProfile from '@/components/MyProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/MyProfile',
      name: 'MyProfile',
      component: MyProfile
    },
    { path: '*', redirect: '/' }
  ]
})
