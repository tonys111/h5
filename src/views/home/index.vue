<template>
    <div class="home">
        <swipe class="home-swipe">
            <swipe-item v-for="item in banner" :key="item">
                <img :src="item">
            </swipe-item>
        </swipe>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css'
export default {
    components: { Swipe, SwipeItem },
    data(){
        return{
            banner: [],
        }
    },
    created(){
        this.$api.getBanner().then(res=>{
            this.banner = res.list
        })
    },
    methods:{
    },
}
</script>

<style lang="postcss">
    .home-swipe{
        height: 422px;
    }
</style>

