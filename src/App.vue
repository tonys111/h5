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
        console.log(
            `%c vue-devtools %c Detected Vue v111232131 %c`,
            'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
            'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
            'background:transparent'
        )
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



