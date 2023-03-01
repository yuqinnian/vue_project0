<template>
  <div>
    <p>News</p>
    <button @click="logins(datalist)">登录</button>
    
  </div>
</template>

<script>
import { login } from '@/api/HelloLogin/login';
export default {
  data(){
    return {
      datalist:{
        username:'1',
        userid:'2'
      }
    }
  },
  methods:{
    logins(datalist){
      login(datalist).then(res=>{
        console.log(res)
      })
    },

  }
}
</script>

<style>

</style>