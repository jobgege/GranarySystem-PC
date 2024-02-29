import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/homepage.vue"),
      children: [
        {
          path: "/111",
          name: "111",
          component:()=>import("../views/users.vue")
         },
      ],

    },
    {
      path: "/login",
      name: "login",
      // component: () => import("../views/Login.vue"),
    },
  ],
})

export default router
