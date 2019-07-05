import '@/assets/css/common.css'
import '@/assets/iconfont/iconfont.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
Vue.config.productionTip = false
// eslint-disable-next-line
// __webpack_public_path__ = yunweiConfig.cdns[0] + '/'
// eslint-disable-next-line
// console.log(__webpack_public_path__)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
