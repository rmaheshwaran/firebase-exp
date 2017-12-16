// Initialize Firebase
import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyB5antiY6e-4xTeZ_j3ZhKgUDR5TlccwaQ",
    authDomain: "vuetest-5b0d8.firebaseapp.com",
    databaseURL: "https://vuetest-5b0d8.firebaseio.com",
    projectId: "vuetest-5b0d8",
    storageBucket: "vuetest-5b0d8.appspot.com",
    messagingSenderId: "441510296008"
  };
let firebaseApp = firebase.initializeApp(config);
let db = firebaseApp.database();
export default db