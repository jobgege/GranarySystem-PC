<template>
    <el-card class="father">
            <h4>我的信息</h4>
        <div class="card">
            <!-- 用户头像 -->
            <el-avatar style="width: 5.2vw;height:5.2vw;" :src="user.imgUrl"  />
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
                <span class='link' @click="dialogVisible = true">
                    修改密码
                </span>
            </el-card>
        </div>  
    </el-card> 
    <!-- v-show="ChangeOpen" -->
    <el-dialog
    v-model="dialogVisible"
    title="修改密码"
    width="34vw"
    height="41.14vh"
    :before-close="handleClose"
  >
  <!-- 内嵌表单 -->
    <CgPassFrom class="pass"></CgPassFrom>
    </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
import {  useRouter } from 'vue-router';
import CgPassFrom from './ChangePass.vue'
const router = useRouter();

const user = reactive({
    name: '王小五',
    username: '',
    password: '11111111',
    worknumber:'111111111',
    imgUrl:''
})
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done) => {
  ElMessageBox.confirm('取消修改密码吗?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
<style scoped lang="less">
    .el-card.father{
        //注意其它组件也要做同样的定位处理，直接复用的卡片元素
        position: relative;
        top: 1.25rem;
        left:3.75vw;
        width: 78vw;
        border-radius: .5rem;
        background-color: rgba(255,255,255,1);
        color: rgba(16,16,16,1);
        box-shadow: 0rem .125rem .375rem 0rem rgba(0,0,0,0.4);
        font-family: Roboto;
        border: .0625rem solid rgba(255,254,254,1);
    }
    h4{
        //标题:个人信息
        height: 29.003px;
        line-height: 29.003px;
        color: rgb(16,16,16);
        font-size: 1.041vw;
        font-family: SourceHanSansSC-bold;
    }
    .card{
        //内部div的样式
        display:flex ;
        align-items: center;
        justify-content: space-between;
        height: 11.68vh;
    }
    .son{
        //内部卡片的样式，flex布局
        height:4.3vh;
        width: 21.2vw;
        display:flex ;
        align-items: center;
        justify-content: space-between
    }
    // @media screen and (max-width: 1600)
    // {
    //     .son{
    //     height: 2.9375rem;
    //     width: 12rem;
    // }
    // }
    span{
        //文字样式
        margin: 1.333vw 0;
        font-size: 0.833vw;
    }
    .link{
        margin-left:1.875rem ;
        width: 8.533vw;
        height: 3.867vw;
        line-height: 3.867vw;
        color: rgba(15,64,245,1);
        text-align: left;
        font-family: SourceHanSansSC-regular;
        cursor: pointer;
    }
    .pass{
        z-index: 10!important;
        margin: auto;
    }
     /deep/ .el-dialog__title{
        width: 7rem;
        height: 2.56rem;
        line-height: 2.56rem;
        color: rgba(64,149,229,1);
        font-size: 1.45vw;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
</style>