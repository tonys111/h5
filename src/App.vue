<script>
import PageFooter from '@/components/footer'
// import { mapState } from 'vuex'
export default {
    components:{
        PageFooter
    },
    data(){
        return{
        }
    },
    created(){
    },
    mounted(){
    },
    computed:{
        // ...mapState(['currentRouter']),
    },
    watch:{
        // '$store.state.currentRouter'(router){
        //     this.lastRout.push(router)
        //     var len = this.lastRout.length
        //     if(this.lastRout[len-1] == this.lastRout[len-3]){
        //         this.routeTransition = 'vux-pop-out'
        //         this.lastRout.pop()
        //         this.lastRout.pop()
        //     } else {
        //          this.routeTransition = 'vux-pop-in'
        //     }
        // }
    }
}
</script>

<template>
    <div class="root">
        <router-view/>
        <PageFooter/>
    </div>
</template>

<style lang="postcss" scoped>
</style>



