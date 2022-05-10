import { createStore } from 'vuex'
import {account} from "@/store/type";
import login from "@/store/login/login";
export default createStore<account>({
  state:()=>{
    return {
      num:'11',
      password:'22'
    }
  },
  getters: {
    to(state){
      return function (n:any){
        return n+''+state.num
      }
    },
    ad(state){
      return 112
    }
  },
  mutations: {
    change(state,payload){
      state.num+=payload
    }
  },
  actions: {
    aca(context){
      context.commit('change')
    }
  },
  modules: {
    login
  }
})
