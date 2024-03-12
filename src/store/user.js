import { defineStore } from "pinia";
import { getToken, removeToken, setToken } from '../utils/token-utils';
import {Login} from '../api'

// 用户信息
export const useUserStore = defineStore('user', {
    // 其他配置...
    state: () => {
        return {
            //设置token
            username: 'root',
            password: 'E10ADC3949BA59ABBE56E057F20F883E ',
            rememberPsd: false,
            token: getToken(),
        }
    },
    getters: {
       },
    actions: {
         // 登陆的异步action
    async login (loginForm) {
        // 发送登陆的请求
       const result = await Login(loginForm)
       // 请求成功后, 取出token保存  pinia和local中
       const token = result.data.data.token
       this.token = token
       setToken(token)
       //将token存储到pinia层及localStorage中
     },
    },
    
    persist: {
        //持久化数据
        enabled: true,
    }
})
