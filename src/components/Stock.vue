 <template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.product_name }}</td>
      <td class="text-xs-right">{{ props.item.product_quantity }}</td>
      <td class="text-xs-right">{{ props.item.product_price }}</td>
    </template>
  </v-data-table>
  <br>
  <br>
  <v-card style="padding: 30px; background-color: white">
    <v-text-field
      label="Product Name"
      size="30"
      v-model="pname"
      required
    ></v-text-field>
    <v-text-field
      label="Product Quantity"
      v-model="pquantity"
      required
    ></v-text-field>
    <v-text-field
      label="Product Price"
      v-model="pprice"
      required
    ></v-text-field>

    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      Add to Stock
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
    <v-btn @click="logout">Sign Out</v-btn>
  </v-card>
  </v-form>
</template>

<script>
  import firebase from 'firebase'

  var userRef;
  var uid;
  export default {
    props: {
        uid: {
            type: String,
            required: true
        }
    },
    data: () => ({
      valid: true,
      name: '',
      pname: '',
      pquantity:'',
      pprice: '',
      headers:[
          {text:'Name', value: 'product_name'},
          {text:'Quantity', value: 'product_quantity'},
          {text:'Price', value: 'product_price'}
      ],
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
      ],
      select: null,
      items: [
      ],
      checkbox: false
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
            this.writeData();
        }
      },
      clear () {
        this.$refs.form.reset()
      },
      logout() {
        var self = this;
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
            console.log('Signed Out')
            self.$router.replace({name: 'login'});
        }).catch(function(error) {
        // An error happened.
            console.log("logout error"+ error.message);
            self.$router.replace({name: 'login'});
        });
      },
      writeData(){
        while(this.items.length > 0) {
            this.items.pop();
        }
        userRef.push({
            product_name: this.pname,
            product_quantity: this.pquantity,
            product_price : this.pprice
        });
        this.clear();
      },
      fetchData(){
        var self = this;
        userRef.on("value", function(snapshot) {
                               console.log("Recived:"+snapshot.val());
                                snapshot.forEach(function(childSnapshot) {
                                        console.log(childSnapshot.val());
                                         self.items.push(childSnapshot.val());
                                        
                                });
                                 
                            }, function (error) {
                                 console.log("Error: " + error.code);
                            }
                  );
      }
    },
    mounted() {
        console.log('component mounted with user'+this.uid)
        userRef = firebase.database().ref('users/' + this.uid);
        this.fetchData();
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

input {
    width:75%
}
</style>
