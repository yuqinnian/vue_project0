import VueRouter from "vue-router";
import HelloAbout from "../components/HelloAbout"
import HelloHome from "../components/HelloHome"
import HelloNews from "../pages/HelloNews"
import HelloMessage from "../pages/HelloMessage"
import HelloDetail from "../pages/HelloDetail"

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/about',
            component:HelloAbout
        },
        {
            path:'/',
            component:HelloAbout
        },
        {
            path:'/home',
            component:HelloHome,
            children:[
                {
                    path:'news',
                    component:HelloNews
                },
                {
                    path:'message',
                    component:HelloMessage,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            component:HelloDetail,
                            props:true
                        }
                    ]
                }
            ]
        }
    ]
})