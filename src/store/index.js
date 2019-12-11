// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
// const requireContext = require('../utils/require-context')
// const path = require('path')

Vue.use(Vuex)
const modules = {
    home
}
// 自动注册 vuex 模块

// const files = requireContext(path.join(__dirname, './modules'), true, /\.js$/)
// console.log('vuex files')
// console.log(files)
// const modules = {}

// files.keys().forEach(key => {
//     modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
// })

const store = new Vuex.Store({
    debug: true,
    state: {
        text: '点我'
    },
    getters: {
        text (state, getters) {
            return state.text
        }
    },
    actions: {

    },
    mutations: {
        updateText (state, data) {
            state.text = data
        }
    },
    modules
})

export default store