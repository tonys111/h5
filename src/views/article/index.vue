<script>
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-light.css';
export default {
    data(){
        return{
            html: ''
        }
    },
    created(){
        const api = this.$route.query.api
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
        })
        this.$api(`/md/${ api }`).then(res=>{
            console.log(res)
            this.html = marked(res)
        })
    }
}
</script>

<template>
    <div v-html='html' class="article"></div>
</template>

<style lang="postcss" scoped>
    .article{
        padding: 20px 30px 0 30px;
    }
</style>

