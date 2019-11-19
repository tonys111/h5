<script>
import mixin from './mixin'
export default {
    mixins: [ mixin ],
    props: {
        value: null,
        rule: null,
    },
    data(){
        return{}
    },
    methods:{
        validate(){
            return new Promise((resolve) => {
                if(this.rule){
                    if(this.rule.required && this.value == '') {
                        console.log(this.rule.required)
                        resolve(false)
                        return
                    }
                    if(this.rule.validator){
                        this.rule.validator(this.value, msg => {
                            if(msg){
                                console.log(msg)
                                resolve(false)
                            } else {
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
        <label>文字</label>
        <input
            :value="value"
            @input="$emit('evt', $event.target.value)"
            @blur="validate"
            class="_border_all"
            type="text"
        >
    </div>
</template>

<style lang="postcss" scoped>

</style>