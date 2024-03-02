import { createRouter, createWebHistory } from 'vue-router'
import asyncRoutes from './StaticRoute'

const router = createRouter({
  history: createWebHistory(),
  routes:asyncRoutes
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
