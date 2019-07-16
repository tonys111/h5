<script>
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';
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

<style lang="postcss">
    .article{
        padding: 10px 20px 0 20px;
        pre{
            font-size: 16px;
            color: #abb2bf;
            background-color: #282c34;
            padding:16px 12px;
            margin: 10px 0;
            overflow-x: auto;
            border-radius: 6px;
        }
    }
</style>

