<template>
    <div>
        <el-card class="father">
                <h4>我的信息</h4>
            <div class="card">
                <!-- 用户头像 -->
                <el-avatar :size="80" :src="user.imgUrl"  />
                <el-card class="son">
                    <span>
                        姓名
                    </span>
                    <span>
                        {{user.name}}
                    </span>
                </el-card>
                <el-card class="son" >
                    <span>
                        工号
                    </span>
                    <span>
                        {{user.worknumber}}
                    </span>
                    <span class='link'>
                        修改工号
                    </span>
                </el-card>
                <el-card class="son">
                    <span>
                        密码
                    </span>
                    <span>
                        {{user.password}}
                    </span>
                    <span class='link'>
                        修改密码
                    </span>
                </el-card>
            </div>
            
        </el-card>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import {  useRouter } from 'vue-router';
const router = useRouter();


const user = reactive({
    name: '王小五',
    username: '',
    password: '11111111',
    worknumber:'111111111',
    imgUrl:''
})
</script>
<style scoped lang="less">
    .el-card.father{
        margin: 1.875rem ;
        top: 1.25rem;
        position: relative;
        // width: 75vw;
        height: 11.25rem;
        border-radius: .5rem;
        background-color: rgba(255,255,255,1);
        color: rgba(16,16,16,1);
        font-size: .875rem;
        box-shadow: 0rem .125rem .375rem 0rem rgba(0,0,0,0.4);
        font-family: Roboto;
        border: .0625rem solid rgba(255,254,254,1);
    }
    h4{
        width: 5rem;
        height: 1.8125rem;
        line-height: 1.8125rem;
        color: rgb(16,16,16);
        font-size: 1.25rem;
        font-family: SourceHanSansSC-bold;
    }
    .card{
        margin: 1.25rem 1.25rem;
        display:flex ;
        align-items: center;
        justify-content: space-between
    }
    .son{
        height: 2.9375rem;
        width: 22rem;
        display:flex ;
        align-items: center;
    }
    @media screen and (max-width: 1600)
    {
        .son{
        height: 2.9375rem;
        width: 15rem;
    }
    }
    span{
        margin: .625rem 0;
    }
    .link{
        margin-left:1.875rem ;
        width: 64px;
        height: 29px;
        line-height: 29px;
        color: rgba(15,64,245,1);
        font-size: 16px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
</style>