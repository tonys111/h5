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
        <label>{{ label }}</label>
        <div
            :class="{ 'focus_border': isFocus, 'focus_border_error' : errorMsg }"
            class="input_wrap _border_all"
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
    .form_input{
        display: flex;
        align-items: center;
        margin-bottom: 38px;
        label{
            font-size: 28px;
            width: 16%;
            text-align: right;
            padding-right: 10px;
        }
        input{
            font-size: 26px;
            padding: 8px 16px;
            line-height: 60px;
            width: 100%;
        }
    }
    .input_wrap{
        flex: 1;
        position: relative;
    }
    .error_text{
        position: absolute;
        bottom: -30px;
        left: 3px;
        font-size: 16px;
        color: #f56c6c;
    }
</style>

<style lang="postcss">
    .form_input{
        ._border_all:after {
            border-radius: 16px;
        }
        .focus_border:after {
            border-color: #409eff;
        }
        .focus_border_error:after {
            border-color: #f56c6c;
        }
    }
</style>