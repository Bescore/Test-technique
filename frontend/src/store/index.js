import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isconnected:false
  },
  getters: {
    incremented (state) {
      return state.isconnected
    }
  },
  mutations: {
    INCSTATEX ( state) {
      state.isconnected = true;
    },
    DECCSTATEX ( state) {
      state.isconnected = false;
    }
  },
  actions: {
    incstate ( context ) {
      context.commit( "INCSTATEX" )
    },
    deccstate ( context ) {
      context.commit( "DECCSTATEX" )
    }
  },
  modules: {
  }
})
