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
            <input type="email" class="form-control" v-model="inputEmail" id="email" placeholder="Introduce tu email">
          </div>
          <div class="form-group col-md-6">
            <label for="ejemplo_password_1">Contraseña*</label>
            <input type="password" class="form-control" v-model="inputPassword" id="Contraseña" placeholder="Contraseña">
          </div>
          <div class="form-group col-md-6" >
			      <label for="ejemplo_email_1">Genero*</label>
			      <input type="text" class="form-control" v-model="inputGenre" id="Genero" placeholder="Genero">
			    </div>
          <div class="form-group col-md-6">
			      <label for="ejemplo_password_1">Confirmar Contraseña*</label>
			      <input type="password" class="form-control" v-model="inputPasswordConf" id="Confirmar Contraseña" placeholder="Confirmar Contraseña">
			    </div>
          <div class="form-group col-md-6" >
            <label for="ejemplo_email_1">Nombre*</label>
            <input type="text" class="form-control" v-model="inputName" id="Nombre" placeholder="Introduce tu nombre">
          </div>
          <div class="form-group col-md-6" >
            <label for="ejemplo_email_1">Apellido*</label>
            <input type="text" class="form-control" v-model="inputFamilyName" id="Apellido" placeholder="Introduce tu apellido">
          </div>
          <div class="form-group col-md-6" >
            <label for="ejemplo_email_1">Fecha Nacimiento*</label>
            <input type="date" class="form-control" v-model="inputDate" id="Fecha Nacimiento" placeholder="Introduce tu fecha">
          </div>
          <div class="form-group col-md-6" >
            <label for="ejemplo_email_1">Nickname*</label>
            <input type="text" class="form-control" v-model="inputNickname" id="Nickname" placeholder="Introduce tu Nickname">
          </div>
          <div class="form-group col-md-12" >
            <label for="ejemplo_email_1">Acerca De Mi</label>
            <input type="textarea" class="form-control" v-model="inputAboutMe" id="Acerca De Mi" placeholder="informacion">
          </div>
          <div class="checkbox">
			      <label>
			        <input type="checkbox" v-model="inputCheckBox"> Aceptar las politicas 
			      </label>
			    </div>
			  <button type="submit" @click="register" class="btn btn-default">Enviar</button>
        </form>
		  </div>
	  </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      inputName: '',
      inputPassword: '',
      inputEmail: '',
      inputGenre: '',
      inputPasswordConf: '',
      inputFamilyName: '',
      inputDate: '',
      inputNickname: '',
      inputAboutMe: '',
      inputCheckBox: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        name: this.inputName,
        password: this.inputPassword,
        email: this.inputEmail,
        genre: this.inputGenre,
        familyName: this.inputFamilyName,
        date: this.inputDate,
        nickname: this.inputNickname,
        aboutMe: this.inputAboutMe
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
