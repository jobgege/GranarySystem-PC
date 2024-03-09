import Home from '../views/homepage.vue';
const asyncRoutes = [
    // 先空着这里，后面来补充功能 
    {
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
            {
                path: '/management',
                name: 'Management',
                meta: {
                    title: '工作管理',
                    permiss: '11',
                },
                children: [
                    {
                        path: '/entry',
                        name: 'Entry',
                        meta: {
                            title: '入门登记',
                            permiss: '12',
                        },
                        component: () => import( '../views/EntryRegistration.vue'),
                    },
                    {
                        path: '/sampling',
                        name: 'Sampling',
                        meta: {
                            title: '扦样管理',
                            permiss: '13',
                        },
                        // component: () => import( '../views/users.vue'),
                    },
                ]
                // component: () => import(/* webpackChunkName: "table" */ '../views/table.vue'),
            },
            {
                path: '/babelinformation',
                name: 'Basic',
                meta: {
                    title: '基础信息',
                },
                children: [
                    {
                        path: '/babelinformation',
                        name: 'BabelInformation',
                        meta: {
                            title: '基础信息',
                            permiss: '14',
                        },
                        component: () => import( '../views/BabelInformation.vue'),
                    },
                ]
            },
            {
                path: '/personhome',
                name: 'PersonHome',
                meta: {
                    title: '个人中心',
                },
                 component: () => import(/* webpackChunkName: "login" */ '../views/PersonPage.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
         component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue'),

    },
   
    // {
    //     path: '/403',
    //     name: '403',
    //     meta: {
    //         title: '没有权限',
    //     },
    //     // component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    // },
  ]
  
  export default asyncRoutes