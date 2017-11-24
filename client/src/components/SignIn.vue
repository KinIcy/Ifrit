<template>
  <div>
    <form class="form-horizontal" ng-submit="login()">
      <div class="col-md-3 col-md-offset-4">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h2 class="panel-title"><center>Iniciar sesión</center></h2>
          </div>
          <div class="panel-body">
            <div class="text-center">
              <form>
                <div class="form-group">
                  <label for="email">Correo</label>
                  <input class="form-control" name="email" type="email" v-model="inputUserName" placeholder="Escribe tu correo">
                </div>
                <div class="form-group">
                  <label for="password">Contraseña</label>
                  <input class="form-control" name="password" type="password" v-model="inputPassword" placeholder="Escribe tu contraseña">
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" @click="submit()" type="submit">Ingresar</button>
                </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>  
</template>

<script>

import Authentication from '@/services/Authentication'

export default {
  name: 'SignIn',
  data () {
    return {
      inputUserName: '',
      inputPassword: '',
      error: ''
    }
  },
  methods: {
    submit () {
      var credentials = {
        username: this.inputUserName,
        password: this.inputPassword
      }
      Authentication.signIn(credentials, '/board')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
