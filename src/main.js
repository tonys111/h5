import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/assets/css/common.css'
import '@/lib/rem'
import '@/lib/hammer'
import GlobalInstall from '@/lib/global_install'
Vue.use(GlobalInstall)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')