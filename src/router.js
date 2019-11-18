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
    {
        path: '/lottie',
        component: () => ({ component: import(/* webpackChunkName: "lottie" */ '@/views/lottie') }),
    },
    {
        path: '/hammertime',
        component: () => ({ component: import(/* webpackChunkName: "hammertime" */ '@/views/hammertime') }),
    },
    {
        path: '/vant',
        component: () => ({ component: import(/* webpackChunkName: "vant" */ '@/views/vant') }),
    },
    {
        path: '/form',
        component: () => ({ component: import(/* webpackChunkName: "form" */ '@/views/form') }),
    },
]
export default new Router({
  routes
})
