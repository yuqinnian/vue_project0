<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="./about">About</router-link>
    <router-link to="./home">home</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <button @click="reslogin()">app请求接口测试</button> -->
    <button @click="loginNodes(datalist)">app请求登录测试</button>
    <p>{{ datalist }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'
// import { resetLogin } from '@/api/HelloLogin/login';
export default {
  name: 'App',  
  components: {
    HelloWorld
  },
data(){
  return {
  datalist:{
   username:'1',
   userid:'2'
 }
  }
},
  methods:{
  reslogin(){
    // axios({
    //   url:'api/students'
    // }).then(res=>{
    //   console.log(res)
    // })
      // resetLogin("http://localhost:5000/students").then(res=>{
      //   console.log(res)
      // })
    },
    loginNodes(datalist){
      // axios({
      //   method:'post',
      //   data:datalist,
      //   url:'api/login',
      // }).then(res=>{
      //   console.log(res)
      // })
      console.log(datalist)
    }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
