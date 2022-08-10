import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css"

export function request(config) {
    const instance = axios.create({
        //测试地址
      /*   baseURL: 'http://127.0.0.1', */
      //服务器地址
        baseURL: 'http://116.62.110.109:8080',
        timeout: 5000,
    }) 
    instance.interceptors.request.use(res => {
        nProgress.start()
        return res
    })
    instance.interceptors.response.use(res => {
        nProgress.done()
        return res
    }) 
    return instance(config)
}