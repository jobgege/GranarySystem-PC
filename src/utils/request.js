import axios from "axios";
import { ElMessage } from 'element-plus';
import pinia from '../store/index';
import { getToken } from "./token-utils";
const service = axios.create(Object.assign({},{
  //  object.assign()静态方法将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。
  // 测试路径
  baseURL: "/app-dev/",
  //配置项，到时候写路径
  timeout: 5000,
} ));



// 添加请求拦截器
service.interceptors.request.use((config) => {
  //如果有token, 通过请求头携带给后台
  const token = getToken()//拿到token的数据
     if (token) {
      // config.headers['token'] = token  // 报错: headers对象并没有声明有token, 不能随便添加
      config.headers.Authorization = `Bearer ${token}`;
    }else{
      console.log("没有token令牌")
    }
  console.log('请求拦截')
   return config;
});




// service.interceptors.response.use(
//   (response) => {

//   },
//   (error) => {
//     return Promise.reject(error.message);
//   }
// );

export default service;
