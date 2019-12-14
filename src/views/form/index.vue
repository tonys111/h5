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
    <div class="form_wrap">
        <FormC ref="form">
            <FormInput
                v-model="form.userName"
                :rule="rules.userName"
                label='姓名姓名'
            />
            <FormInput
                v-model="form.id"
                :rule="rules.id"
                label='id'
            />
            <FormSelect
            v-model="form.city"
            label='城市'
            required>
                <option value="">请选择</option>
                <option value="2">北京</option>
                <option value="3">上海</option>
            </FormSelect>
            <button @click.prevent="onSubmit">onSubmit</button>
        </FormC>
    </div>
</template>

<style lang="postcss" scoped>
    .form_wrap{
        width: 90%;
        margin: 0 auto;
        padding: 50px 0;
    }
</style>