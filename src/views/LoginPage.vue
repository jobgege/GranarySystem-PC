<script setup>
import { ref } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()
// 引入滑块组件
import SlideVerify from "vue3-slide-verify"
import "vue3-slide-verify/dist/style.css"
import { useUserStore } from '../store/user'
import { onMounted } from 'vue'

// 进入页面先填入工号和密码、勾选记住密码的状态
const checkToRememberPsd = ref(false)
const userStore = useUserStore()
onMounted(()=>{
  formModel.value.userId = userStore.userId
  formModel.value.password = userStore.password
  checkToRememberPsd.value = userStore.rememberPsd
})


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
// 登录前预校验->滑块验证->请求后端->转到首页
// 1.点击登录先进行预校验，通过后显示滑块验证
const loginbutton = async () => {
  // 预校验，没输入信息不会进行滑块验证
  await form.value.validate()
  // 能改变showSlideVerify的值但是组件不显示？？最后直接修改display的值
  document.querySelector('.cover').style.display = "block"
}
// 2.验证成功后请求后端，失败显示不通过
const onSuccess=()=>{
    //TODO: 请求后端
    router.push("/") //跳转到前台首页
    ElMessage.success("登陆成功")
    // 登陆成功之后本地存储用户信息
    userStore.userId = formModel.value.userId
    // 勾选记住密码后本地存储密码,取消勾选时要清除本地存储的密码
    userStore.rememberPsd = checkToRememberPsd.value
    if (checkToRememberPsd.value === true) {
        userStore.password = formModel.value.password
    }else{
        userStore.password = ''
    }
}
const onFail=()=>{
}
const onRefresh=()=>{
}
const onAgain = () => {
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
                        <el-button class="loginbutton" @click="loginbutton">立即登入</el-button>
                    </el-form-item>
                    <el-form-item class="rememberpsd">
                        <el-checkbox class="checkbox" v-model="checkToRememberPsd"></el-checkbox>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="login-bg-left"></div>
        <div class="login-bg-right"></div>
        <!-- 滑块验证部分 CSDN：“Vue3引入滑块验证组件-2分钟搞定”-->
        <el-card class="cover">
	      <slide-verify
	          ref="block"
	          slider-text="向右滑动->"
	          accuracy=1
	          @again="onAgain"
	          @success="onSuccess"
	          @fail="onFail"
	          @refresh="onRefresh"
	        ></slide-verify>
        </el-card>
    </div>
</template>

<style lang="less" scoped>
.login-bg {
    position: relative;

    .login-main {
        position: absolute;
        z-index: 1;
        left: 4.8438vw;
        top: 3.2292vw;
        width: 88.4896vw;
        height: 49.7917vw;
        background-color: rgba(229, 229, 229, 1);

        .login-main-picture {
            float: left;
            width: 37.9167vw;
            height: 49.7917vw;
            background: url('src/assets/login.png') no-repeat;
            background-size: 100% 100%;
        }

        .login-main-information {
            float: left;
            width: 50.5729vw;
            height: 49.7917vw;
            line-height: 1.0417vw;
            background-color: rgba(255, 255, 255, 1);
            color: rgba(16, 16, 16, 1);
            font-size: .7292vw;
            text-align: center;
            font-family: Roboto;

            .inf-h1 {
                position: absolute;
                top: 5.6771vw;
                left: 42.2396vw;
                width: 10vw;
                height: 2.1354vw;
                line-height: 1.5104vw;
                color: rgba(33, 84, 118, 1);
                font-size: 2.5vw;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .inf-h2 {
                position: absolute;
                top: 10.8854vw;
                left: 42.2396vw;
                width: 15vw;
                height: 2.0833vw;
                line-height: 1.5104vw;
                color: rgba(0, 0, 0, 1);
                font-size: 1.875vw;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .text-id {
                position: absolute;
                top: 16.875vw;
                left: 42.2396vw;
                width: 4.375vw;
                height: 1.5104vw;
                line-height: 1.5104vw;
                color: rgba(0, 0, 0, 1);
                font-size: 1.4583vw;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .text-psd {
                position: absolute;
                top: 21.1979vw;
                left: 42.2396vw;
                width: 4.375vw;
                height: 1.5104vw;
                line-height: 1.5104vw;
                color: rgba(0, 0, 0, 1);
                font-size: 1.4583vw;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .text-check {
                position: absolute;
                top: 36.0417vw;
                left: 44.3229vw;
                width: 4.2073vw;
                height: 1.5359vw;
                line-height: 1.5104vw;
                color: rgba(0, 0, 0, 1);
                font-size: 1.0417vw;
                text-align: left;
                font-family: SourceHanSansSC-regular;
            }

            .inf-form {
                position: relative;
                background-color: pink;

                .inf-form-id {
                    position: absolute;
                    left: 8.6979vw;
                    top: 16.5104vw;
                }

                .inf-form-psd {
                    position: absolute;
                    left: 8.6979vw;
                    top: 21.1979vw;
                }

                .inf-form-inpt {
                    width: 24.4792vw;
                    height: 2.1354vw;
                    line-height: 1.5104vw;
                    color: rgba(136, 136, 136, 1);
                    font-size: 1.0417vw;
                    text-align: left;
                    font-family: Microsoft Yahei;
                }

                .loginbutton {
                    position: absolute;
                    top: 28.2813vw;
                    left: 13.9063vw;
                    width: 13.9583vw;
                    height: 2.0833vw;
                    line-height: 1.1979vw;
                    border-radius: .5208vw;
                    background-color: rgba(33, 84, 118, 1);
                    color: rgba(255, 255, 255, 1);
                    font-size: .8333vw;
                    text-align: center;
                    font-family: Microsoft Yahei;
                }

                .rememberpsd {
                    position: absolute;
                    left: 5.2083vw;
                    top: 35.5729vw;

                    .checkbox {
                        zoom: 135%
                    }
                }

            }
        }
    }

    .login-bg-left {
        position: absolute;
        width: 27.3438vw;
        height: 56.25vw;
        background-color: rgba(33, 84, 118, 1);
    }

    .login-bg-right {
        position: absolute;
        left: 27.3438vw;
        width: 72.6563vw;
        height: 56.25vw;
        background-color: rgba(64, 149, 229, 0.33);
    }

    .el-form-item {
        margin-bottom: 0;
    }
    :deep(.el-form-item__error) { 
        top: 25.3125vw;
        left: 18.0208vw;
        font-size: 1.0417vw;
    }

    .cover{
    display: none;
    width: fit-content;
    background-color: aliceblue;
    position: absolute;
    top: 25vw;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1000;
  }


}</style>
