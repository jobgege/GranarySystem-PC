<script setup>
import { ref } from 'vue'

const formModel = ref({
    userId: '',
    password: ''
})
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
                <el-form class="inf-form" ref="form" :model="formModel">
                    <el-form-item>
                        <!-- 为啥不写两遍会有蓝色的背景框？ -->
                        <el-input class="inf-form-inpt inf-form-id"></el-input>
                        <el-input class="inf-form-inpt inf-form-id" placeholder="请输入您的工号"
                            v-model="formModel.userId"></el-input>
                    </el-form-item>
                    <el-form-item class="">
                        <el-input class="inf-form-inpt inf-form-psd" type="password"></el-input>
                        <el-input class="inf-form-inpt inf-form-psd" placeholder="请输入密码" type="password"
                            v-model="formModel.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="loginbutton">立即登入</el-button>
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
        left: 93px;
        top: 62px;
        width: 1699px;
        height: 956px;
        background-color: rgba(229, 229, 229, 1);

        .login-main-picture {
            float: left;
            width: 728px;

            height: 100%;
            background: url('src/assets/login.png') no-repeat;
        }

        .login-main-information {
            float: left;
            width: 971px;
            height: 956px;
            line-height: 20px;
            background-color: rgba(255, 255, 255, 1);
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            text-align: center;
            font-family: Roboto;

            .inf-h1 {
                position: absolute;
                top: 109px;
                left: 811px;
                width: 192px;
                height: 41px;
                line-height: 29px;
                color: rgba(33, 84, 118, 1);
                font-size: 48px;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .inf-h2 {
                position: absolute;
                top: 209px;
                left: 811px;
                width: 288px;
                height: 40px;
                line-height: 29px;
                color: rgba(0, 0, 0, 1);
                font-size: 36px;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .text-id {
                position: absolute;
                top: 324px;
                left: 811px;
                width: 84px;
                height: 29px;
                line-height: 29px;
                color: rgba(0, 0, 0, 1);
                font-size: 28px;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .text-psd {
                position: absolute;
                top: 407px;
                left: 811px;
                width: 84px;
                height: 29px;
                line-height: 29px;
                color: rgba(0, 0, 0, 1);
                font-size: 28px;
                text-align: left;
                font-family: SourceHanSansSC-bold;
            }

            .text-check {
                position: absolute;
                top: 692px;
                left: 851px;
                width: 80.78px;
                height: 29.49px;
                line-height: 29px;
                color: rgba(0, 0, 0, 1);
                font-size: 20px;
                text-align: left;
                font-family: SourceHanSansSC-regular;
            }

            .inf-form {
                position: relative;
                background-color: pink;

                .inf-form-id {
                    position: absolute;
                    left: 167px;
                    top: 317px;
                }

                .inf-form-psd {
                    position: absolute;
                    left: 167px;
                    top: 407px;
                }

                .inf-form-inpt {
                    width: 470px;
                    height: 41px;
                    line-height: 29px;
                    color: rgba(136, 136, 136, 1);
                    font-size: 20px;
                    text-align: left;
                    font-family: Microsoft Yahei;
                }

                .loginbutton {
                    position: absolute;
                    top: 543px;
                    left: 267px;
                    width: 268px;
                    height: 40px;
                    line-height: 23px;
                    border-radius: 10px;
                    background-color: rgba(33, 84, 118, 1);
                    color: rgba(255, 255, 255, 1);
                    font-size: 16px;
                    text-align: center;
                    font-family: Microsoft Yahei;
                }

                .rememberpsd {
                    position: absolute;
                    left: 100px;
                    top: 683px;

                    .checkbox {
                        zoom: 155%
                    }
                }

            }
        }
    }

    .login-bg-left {
        position: absolute;
        width: 525px;
        height: 1080px;
        background-color: rgba(33, 84, 118, 1);
    }

    .login-bg-right {
        position: absolute;
        left: 525px;
        width: 1395px;
        height: 1080px;
        background-color: rgba(64, 149, 229, 0.33);
    }

    .el-form-item {
        margin-bottom: 0px;
    }



}</style>
