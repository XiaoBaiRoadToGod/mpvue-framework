import * as types from "../types"
// 容器
const state = {
    state: null
}

// 如同计算属性，处理state的某个状态
const getters = {
    [types.GET_STATE]: state => state.state
}

const mutations = {
    [types.SET_STATE] (state, data) {
        state.state = data
    }
}

// actions提交 mutations ,不直接更改状态（通过store.dispatch触发）
const actions = {
    [types.REQUEST_DATA] ({ commit }, params) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve()
            } catch (err) {
                reject(err)
            }
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,

}
