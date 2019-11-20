<script>
export default {
    name: 'formPage',
    data(){
        const validateName = (val, cb) => {
            cb()
        }
        const validateId = (val, cb) => {
            cb()
        }
        return{
            form:{
                userName: '',
                id: '',
                city: '',
            },
            rules:{
                userName: {
                    required: '请输入姓名',
                    validator: validateName,
                },
                id: {
                    required: '请输入id',
                    validator: validateId,
                }
            },
        }
    },
    methods:{
        onSubmit(){
            this.$refs.form.validate().then(()=>{
                console.log('可以提交')
            })
        }
    }
}
</script>

<template>
    <FormC ref="form">
        <FormInput
            v-model="form.userName"
            :rule="rules.userName"
        />
        <FormInput
            v-model="form.id"
            :rule="rules.id"
        />
        <FormSelect v-model="form.city">
            
        </FormSelect>
        <button @click.prevent="onSubmit">onSubmit</button>
    </FormC>
</template>