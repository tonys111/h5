<script>
export default {
    data() {
        return {
            list: [
                {
                    name: '使用AE生成动画',
                    link: '/lottie'
                },
                {
                    name: '移动端手势',
                    link: '/hammertime'
                },
                {
                    name: 'vant组件',
                    link: '/vant'
                },
                {
                    name: '表单组件',
                    link: '/form'
                },
                {
                    name: 'banner组件',
                    link: '/banner'
                },
            ]
        }
    },
}
</script>

<template>
    <ul class="nav">
        <router-link
            v-for="item in list"
            :key="item.link"
            :to="item.link"
            tag="li"
            class="_border_bottom"
        >{{ item.name }}</router-link>
    </ul>
</template>

<style lang="postcss" scoped>
    .nav{
        width: 96%;
        margin: 0 auto;
        li{
            line-height: 100px;
            padding: 0 30px;
        }
    }
</style>