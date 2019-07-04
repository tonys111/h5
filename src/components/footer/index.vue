<script>
export default {
    data(){
        return {
            nav: [
                {
                    name: 'home',
                    url: '/',
                },
                {
                    name: 'games',
                    url: '/games',
                },
                {
                    name: 'apps',
                    url: '/application',
                },
                // {
                //     name: 'resume',
                //     url: '/resume',
                // },
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
        :to='item.url'
        >{{ item.name }}</router-link>
    </nav>
</template>

<style lang="postcss" scoped>
    nav{
        display: flex;
        height: 80px;
        align-items: center;
        position: fixed;
        width: 100%;
        bottom: 0;
        a{
            flex: 1;
            text-align: center;
        }
    }
</style>

