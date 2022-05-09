import {ref,reactive} from 'vue'
import {ElMessage,ElForm} from "element-plus";
import router from '@/router/index'
const form_phone=ref<InstanceType<typeof ElForm>>()
const account = reactive({
    num:"",
    password:""
})
const checkNum=(rule:any,value:any,callback:any)=>{
    console.log('--')
    return  value.toString().length<6?callback('账号长度应大于6位'):true
}
const rule = {
    num:[
        { validator:checkNum, trigger: 'blur' },
    ],
    password:[{required:true,message:'必填项'}, {pattern:/^.{5,}$/,message:'密码长度应大于5位'}]
}
const rules = reactive(rule)
const login = () => {
    form_phone.value?.validate((isValidate:any,invalidFields:any)=>{
        if(isValidate){
            ElMessage.success('登陆成功')
            router.push('/about')
        }
        console.log(isValidate,invalidFields)
    })
}
export default {account,rules,login,form_phone}
