<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css'

export default {
    components: { Swipe, SwipeItem },
    data(){
        return{
            banner: [],
            tabType: {},
            articleList: [],
            active: '全部',
        }
    },
    created(){
        this.$api('get_banner.json').then(res=>{
            this.banner = res.list
        })
        this.$api('article.json').then(res=>{
            const tabType = {
                "全部": "全部"
            }
            const articleList = []
            for (const i of res.list) {
                tabType[i.tag] = i.tag
                articleList.push({
                    title: i.title,
                    api: i.api,
                    tag: i.tag,
                })
            }
            this.tabType = tabType
            this.articleList = articleList
        })
    },
    methods:{
        changeTab(val){
            this.active = val
        },
        goToArticle(api){
            this.$router.push({ 
                path:`/article`, 
                query: { api },
            })
        }
    },
}
</script>

<template>
    <div class="home">
        <div aspectratio w-16-9 class="wrap_swipe">
            <div aspectratio-content>
                <swipe :auto='5000'>
                    <swipe-item v-for="item in banner" :key="item">
                        <img :src="item">
                    </swipe-item>
                </swipe>
            </div>
        </div>
        <ul class="tab">
            <li
            v-for="val in tabType"
            @click="changeTab(val)"
            :class="{'active': val === active}"
            :key="val">
                {{ val }}
            </li>
        </ul>
        <ul class="article">
            <li
            v-for="item in articleList"
            :key="item.title"
            v-show="item.tag === active || active === '全部'"
            @click="goToArticle(item.api)"
            class="border_line">
                {{ item.title }}
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<style lang="postcss" scoped>
    .wrap_swipe{
        width: 100%;
    }
    .tab{
        display: flex;
        padding: 30px 50px;
        li{
            background-color: #fefefe;
            padding: 8px 30px;
            border-radius: 50px;
            color: #adaea1;
            margin-right: 10px;
        }
        .active{
            color: #fff;
            background-color: #5ebdf8;
        }
    }
    .article{
        background-color: #fefefe;
        li{
            padding: 0 50px;
            line-height: 100px;
            &::after{
                background-color: #eee;
            }
        }
    }
</style>

