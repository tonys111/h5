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

<template>
    <div class="home">
        <swipe :auto='100000' class="home-swipe">
            <swipe-item v-for="item in banner" :key="item">
                <img :src="item">
            </swipe-item>
        </swipe>
        <br/>
        <div class="border_line box"></div>
        <p>降低呃呃呃 dsf 123</p>
        <div class="border_all box"></div>
    </div>
</template>

<style lang="postcss" scoped>
    .home-swipe{
        height: 422px;
    }
    .box{
        width: 200px;
        height: 200px;
    }
</style>

