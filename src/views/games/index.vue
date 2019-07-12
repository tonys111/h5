<template>
    <div>
        <h3>games</h3>
        <p>{{ this.demo }}</p>
        <button @click="CHANGE_TEXT('11111111')">touch me map</button>
        <button @click="getAppURL">---- get app url ----</button>
        <p>{{ this.gameText }}</p>
        <button @click="gggetAppURL">action page game</button>
        <button @click="CHANGE_GAME('gggggggg')">----mutations page game----</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
// import actions from './store/actions'
export default {
    data(){
        return{
        }
    },
    created(){
        this.gggetAppURL()
    },
    methods:{
        ...mapMutations(['CHANGE_TEXT']),
        ...mapMutations('pageGames', ['CHANGE_GAME']),
        ...mapActions(['getAppURL']),
        ...mapActions('pageGames',['gggetAppURL']),
    },
    computed: {
        ...mapState(['demo']),
        ...mapState('pageGames',{
            gameText: state => state.gameText,
        })
    }
}
</script>

