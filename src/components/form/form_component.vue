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
                throw Error()
            }
            // return !flags.includes(false)
            // this.$children.map(async item => {
            //     const flag = await item.validate()
            //     flags.push(flag)
            // })
            // console.log(flags)
            // return !flags.includes(false)
        }
    }
}
</script>

<template>
    <form>
        <slot></slot>
    </form>
</template>