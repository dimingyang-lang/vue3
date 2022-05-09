import { Module } from 'vuex'
import { account } from '@/store/type'
interface ILogin {
    token:string,
    userInfo:string
}
const login :Module<ILogin, account>= {
    namespaced:true,
    state:()=>{
        return {
            token:'',
            userInfo:''
        }
    }
}
export default login
