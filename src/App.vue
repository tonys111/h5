<script>
/* eslint-disable */
export default {
    components:{
    },
    data(){
        return{

        }
    },
    created(){
        const body = document.body
        const hammertime = new Hammer(body)
        hammertime.on('panleft', function(ev) {
            console.log(ev.type)
        })
    }
}
</script>

<template>
    <div class="root">
        <router-view/>
    </div>
</template>



