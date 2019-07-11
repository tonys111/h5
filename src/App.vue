<script>
import ItemFooter from '@/components/footer'
export default {
    components:{
        ItemFooter,
    },
    data(){
        return{

        }
    }
}
</script>

<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <ItemFooter/>
    </div>
</template>

<style lang="postcss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


