import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
Vue.use(Router)
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/games',
        component: () => ({ component: import(/* webpackChunkName: "games" */ '@/views/games') }),
    },
    {
        path: '/apps',
        component: () => ({ component: import(/* webpackChunkName: "apps" */ '@/views/apps') }),
    },
    {
        path: '/resume',
        component: () => ({ component: import(/* webpackChunkName: "resume" */ '@/views/resume') }),
    },
]
export default new Router({
  routes
})
