import AxiosCreate from './axios'
const Instance = new AxiosCreate({
    baseURL:'192.168.1.1',
    onRfull:function (config){
        console.log('qingqiu')
        return config
    },
    onRrej:function (err){
        console.log(err)
    },
    onOrej:function (err){
        console.log(err)
    },
    onOfull:function (res){
        console.log(res)
        return res
    },
})
export default Instance
