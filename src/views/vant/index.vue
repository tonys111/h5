<script>
export default {
    data(){
        return{
            loading: true,
            minHour: 10,
            maxHour: 20,
            minDate: new Date(),
            maxDate: new Date(2019, 10, 1),
            currentDate: new Date()
        }
    },
    created(){
        setTimeout(()=>{
            this.loading = false
        }, 3000)
    }
}
</script>

<template>
    <div class="vant">
        <!-- 骨架 -->
        <van-skeleton
        title
        avatar
        :row="3"
        :loading="loading"
        >
            <div>实际内容</div>
        </van-skeleton>
        <!-- 时间选择 -->
        <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        />
    </div>
</template>

<style lang="postcss" scoped>
    .vant{
        padding: 30px 0;
    }
</style>