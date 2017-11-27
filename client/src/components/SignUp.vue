<template>
  <div>
    <header>
		  <div class="container">
			  <h1>Registro</h1>
		  </div>
	  </header>
    <div class="row">
		  <div class="container">
        <form role="form">
          <div class="form-group col-md-6" >
            <label for="email">Email*</label>
            <input type="email" class="form-control" v-model="inputEmail" id="email" required placeholder="Introduce tu email">
          </div>
          <div class="form-group col-md-6">
            <label for="ejemplo_password_1">Contraseña*</label>
            <input type="password" class="form-control" v-model="inputPassword" required id="Contraseña" placeholder="Contraseña">
          </div>
          <div class="form-group col-md-6" >
			      <label for="ejemplo_email_1">Genero*</label>
			      		<select required v-model="inputGenre">
                <option value = 'm'>Masculino</option>
                <option value = 'f'>Femenino</option>
                <option value = '-'>No sabe / no responde</option>
                </select>
			    </div>
          <div class="form-group col-md-6">
			      <label for="ejemplo_password_1">Confirmar Contraseña*</label>
			      <input type="password" class="form-control" v-model="inputPasswordConf" id="Confirmar Contraseña" required placeholder="Confirmar Contraseña">
			    </div>
          <div class="form-group col-md-6" >
            <label for="ejemplo_email_1">Nombre*</label>
            <input type="text" class="form-control" v-model="inputName" id="Nombre" required placeholder="Introduce tu nombre">
          </div>
          <div class="form-group col-md-6" >
            <label for="ejemplo_email_1">Apellido*</label>
            <input type="text" class="form-control" v-model="inputFamilyName" id="Apellido" required placeholder="Introduce tu apellido">
          </div>
          <div class="form-group col-md-6" >
            <label for="ejemplo_email_1">Fecha Nacimiento*</label>
            <input type="date" class="form-control" v-model="inputDateOfBirth" id="Fecha Nacimiento" required placeholder="Introduce tu fecha">
          </div>
          <div class="form-group col-md-6" >
            <label for="ejemplo_email_1">Nickname*</label>
            <input type="text" class="form-control" v-model="inputNickname" id="Nickname" required placeholder="Introduce tu Nickname">
          </div>
          <div class="form-group col-md-12" >
            <label for="ejemplo_email_1">Acerca De Mi</label>
            <input type="textarea" class="form-control" v-model="inputAboutMe" id="Acerca De Mi" placeholder="informacion">
          </div>
          <div class="form-group col-md-12">
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="inputCheckBox"> Aceptar las politicas
              </label>
            </div>
          </div>
			  <button type="submit" @click="submit()" class="btn btn-default">Enviar</button>
        </form>
		  </div>
	  </div>
  </div>
</template>

<script>

import Authentication from '@/services/Authentication'

export default {
  data () {
    return {
      inputName: '',
      inputPassword: '',
      inputEmail: '',
      inputGenre: '',
      inputPasswordConf: '',
      inputFamilyName: '',
      inputDateOfBirth: '',
      inputNickname: '',
      inputAboutMe: '',
      inputCheckBox: ''
    }
  },
  methods: {
    submit () {
      var credentials = {
        name: this.inputName,
        password: this.inputPassword,
        email: this.inputEmail,
        genre: this.inputGenre,
        dateOfBirth: this.inputDateOfBirth,
        familyName: this.inputFamilyName,
        date: this.inputDate,
        aboutMe: this.inputAboutMe
      }
      Authentication.signUp(credentials, '/board')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
