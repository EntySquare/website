import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true, // 登录还是注册
  },
  getters: {
    isLogin(state) {
      return state.isLogin
    },
  },
  mutations: {
    setIsLogin(state, payload) {
      state.isLogin = payload
    },
  },
  actions: {},
  modules: {},
})
