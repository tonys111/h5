<script>
import lottie from 'lottie-web'
import myjson from './data.json'
export default {
    data(){
        return{

        }
    },
    mounted(){
        lottie.loadAnimation({
            animationData: myjson,   //json文件路径
            loop:true,
            autoplay:true,
            renderer:'svg',  //渲染方式，有"html"、"canvas"和"svg"三种
            container:this.$refs.mysvg
        })
    }
}
</script>

<template>
    <div ref="mysvg">
        
    </div>
</template>