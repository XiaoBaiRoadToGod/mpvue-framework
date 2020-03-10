
import {
  getUserWecharId,
  setUserUnionid,
  getBySession,
  getCityLists

} from '@/api/index'
import { setSessionId, setSessionKey } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    userWecharInfo: null
  },
  mutations: {
    changeWecharInfo (state, data) {
      state.userWecharInfo = data
    }

  },
  actions: {
    getUserWecharId ({ commit }, par) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await getUserWecharId(par)
          const { code, data } = res
          if (code === '1001') {
            setSessionId(data.sessionId)
            setSessionKey(data.sessionKey)
            commit('changeWecharInfo', data)
          }
          resolve(res)
        } catch (e) {
          reject(e)
        }
      })
    },
    setUserUnionid ({ commit }, par) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await setUserUnionid(par)
          resolve(res)
        } catch (e) {
          reject(e)
        }
      })
    },
    getUserInfo ({ commit }, par) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await getBySession(par)
          resolve(res)
        } catch (e) {
          reject(e)
        }
      })
    },
    getCityLists ({ commit }, par) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await getCityLists(par)
          resolve(res)
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
