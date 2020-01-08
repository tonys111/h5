<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    components: {
        Swipe,
        SwipeItem,
    },
    data(){
        return{

        }
    },
}
</script>

<template>
    <div>
        <Swipe
            :autoplay="3000"
            indicator-color="white"
            class="banner"
        >
            <SwipeItem>1</SwipeItem>
            <SwipeItem>2</SwipeItem>
            <SwipeItem>3</SwipeItem>
            <SwipeItem>4</SwipeItem>
        </Swipe>
        <div class="sprite-base base-boat"></div>
    </div>
</template>

<style lang="postcss" scoped>
    .banner{
        height: 300px;
        background-color: #66c6f2;
    }
</style>