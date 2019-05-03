import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'

Vue.use(Router)
const routes = [
    {
        path: '/',
        component: Home,
    },
]
export default new Router({
  routes
})
