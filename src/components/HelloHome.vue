<template>
  <div>
    <p>home</p>
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/message">message</router-link>
    <button @click="reslogin()">home请求接口测试</button>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
// import { resetLogin } from '@/api/HelloLogin/login';
export default {
 methods:{
  reslogin(){
    axios({
      url:'api/students'
    }).then(res=>{
      console.log(res)
    })
      // resetLogin("^api/students").then(res=>{
      //   console.log(res)
      // })
    }
 }
}
</script>

<style>

</style>