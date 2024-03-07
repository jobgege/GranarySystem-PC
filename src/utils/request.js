import axios from "axios";
import { ElMessage } from 'element-plus';
import pinia from '../stores/index';

// 配置新建一个 axios 实例,
//axios.create({config}):下面是可以使用的实例方法
// axios#request(config)这个方法，有请求拦截器来对config进行更深层次的配置，也即是更统一性的配置由拦截器完成
// axios#get(url[, config])
// axios#delete(url[, config])
// axios#head(url[, config])
// axios#options(url[, config])
// axios#post(url[, data[, config]])
// axios#put(url[, data[, config]])
// axios#patch(url[, data[, config]])
// axios#getUri([config])
// CreateAxiosDefaults是传入的配置接口类型，返回AxiosInstanse
//CreateAxiosDefaults接口相较于AxiosRequestConfig接口，多了请求头的泛型
const service = axios.create(Object.assign({},{
  //  object.assign()静态方法将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。
  baseURL: "/app-dev/",
  //配置项，到时候写路径
  timeout: 50000,
} ));



// 添加请求拦截器
service.interceptors.request.use((config) => {
  NProgress.start()//开启进度条
  // 如果有token, 通过请求头携带给后台
  const userInfoStore = useUserInfoStore(pinia) // 如果不是在组件中调用,必须传入pinia
  const token = userInfoStore.token//拿到token的数据
     if (token) {
      // config.headers['token'] = token  // 报错: headers对象并没有声明有token, 不能随便添加
      (config.headers)['token'] = token //这是什么语法？
    }
  return config;
});
//移除拦截器：service.interceptors.request.reject()
// 添加响应拦截器,在返回数据的.then之前执行



service.interceptors.response.use(
  (response) => {
  },
  (error) => {
    return Promise.reject(error.message);
  }
);

export default service;
