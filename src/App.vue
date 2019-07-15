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
    <div class="root">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <ItemFooter/>
    </div>
</template>

<style lang="postcss">
.root{
    padding-bottom: 120px;
    max-width: 650PX;
    margin: 0 auto;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>


