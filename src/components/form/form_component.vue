<script>
export default {
    methods:{
        async validate(){
            const flags = []
            for (let i = 0; i < this.$children.length; i++) {
                const item = this.$children[i]
                const flag = await item.validate()
                flags.push(flag)
            }
            if(flags.includes(false)){
                throw Error('表单错误')
            }
        }
    }
}
</script>

<template>
    <form>
        <slot></slot>
    </form>
</template>