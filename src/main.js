import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/assets/css/common.css'
import '@/assets/iconfont/iconfont.css'
if(process.env.NODE_ENV === 'development'){
    console.log(window.yuwei)
} else {
    // eslint-disable-next-line
    __webpack_public_path__ = window.yuwei
}
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

