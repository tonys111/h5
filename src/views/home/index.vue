<script>
export default {
    data() {
        return {
            minHour: 10,
            maxHour: 20,
            minDate: new Date(),
            maxDate: new Date(2019, 10, 1),
            currentDate: new Date()
        };
    }
}
</script>

<template>
    <div>
        <!-- <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        /> -->
        <!-- <van-skeleton title :row="3" /> -->
        <br/>
        <div class="van-hairline--top"></div>
    </div>
</template>

<style lang="postcss" scoped>
</style>