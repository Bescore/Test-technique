import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isconnected: false,
    maplace:0
  },
  getters: {
    incremented (state) {
      return state.isconnected
    }
  },
  mutations: {
    GETMAPLACE ( state ) {
      state.maplace=1
    },
    DECMAPLACE ( state ) {
      state.maplace=0
    },
    INCSTATEX ( state) {
      state.isconnected = true;
    },
    DECCSTATEX ( state) {
      state.isconnected = false;
    }
  },
  actions: {
    getmaplace ( context ) {
      context.commit( "GETMAPLACE" )
    },
    decmaplace ( context ) {
      context.commit( "DECMAPLACE" )
    },
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
