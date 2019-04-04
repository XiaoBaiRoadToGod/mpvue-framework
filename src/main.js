import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.store = store
App.mpType = 'app'

Vue.use(MpvueRouterPatch)

const app = new Vue(App)
app.$mount()
