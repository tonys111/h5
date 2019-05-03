import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import moutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    moutations,
    actions,
})
