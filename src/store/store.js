import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const _store = new Vuex.Store({
  user:null,
  islogin:false,
  loginModal:false
})