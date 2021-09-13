import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const _store = new Vuex.Store({
  state:{
    user:null,
    lang:'en',
    selectedCountry:''
  },
  getters:{
    getUser(state){
      return state.user
    },
    getLang(state){
      return state.lang
    },
    getSelectedCountry(state){
      return state.selectedCountry
    }
  },
  mutations:{
    setUser(state,user)
    {
       state.user = user
    },
    setLang(state,lang)
    {
       state.lang = lang
    },
    setSelectedCountry(state,country)
    {
       state.selectedCountry = country
    },
  }
})