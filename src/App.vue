<script>
import ItemFooter from '@/components/footer'
export default {
    components:{
        ItemFooter,
    },
    data(){
        return{

        }
    }
}
</script>

<template>
    <div>
        <router-view/>
        <ItemFooter/>
    </div>
</template>

<style>
.app_box{
    width: 100px;
    height: 100px;
}
</style>

