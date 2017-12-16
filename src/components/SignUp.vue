<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card style="padding: 40px">
      <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        :counter="20"
        required
      ></v-text-field>
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
        Register
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
  export default {
    data: () => ({
      valid: true,
      name: '',
      password:'',
      alertMessage:'',
      alertIcon:'',
      nameRules: [
        (v) => !!v || 'Input is required',
        (v) => v && v.length <= 20 || 'Input must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),
    methods: {
      submit () {
        this.createFireBaseCredentials();
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          });


        }
      },
      clear () {
        this.$refs.form.reset()
      },
      createFireBaseCredentials(){
          var self = this
          var intervalid;
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function(user){
              console.log('After registration')
              if(user){
                self.alertMessage = "Registration Successful";
              }else{
                self.alertMessage = "Registration unSuccessful";
              }
              intervalid = setTimeout(() => {
                  self.$router.push({name: 'Login'}); 
                  console.log ('Routing to Homepage');
              }, 3000);

           }).catch(function(error) {
             console.log('Error registration')
            var errorCode = error.code;
            var errorMessage = error.message;
            self.alertMessage = errorMessage;
            // ...
          });

          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            }
          });
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
