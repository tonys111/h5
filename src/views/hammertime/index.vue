<script>
/* eslint-disable */
export default {
    data(){
        return{

        }
    },
    mounted(){
        const hammertime = new Hammer(this.$refs.hammertime)
        hammertime.on('panleft', function(ev) {
            console.log(ev.type)
        })
    }
}
</script>

<template>
    <div class="hammertime" ref="hammertime">
        hammertime
    </div>
</template>

<style lang="postcss" scoped>
    .hammertime{
        height: 100%;
    }
</style>