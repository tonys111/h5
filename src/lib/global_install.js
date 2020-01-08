import { DatetimePicker, Skeleton, Lazyload } from 'vant'
import FormC from '@/components/form/form_component.vue'
import FormInput from '@/components/form/form_input.vue'
import FormSelect from '@/components/form/form_select.vue'
import Directive from '@/lib/directive'

export default {
    install(Vue) {
        Vue.component('FormC', FormC)
        Vue.component('FormInput', FormInput)
        Vue.component('FormSelect', FormSelect)
        Vue.use(Skeleton)
        .use(DatetimePicker)
        .use(Lazyload)
        Directive(Vue)
        Vue.config.productionTip = false
    }
}