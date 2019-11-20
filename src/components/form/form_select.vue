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
    },
    data(){
        return{
            
        }
    },
    methods:{
        validate(){
            return new Promise((resolve) => {
                resolve(true)
            })
        },
    },
}
</script>

<template>
    <div class="form_select">
        <label>{{ label }}</label>
        <div class="_border_all select_wrap">
            <select
                @input="$emit('evt', $event.target.value)"
                :value="value"
            >
                <option value="">test1</option>
                <option value="2">test2</option>
                <option value="3">test3</option>
            </select>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
    .form_select{
        display: flex;
        align-items: center;
        margin-bottom: 38px;
        label{
            font-size: 28px;
            width: 16%;
            text-align: right;
            padding-right: 10px;
        }
        select{
            font-size: 26px;
            padding: 0 10px;
            height: 80px;
            width: 100%;
        }
    }
    .select_wrap{
        flex: 1;
    }
</style>

<style lang="postcss">
    .form_select{
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