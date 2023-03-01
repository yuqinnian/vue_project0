import server from "../server1";
export const login=(data)=>server({
    url:'/login', //具体后端接口
    method:'POST',
    data
})

export const resetLogin=()=>server({
    url:'',
    method:'get',
})