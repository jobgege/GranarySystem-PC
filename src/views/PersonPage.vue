<template>
    <Informa>
    </Informa>
    <el-card class="usedLog">
          <h4>本周操作记录</h4>
          <el-card class="son">
             <!-- 到时候根据数据遍历生成son属性名的el-card -->
                 <span>
                     { { index } }
                 </span>
                 <span>
                     { { 日期 } }
                 </span>
                 <span>
                     { { 质量 } }
                 </span>
             </el-card>
       </el-card>
</template>

<script setup>
import Informa from '../components/Information.vue'

</script>

<style scoped lang="less">
    h4{
        height: 29.003px;
        line-height: 29.003px;
        color: rgb(16,16,16);
        font-size:1.041vw;
        font-family: SourceHanSansSC-bold;
        position: relative;
        text-align: left;
    }
    .usedLog{
        height: 58.19vh;
        position: relative;
        top: 4.35vh;
        left:3.75vw;
        width: 78vw;
        border-radius: .5rem;
        background-color: rgba(255,255,255,1);
        color: rgba(16,16,16,1);
        box-shadow: 0rem .125rem .375rem 0rem rgba(0,0,0,0.4);
        font-family: Roboto;
        border: .0625rem solid rgba(255,254,254,1);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .son{
       width: 14.05vw;
       height: 4.44vh;
       background-color: rgba(5,193,116,0.24);
       color: rgba(16,16,16,1);
       font-size: 0.73vw;
       display:flex ;
       align-items: center;
       justify-content: space-between;
       font-family: Roboto;
       border: 0.06rem solid rgba(187,187,187,1);
       margin-bottom: 1vh;
       span{
      color: rgba(16,16,16,1);
      font-size: 0.88rem;
      text-align: left;
       }
    }
</style>