import { createRouter, createWebHistory } from 'vue-router'
import asyncRoutes from './StaticRoute'
import ConstantRoutes from './ConstantRoute'

ConstantRoutes[0].children=ConstantRoutes[0].children.concat(asyncRoutes)
console.log(ConstantRoutes)
const router = createRouter({
  history: createWebHistory(),
  // 控制路由滚动行为  滚动到顶部
  scrollBehavior: () => ({ y: 0 }),
  routes: ConstantRoutes
})

// router.beforeEach((to, from, next) => {
//   // const permiss = usePermissStore();如果要做权限管理
//   if (!role && to.path !== '/login') {
//       next('/login');
//   } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
//       // 如果没有权限，则进入403
//       next('/403');
//   } else {
//       next();
//   }
// });

router.afterEach(() => {
  // NProgress.done()
})

export default router
