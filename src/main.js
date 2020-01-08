import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/assets/iconfont/iconfont.css'
import '@/assets/css/common.css'
import '@/sprite/css/common.css'
import '@/lib/rem'
import '@/lib/hammer'
import navGuards from '@/lib/navigation_guards'
import GlobalInstall from '@/lib/global_install'
Vue.use(GlobalInstall)
navGuards(router, store)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')