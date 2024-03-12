//这里处理获取到的路由表信息
const asyncRoutes = [
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
                        component: () => import( '../views/SamplingManagement.vue'),
                    },
        ]
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
         component: () => import('../views/PersonPage.vue'),
    },
]

  
  
export default asyncRoutes