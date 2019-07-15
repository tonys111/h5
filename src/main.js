import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import axios from 'axios'
import '@/lib/rem'
import '@/assets/css/common.css'
import '@/lib/aixos_config'
import '@/lib/directive'
import navGuard from '@/lib/nav_guard'
navGuard(router,store)
Vue.prototype.$api = (url, payload = {}) => axios.get(url, payload)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

