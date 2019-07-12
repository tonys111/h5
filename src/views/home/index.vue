<template>
    <div class="home">
        <swipe :auto='100000' class="home-swipe">
            <swipe-item v-for="item in banner" :key="item">
                <img :src="item">
            </swipe-item>
        </swipe>
        <br/>
        <div class="setOnePx box"></div>
        <p>降低呃呃呃 dsf 123</p>
        <div class="setBorderAll box"></div>
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

<style lang="postcss" scoped>
    .home-swipe{
        height: 422px;
    }
    .box{
        width: 200px;
        height: 200px;
    }
    .setOnePx{
        position: relative;
        &::after{
            position: absolute;
            content: '';
            background-color: red;
            display: block;
            width: 100%;
            height: 1px;
            transform: scale(1, 0.5);
            bottom: 0;
            left: 0;
            border-radius: 50px;
        }
    }
    .setBorderAll{
        position: relative;
        &::after{
            position:absolute;
            content:'';
            top: 0;
            left: 0;
            width: 200%;
            height: 200%;
            transform: scale(0.5);
            transform-origin: left top;
            box-sizing: border-box;
            border: 1px solid red;
            border-radius: 50px;
        }
    }
</style>

