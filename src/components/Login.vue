<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card style="padding: 40px">
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        label="password"
        v-model="password"
        :rules="nameRules"
        :type="'password'"
        required
      ></v-text-field>

      <v-btn
        @click="submit"
        :disabled="!valid"
      >
        Login
      </v-btn>
      <v-btn
        @click="register"
        :disabled="!valid"
      >
        Sign Up
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-card>
    <v-alert v-if="alertMessage.length > 0" color="info" :icon="alertIcon" value="true">
      <p>{{alertMessage}}</p>
    </v-alert>
  </v-form>
</template>

<script>
  import axios from 'axios';
  import firebase from 'firebase'
  import VueFire from 'vuefire'

  export default {
    data: () => ({
      valid: true,
      name: '',
      password: '',
      alertMessage: '',
      alertIcon:'',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v && v.length <= 20 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
      submit () {
        var self = this;
        var intervalid;
        if (this.$refs.form.validate()) {

          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function(user){
              console.log('After registration')
              if(user){
                self.alertMessage = "Login Successful";
              }else{
                self.alertMessage = "Login unSuccessful";
              }
              self.$refs.form.reset()
              intervalid = setTimeout(() => {
                  self.$router.push({name: 'Stock', params: {uid: user.uid}}); 
                  console.log ('Routing to Stock Page with uid '+user.uid);
              }, 1000);

           }).catch(function(error) {
              console.log('Error in signin')
              var errorCode = error.code;
              var errorMessage = error.message;
              self.alertMessage = errorMessage;
              self.$refs.form.reset()
            // ...
          });
        }
      },
      clear () {
        this.$refs.form.reset()
      },
      register() {
        console.log("Signing Up!!")
        this.$router.push({name: 'SignUp'}); 
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
