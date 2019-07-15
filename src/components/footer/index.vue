<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
            nav: [
                {
                    name: 'Home',
                    url: '/home',
                    icon: 'iconhome',
                },
                {
                    name: 'Games',
                    url: '/games',
                    icon: 'iconfire',
                },
                {
                    name: 'Apps',
                    url: '/application',
                    icon: 'iconappstore',
                },
                {
                    name: 'me',
                    url: '/me',
                    icon: 'iconuser',
                },
            ]
        }
    },
    computed:{
        ...mapState(['currentRouter'])
    }
}
</script>

<template>
    <footer>
        <nav v-show="currentRouter !== '/article'">
            <router-link
            v-for="item in nav"
            :key="item.name"
            :to='item.url'>
                <i class="iconfont" :class="item.icon"></i>
                <p>{{ item.name }}</p>
            </router-link>
        </nav>
        <div class="back" @click="$router.go(-1)">
            <i class="iconfont iconleft"></i>
        </div>
    </footer>
</template>

<style lang="postcss" scoped>
    footer{
        position: fixed;
        bottom: 0;
        height: 110px;
        background-color: #fefefe;
        width: 100%;
        max-width: 650PX;
    }
    nav{
        display: flex;
        height: 100%;
        a{
            flex: 1;
            text-align: center;
            height: 100%;
            padding-top: 6px;
        }
        p,.iconfont{
            color: #aaa8b4;
        }
        p{
            font-size: 20px;
            line-height: 20px;
        }
        .iconfont{
            font-size: 56px;
        }
        .router-link-active{
            p,.iconfont{
                color: #5ebdf8;
            }
        }
    }
    .back{
        display: flex;
        height: 100%;
        align-items: center;
        width: 80px;
        padding-left: 30px;
    }
    .iconleft{
        font-size: 50px;
        color: #aaa8b4;
    }
</style>

