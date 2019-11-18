<script>
import mixin from './mixin'
export default {
    mixins: [ mixin ],
    props: {
        value: null,
    },
    data(){
        return{
        }
    },
    methods:{
        validate(){
            console.log(123123)
        },
    },
}
</script>

<template>
    <div>
        <input
            :value="value"
            @input="$emit('evt', $event.target.value)"
            type="text"
            @blur="validate"
        >
    </div>
</template>