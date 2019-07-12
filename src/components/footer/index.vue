<script>
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
    }
}
</script>

<template>
    <nav>
        <router-link
        v-for="item in nav"
        :key="item.name"
        :to='item.url'>
            <i class="iconfont" :class="item.icon"></i>
            <p>{{ item.name }}</p>
        </router-link>
    </nav>
</template>

<style lang="postcss" scoped>
    nav{
        display: flex;
        height: 110px;
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: #fefefe;
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
            font-size: 52px;
        }
        .router-link-active{
            p,.iconfont{
                color: #5ebdf8;
            }
        }
    }
</style>

