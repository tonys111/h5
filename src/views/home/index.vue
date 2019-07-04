<template>
    <div class="home">
        <div aspectratio w-1-1 class="box">
            <div aspectratio-content>content_content</div>
        </div>
        <div aspectratio w-2-1 class="box">
            <div aspectratio-content>content</div>
        </div>
        <div>
            <i class="iconfont icon-app"></i>
        </div>
        <img src="@/assets/img/pic.png">
        <div class="bg"></div>
        <div class="icon-header icon-header-one"></div>
        <div class="icon-footer icon-footer-weibo"></div>
        <img src="@/assets/img/mini.png" alt="">
    </div>
</template>

<style lang="postcss" scoped>
.box{
    width: 220px;
    background-color: #ddd;
    margin-bottom: 10px;
}
.icon-app{
    font-size: 100px;
}
.bg{
    height: 200px;
    background-image: url(~@/assets/img/pic.png);
}
img{
    width: 200px;
}
</style>

