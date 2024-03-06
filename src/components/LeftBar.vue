<template>
    <div class="leftbar" style="height: 100%;">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#2d3d51" text-color="#BFCBD9"
            :collapse="CollapseStore.isCollapse" style="height: 100%;">
            <div class="mb-2 logobox">
                <span v-show="!CollapseStore.isCollapse" class="title">粮食检验检测系统</span>
            </div>
            <template v-for="menu  in  menus">
                <template v-if="menu.menus">
                    <el-sub-menu :index="menu.label" :key="menu.menuid" >
                        <!-- v-permiss="item.permiss" v-permiss自定义指令权限 -->
                        <template #title>
                            <el-icon>
                                <component :is="menu.icon"></component>
                            </el-icon>
                            <span>{{ menu.label }}</span>
                        </template>
                        <!-- 遍历有子路由的菜单项 -->
                        <template v-for="submenu in menu.menus">
                            <el-sub-menu
                                v-if="submenu.menus"
                                :index="submenu.label"
                                :key="submenu.menuid"
                               > 
                            <!-- v-permiss="item.permiss" -->
                                <template #title>{{ submenu.label }}</template>
                                <el-menu-item v-for="(threemenu, i) in submenu.menus" :key="i" :index="threemenu.label" @click="handleJump(threemenu.name)">
                                    {{ threemenu.label }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="submenu.label" @click="handleJump(submenu.name)" >
                                <!-- v-permiss="item.permiss" -->
                                {{ submenu.label }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="menu.label" :key="menu.menuid" @click="handleJump(menu.name)"> 
                        <!-- v-permiss="item.permiss" -->
                        <el-icon>
                            <component :is="menu.icon"></component>
                        </el-icon>
                        <template #title>{{ menu.label }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
         
<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
import { useCollapseStore } from '../store/collapse';


//折叠
const CollapseStore = useCollapseStore();

const menus = ref([]);

// router跳转
const router = useRouter();
const handleJump = (name) => {
    console.log("test")
    router.push(
        name
    )
}
//获取数据
const getMenuData = () => {
    menus.value = [
    {
            menuid: 1,
            icon:'HomeFilled',
            label: '首页',
            name:'homepage',
            menus:null,
    },
        {
            menuid: 11,
            icon: 'Setting',
            label: '工作管理',
            menus: [
                {
                    menuid: 12,
                    icon: 'User',
                    label: '入门登记',
                    name: 'entry',
                },
                {
                    menuid: 13,
                    icon: 'Avatar',
                    label: '扦样管理',
                    name: 'sampling',
                },
                {
                    menuid: 14,
                    icon: 'Avatar',
                    label: '质检管理',
                    name: 'QualityManage',
                },
                {
                    menuid: 15,
                    icon: '',
                    label: '仓内质检',
                    name: 'HouseInspection',
                    menus: [
                        {
                            menuid: 16,
                            icon: '',
                            label: '取样管理',
                            name: 'SampleManage',
                        },
                        {
                            menuid: 17,
                            icon: '',
                            label: '检验管理',
                            name: 'CheckManage',
                        }
                    ]
                }
            ]
        },
        {
            menuid: 21,
            icon: 'Notification',
            label: '基础信息',
            menus: [
                {
                    menuid: 22,
                    icon: 'Connection',
                    label: '扦样机配置',
                    name: 'SampleConfig',
                },
                {
                    menuid: 23,
                    icon: 'Connection',
                    label: '质检设备配置',
                    name: 'QualityConfig',
                    
                },
                {
                    menuid: 24,
                    icon: 'Connection',
                    label: '粮食信息配置',
                    name: 'GranaryConfig',
                    
                },
                {
                    menuid: 25,
                    icon: 'Connection',
                    label: '仓库管理',
                    name: 'HouseManage',
                    
                },
                {
                    menuid: 26,
                    icon: 'Connection',
                    label: '供应商管理',
                    name: 'SupplierManage',
                    
                },
                {
                    menuid: 27,
                    icon: 'Connection',
                    label: '摄像头配置',
                    name: 'CameraConfig',
                    
                },
            ]
        },
        {
            menuid: 31,
            icon: 'Setting',
            label: '个人中心',
            name:'PersonHome'
        },
        {
            menuid: 41,
            icon: 'Notification',
            label: '系统管理',
            menus: [
                {
                    menuid: 42,
                    icon: 'Connection',
                    label: '用户管理',
                    name: 'UsersManage',
                },
                {
                    menuid: 43,
                    icon: 'Connection',
                    label: '权限管理',
                    name: 'PermissManage',
                },
                {
                    menuid: 44,
                    icon: 'Connection',
                    label: '操作日志',
                    name: 'OperationLog',
                },
                {
                    menuid: 45,
                    icon: 'Connection',
                    label: '系统日志',
                    name: 'SystemLog',

                },
            ]
        },
    ];
}



onMounted(() => {
    getMenuData();
})


</script>

<style scoped lang="less">
.logobox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5.75rem;
    margin: 0;
    text-align: center;
    line-height: 2.5625rem;
    color: #FBFAFA;
    font-family: SourceHanSansSC-regular;
    font-size: .875rem;
}

.title{
    display: flex;
    text-align: center;
    justify-content: center;
    line-height: 5.75rem;
    font-size: 1.3vw;
}

img {
    width: 2rem;
    height: 2rem;
}

.el-menu {
    border: 0rem;
    height: 100vh;
    overflow-x: hidden;
    // overflow-y: hidden;
    background-color:rgba(33,45,62,1);
    
}
.el-menu-item{
	background:rgba(33,45,62,1)!important;
}
.el-sub-menu{
    background:rgba(33,45,62,1)!important;
}
</style>