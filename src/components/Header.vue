<template>
    <div class="header">
        <div class="header-left">
            <el-icon style="cursor: pointer" class="left" @click="handleCollapse">
                <!-- 使用：is懂得动态绑定组件的类型 -->
                <component :is="CollapseStore.isCollapse?'Expand':'Fold'"> </component>
            </el-icon>
        </div>
        <div class="header-right">
            <el-dropdown trigger="click">
                <div>
                    <el-avatar :size="40" :src="user.imgUrl" style="margin-right: 5px;" />
                    <el-icon>
                        <CaretBottom />
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleSetting"><el-icon>
                                <Setting />
                            </el-icon>设置</el-dropdown-item>
                        <el-dropdown-item @click="handleQuit"><el-icon>
                                <SwitchButton />
                            </el-icon>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useCollapseStore } from '../store/collapse';
import {  useRouter } from 'vue-router';
const router = useRouter();

//折叠
const CollapseStore = useCollapseStore();

const user = reactive({
    name: '',
    username: '',
    password: '',
    // imgUrl: 'https://s1mimg.oss-cn-chengdu.aliyuncs.com/img/4.jpg',
})
const handleCollapse = () => {
    CollapseStore.collapse();
};

const handleSetting = () => {

}

const handleQuit = () => {
    router.push('/login');
}
</script>

<style scoped>
.header-left {
    width: 20%;
}

.header-right {
    display: flex;
    flex-direction: row-reverse;
    width: 80%;
}

.header {
    width: 100%;
    height: 5.0625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.25rem;
    background-color: rgba(251,250,250,1);
    color: rgba(16,16,16,1);
    font-size: .875rem;
    text-align: center;
    font-family: Roboto;
}
.left{
    position: relative;
    float: left;
    font-size:30px;
}
</style>