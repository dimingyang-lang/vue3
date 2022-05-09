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
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login
  }
})
