import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sebuahData: 'Ketikkan sesuatu...'
  },
  actions: {
    getSebuahData: function (state) {
      return state.sebuahData
    }
  },
  mutations: {
    changeSebuahData: (state, data) => {
      state.sebuahData = data
    }
  },
  getters: {
    getSebuahData: function (state) {
      return state.sebuahData
    }
  }
})

export default store
