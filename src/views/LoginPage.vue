<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user'

// 整个用于提交的form数据对象
const formModel = ref({
    userId: '',
    password: ''
})
const form = ref()
// 表单校验规则
const rules = {
  userId: [
    { required: true, message: '请输入信息', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入信息', trigger: 'blur' }
  ]
}
// 将用户信息存本地
const userStore = useUserStore()
userStore.setUserId(formModel.value.userId)

// 登录前预校验->请求后端->转到首页
const router = useRouter()
const login = async () => {
  await form.value.validate()// 预校验，没输入信息不会发送请求
  console.log('开始登录请求')
  router.push('/')
}
</script>

<template>
    <div class="login-bg">
        <div class="login-main">
            <!-- 左边图片 -->
            <div class="login-main-picture"></div>
            <!-- 右边登录部分 -->
            <div class="login-main-information">
                <!-- elementplus组件文字修改不动，直接定位上去！ -->
                <h1 class="inf-h1">欢迎使用</h1>
                <h2 class="inf-h2">粮食检验检测系统</h2>
                <h4 class="text-id">账号 :</h4>
                <h4 class="text-psd">密码 :</h4>
                <div class="text-check">记住密码</div>
                <!-- 收集表单信息部分 -->
                <el-form 
                class="inf-form" 
                ref="form" 
                :model="formModel" 
                :rules="rules"
                >
                    <el-form-item prop="userId">
                        <el-input 
                        class="inf-form-inpt inf-form-id" 
                        placeholder="请输入您的工号"
                        v-model="formModel.userId" 
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input 
                        class="inf-form-inpt inf-form-psd" 
                        placeholder="请输入密码" 
                        type="password"
                        v-model="formModel.password" 
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="loginbutton" @click="login">立即登入</el-button>
                    </el-form-item>
                    <el-form-item class="rememberpsd">
                        <el-checkbox class="checkbox"></el-checkbox>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="login-bg-left"></div>
        <div class="login-bg-right"></div>
    </div>
</template>

<style lang="less" scoped>
.login-bg {
    position: relative;

    .login-main {
        position: absolute;
        z-index: 1;
        left: 5.8125rem;
        top: 3.875rem;
        width: 106.1875rem;
        height: 59.75rem;
        background-color: rgba(229, 229, 229, 1);

        .login-main-picture {
            float: left;
            width: 45.5rem;

            height: 100%;
            background: url('src/assets/login.png') no-repeat;
        }

        .login-main-information {
            float: left;
            width: 60.6875rem;
            height: 59.75rem;
            line-height: 1.25rem;
            background-color: rgba(255, 255, 255, 1);
            color: rgba(16, 16, 16, 1);
            font-size: .875rem;
            text-align: center;
            font-family: Roboto;

            .inf-h1 {
                position: absolute;
                top: 6.8125rem;
                left: 50.6875rem;
                width: 12rem;
                height: 2.5625rem;
                line-height: 1.8125rem;
                color: rgba(33, 84, 118, 1);
                font-size: 3rem;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .inf-h2 {
                position: absolute;
                top: 13.0625rem;
                left: 50.6875rem;
                width: 18rem;
                height: 2.5rem;
                line-height: 1.8125rem;
                color: rgba(0, 0, 0, 1);
                font-size: 2.25rem;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .text-id {
                position: absolute;
                top: 20.25rem;
                left: 50.6875rem;
                width: 5.25rem;
                height: 1.8125rem;
                line-height: 1.8125rem;
                color: rgba(0, 0, 0, 1);
                font-size: 1.75rem;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .text-psd {
                position: absolute;
                top: 25.4375rem;
                left: 50.6875rem;
                width: 5.25rem;
                height: 1.8125rem;
                line-height: 1.8125rem;
                color: rgba(0, 0, 0, 1);
                font-size: 1.75rem;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .text-check {
                position: absolute;
                top: 43.25rem;
                left: 53.1875rem;
                width: 5.0488rem;
                height: 1.8431rem;
                line-height: 1.8125rem;
                color: rgba(0, 0, 0, 1);
                font-size: 1.25rem;
                text-align: left;
                font-family: SourceHanSansSC-regular;
            }

            .inf-form {
                position: relative;
                background-color: pink;

                .inf-form-id {
                    position: absolute;
                    left: 10.4375rem;
                    top: 19.8125rem;
                }

                .inf-form-psd {
                    position: absolute;
                    left: 10.4375rem;
                    top: 25.4375rem;
                }

                .inf-form-inpt {
                    width: 29.375rem;
                    height: 2.5625rem;
                    line-height: 1.8125rem;
                    color: rgba(136, 136, 136, 1);
                    font-size: 1.25rem;
                    text-align: left;
                    font-family: Microsoft Yahei;
                }

                .loginbutton {
                    position: absolute;
                    top: 33.9375rem;
                    left: 16.6875rem;
                    width: 16.75rem;
                    height: 2.5rem;
                    line-height: 1.4375rem;
                    border-radius: .625rem;
                    background-color: rgba(33, 84, 118, 1);
                    color: rgba(255, 255, 255, 1);
                    font-size: 1rem;
                    text-align: center;
                    font-family: Microsoft Yahei;
                }

                .rememberpsd {
                    position: absolute;
                    left: 6.25rem;
                    top: 42.6875rem;

                    .checkbox {
                        zoom: 155%
                    }
                }

            }
        }
    }

    .login-bg-left {
        position: absolute;
        width: 32.8125rem;
        height: 67.5rem;
        background-color: rgba(33, 84, 118, 1);
    }

    .login-bg-right {
        position: absolute;
        left: 32.8125rem;
        width: 87.1875rem;
        height: 67.5rem;
        background-color: rgba(64, 149, 229, 0.33);
    }

    .el-form-item {
        margin-bottom: 0;
    }
    :deep(.el-form-item__error) { 
        top: 30.375rem;
        left: 21.625rem;
        font-size: 1.25rem;
    }


}</style>
