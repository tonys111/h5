<template>
    <div>
        <div class="app_box">123</div>
        <router-view/>
        <!-- <ItemFooter/> -->
    </div>
</template>

<script>
// import ItemFooter from '@/components/footer'
export default {
    components:{
        // ItemFooter,
    },
    data(){
        return{

        }
    }
}
</script>

<style>
.app_box{
    width: 100px;
    height: 100px;
}
</style>

