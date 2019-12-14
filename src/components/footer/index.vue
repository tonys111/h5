<template>
    <div class="footer _border_top">
        <span @click="$router.go(-1)">返回</span>
    </div>
</template>

<style lang="postcss" scoped>
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-color: #fff;
        line-height: 100px;
    }
</style>