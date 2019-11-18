<script>
export default {
    name: 'formPage',
    data(){
        return{
            inputVal: 'input val'
        }
    },
    methods:{
        onSubmit(){
            console.log(123123)
        }
    }
}
</script>

<template>
    <div>
        <form>
            <FormInput v-model="inputVal"/>
            <FormSelect/>
            <button @click.prevent="onSubmit">onSubmit</button>
        </form>
    </div>
</template>