import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    increment(state) {
      if (state.counter >= 0) {
       state.counter++
      }
    },
    decrement(state) {
      if (state.counter > 0) {
        state.counter--
      }
    },
    reset(state) {
     state.counter = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
