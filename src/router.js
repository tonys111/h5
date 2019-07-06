import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
    {
        path: '/',
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
        path: '/resume',
        component: () => ({ component: import(/* webpackChunkName: "resume" */ '@/views/resume') }),
    },
]
export default new Router({
  routes
})
