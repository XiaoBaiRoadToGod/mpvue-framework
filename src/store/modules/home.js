
export default {
  namespaced: true,
  state: {
    text: 'home'
  },
  mutations: {
    changeText (state, data) {
      state.text = data
    }

  },
  actions: {
    updateText ({ commit }, par) {
      return new Promise(async (resolve, reject) => {
        try {
          /****
               * 请求
               */
        //   const data = await addEnterHomePage(par)
          commit('changeText', par)
        //   resolve(data)
        } catch (e) {
          reject(e)
        }
      })
    }
  },
  getters: {
    text (state) {
      return state.text
    }
  }
}
