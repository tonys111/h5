import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
    { 
        path: '/', 
        redirect: '/home' 
    },
    {
        path: '/home',
        component: () => ({ component: import(/* webpackChunkName: "home" */ '@/views/home') }),
    },
    {
        path: '/games',
        component: () => ({ component: import(/* webpackChunkName: "games" */ '@/views/games') }),
    },
    {
        path: '/application',
        component: () => ({ component: import(/* webpackChunkName: "application" */ '@/views/application') }),
    },
    {
        path: '/me',
        component: () => ({ component: import(/* webpackChunkName: "me" */ '@/views/me') }),
    },
]
export default new Router({
  routes
})
