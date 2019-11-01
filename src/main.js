import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/assets/css/common.css'
import '@/lib/rem'
import { DatetimePicker } from 'vant'
import { Skeleton } from 'vant'
Vue.use(Skeleton)
Vue.use(DatetimePicker)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
