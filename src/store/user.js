import { defineStore } from "pinia";

// 用户信息
export const useUserStore = defineStore('user', {
    // 其他配置...
    state: () => {
        return {
            //设置token
            userId: '',
            password: '',
            rememberPsd: false
        }
    },
    getters: {
        
    },
    actions: {
    },
    persist: {
        enabled: true,
    }
})
