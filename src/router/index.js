import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/chat'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueRouter)
Vue.use(VueChatScroll)
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Chat,
    props: true,
    beforeEnter: (to,from,next)=>{
      if(to.params.name){
        next()
      }
      else{
        next({name: 'Welcome'})
      }
      
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
