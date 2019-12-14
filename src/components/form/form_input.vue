<script>
import mixin from './mixin'
export default {
    mixins: [ mixin ],
    props: {
        value: null,
        rule: null,
        label: {
            type: String,
            default: 'label text',
        },
    },
    data(){
        return{
            isFocus: false,
            errorMsg: '',
        }
    },
    methods:{
        validate(){
            this.isFocus = false
            return new Promise((resolve) => {
                if(this.rule){
                    if(this.rule.required && this.value == '') {
                        this.errorMsg = this.rule.required
                        resolve(false)
                        return
                    } else {
                        this.errorMsg = ''
                    }
                    if(this.rule.validator){
                        this.rule.validator(this.value, msg => {
                            if(msg){
                                this.errorMsg = msg
                                resolve(false)
                            } else {
                                this.errorMsg = ''
                                resolve(true)
                            }
                        })
                    }
                } else {
                    resolve(true)
                }
            })
        },
    },
}
</script>

<template>
    <div class="form_input">
        <label class="label_text">{{ label }}</label>
        <div
            :class="{ 'focus_border': isFocus, 'focus_border_error' : errorMsg }"
            class="wrap"
        >
            <input
                :value="value"
                @input="$emit('evt', $event.target.value)"
                @blur="validate"
                @focus="isFocus=true"
                type="text"
            >
            <p
                v-show="errorMsg" 
                class="error_text"
            >{{ errorMsg }}</p>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
    @import './style';
    .form_input{
        input{
            font-size: 26px;
            padding: 8px 16px;
            line-height: 60px;
            width: 100%;
        }
    }
</style>