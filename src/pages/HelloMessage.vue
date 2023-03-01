<template>
  <div>
     <ul>
    <li v-for="m in messageList" :key="m.id" >
      <router-link :to="{
        name:'xiangqing',
        params:{
          id:m.id,
          title:m.title
        }
      }">{{ m.id }}</router-link>
    </li>
  </ul> 
  <router-view></router-view>
  </div>

</template>

<script>

export default {
 data(){
  return {
    messageList:[
      {id:'01',title:'这是一段消息1'},
      {id:'02',title:'这是一段消息2'}
    ]
  }
 }
}
</script>

<style>

</style>