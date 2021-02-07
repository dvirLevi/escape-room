import { createStore } from 'vuex'

export default createStore({
  state: {
    name: ""
  },
  mutations: {
    pushName(state, name) {
      state.name = name;
    }
  },
  actions: {
  },
  modules: {
  }
})
