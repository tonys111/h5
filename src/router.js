import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
    { 
        path: '/', 
        redirect: 'home' 
    },
    {
        path: '/home',
        component: () => ({ component: import(/* webpackChunkName: "home" */ '@/views/home') }),
    },
]
export default new Router({
  routes
})
