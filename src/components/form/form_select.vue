<script>
import mixin from './mixin'
export default {
    mixins: [ mixin ],
    props:{
        value: null,
        label: {
            type: String,
            default: 'label text',
        },
        required: {
            type: Boolean,
            default: false,
        }
    },
    data(){
        return{
            errorMsg: ''
        }
    },
    methods:{
        validate(){
            return new Promise((resolve) => {
                if(this.required){
                    if(this.value){
                        this.errorMsg = ''
                        resolve(true)
                    } else {
                        this.errorMsg = `必须选择${ this.label }`
                        resolve(false)
                    }
                } else {
                    resolve(true)
                }
            })
        },
        change(e){
            if(this.required && e.target.value){
                this.errorMsg = ''
            } else {
                this.errorMsg = `必须选择${ this.label }`
            }
            this.$emit('evt', e.target.value)
        }
    },
}
</script>

<template>
    <div class="form_select">
        <label class="label_text">{{ label }}</label>
        <div
            class="wrap"
            :class="{'focus_border_error' : errorMsg }"
        >
            <select
                @input="change"
                :value="value"
            >
                <slot></slot>
            </select>
            <i class="iconfont iconleft"></i>
            <p
                v-show="errorMsg" 
                class="error_text"
            >{{ errorMsg }}</p>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
    @import './style';
    .form_select{
        select{
            font-size: 26px;
            padding: 0 10px;
            height: 80px;
            width: 100%;
        }
    }
    .iconleft{
        position: absolute;
        right: 20px;
        top: 23px;
        font-size: 35px;
        z-index: 0;
        pointer-events: none;
        transform:rotate(-90deg);
        color: #ddd;
    }
</style>