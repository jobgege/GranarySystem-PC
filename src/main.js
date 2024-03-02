import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import {createPinia} from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersist)
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 考虑使用自定义权限指令实现v-permiss
// const permiss = usePermissStore();
// app.directive('permiss', {
//     mounted(el, binding) {
//         if (!permiss.key.includes(String(binding.value))) {
//             el['hidden'] = true;
//         }
//     },
// });
app.use(pinia).use(router).use(ElementPlus).mount('#app')
