// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
    debug: true,
    state,
    getters,
    actions,
    mutations
})

export default store