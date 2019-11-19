import { DatetimePicker, Skeleton } from 'vant'
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
        Vue.use(DatetimePicker)
        Directive(Vue)
        Vue.config.productionTip = false
    }
}