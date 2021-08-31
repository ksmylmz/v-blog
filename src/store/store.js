import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const _store = new Vuex.Store({
  state:{
    user:null,
    islogin:false,
    loginModal:false,
  },

  mutations:{
    setUser(user)
    {
      this.state.user.name=user.name;
      this.state.user.name.email = user.email;
    }
  }
})