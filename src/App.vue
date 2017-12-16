<template>
  <div id="app">
    <v-app>
      <v-container>
        <img src="https://www.shareicon.net/download/2016/07/08/117547_developer.svg">
        <br>
        <br>
        <router-view/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import db from './database'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width:150px;
  height: 150px;
}
</style>
