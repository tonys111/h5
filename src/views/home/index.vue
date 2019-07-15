<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-light.css';
export default {
    components: { Swipe, SwipeItem },
    data(){
        return{
            banner: [],
            code:''
        }
    },
    created(){
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            breaks: true,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false,
            headerIds: false,
        });
        this.$api.getBanner().then(res=>{
            this.banner = res.list
        })
        this.$api.getMd().then(res=>{
            const html = marked(res)
            this.code = html
        })
    },
    mounted(){
        
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
        <div class="hljs" ref="hlDiv" v-html="code"></div>
    </div>
</template>

<style lang="postcss" scoped>
    .home-swipe{
        height: 422px;
    }
</style>

