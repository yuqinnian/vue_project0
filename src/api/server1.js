import axios from 'axios'

const server=axios.create({
    baseURL:'/api',
    timeout:3000
})

server.interceptors.request.use(config=>{
    console.log("请求拦截器第一个",config)
    return config;
  
},err=>{
    Promise.reject(err)
})
server.interceptors.response.use(res=>{
    console.log("响应拦截器第一个",res)
    return Promise.resolve(res)
},err=>{
    Promise.reject(err)
})

export default server