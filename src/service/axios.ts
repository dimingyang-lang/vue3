import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ElLoading} from 'element-plus'
import {ILoadingInstance} from "element-plus/lib/components/loading/src/loading.type";
interface axiosConfig extends AxiosRequestConfig{
    onRfull?: ((value: AxiosRequestConfig) => (AxiosRequestConfig | Promise<AxiosRequestConfig>)) | undefined,
    onRrej?:((error: any) => any) | undefined,
    onOfull?:((value: AxiosResponse) => (AxiosResponse | Promise<AxiosResponse>)) | undefined,
    onOrej?: ((error: any) => any) | undefined,
    showLoading?:boolean
}
export default class AxiosCreate {
    Instance:AxiosInstance;
    ElLoading?:ILoadingInstance;
    showLoading?:boolean;
    constructor(config:axiosConfig) {
        this.Instance = axios.create(config)
        this.showLoading=config.showLoading??true
        this.Instance.interceptors.request.use(config?.onRfull,config?.onRrej)
        this.Instance.interceptors.response.use(config?.onOfull,config?.onOrej)
        this.Instance.interceptors.request.use(res=>{
            if(this.showLoading==true) {
                this.ElLoading=ElLoading.service({
                    lock: true,
                    text: 'Loading',
                    background: 'rgba(0, 0, 0, 0.7)',
                })
            }
            return res
        })
        this.Instance.interceptors.response.use(res=>{
            setTimeout(()=>{
                this.ElLoading?.close()
            },3000)
            return res
        },error => {
            setTimeout(()=>{
                this.ElLoading?.close()
            },3000)
            return error
        })
    }
    Get(config:axiosConfig){
        this.Request({...config,method:'get'})
    }
    Post(config:axiosConfig){
        this.Request({...config,method:'post'})
    }
    GetBlob(config:axiosConfig){
        this.Request({...config,method:'get',responseType:'blob'})
    }
    PostBlob(config:axiosConfig){
        this.Request({...config,method:'post',responseType:'blob'})
    }
    Request(config: axiosConfig){
        let configCopy:axiosConfig=config;
        let showLoading = config.showLoading??false
        this.showLoading=showLoading
        if(config.onRfull) {
            configCopy = config.onRfull(config) as axiosConfig
        }
       return this.Instance.request(configCopy)
    }
}
