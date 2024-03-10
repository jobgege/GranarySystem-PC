// 静态路由表，项目中每个用户都可以访问的功能
import Home from '../views/homepage.vue';
const ConstantRoutes = [{
    // 省略....
    path: '/',
    redirect:'/login',
    name: 'Home',
    component:Home,
    children: [
        {
            path: '/homepage',
            name: 'Homepage',
            meta: {
                title: '首页',
                permiss: '1',
            },
            component: () => import( '../views/MainPage.vue'),
        },
        
    ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
         component: () => import( '../views/LoginPage.vue'),
    },
  ]

  export default ConstantRoutes