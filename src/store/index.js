import { createStore } from 'vuex'

import persistedstate from 'vuex-persistedstate'

const store = createStore({
  state () {
    return {
      user: {}
    }
  },
  getters: {
  },
  mutations: {
    // state를 변경시키는 역할
    user (state, data) {
      state.user = data
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    persistedstate({
      paths: ['user']
    })
  ]
})

export default store
