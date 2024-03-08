<template>
    <ManageAbort></ManageAbort>
    <div class="bottom">
       <!-- 最好封装成组件 -->
       <el-card class="BusyMachine">
          <h4>运行设备</h4>
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
       <el-card class="MachineTest">
          <h4>本月设备检测记录</h4>
            <el-table></el-table>
       </el-card>
       <el-card class="MachineFault">
          <h4>设备报错</h4>
            <el-table></el-table>
       </el-card>
    </div>
 </template>
 
 <script setup>
 import ManageAbort from '../components/MainPage/ManageAbort.vue';

 


 </script>
 
 <style scoped lang="less">
    .bottom{
     position: relative;
     left:3vw;
     width: 79vw;
     height: 58.19vh;
     margin-top: 5vh;
     border-radius: 0.5rem;
     background-color: #EFEFEF 100%;
     color: rgba(16,16,16,1);
     font-family: Roboto;
     display: flex;
     flex-wrap: nowrap;
     justify-content: space-around;
    }
    h4{
       height: 29.003px;
       line-height: 29.003px;
       color: rgb(16,16,16);
       font-size:1.041vw;
       font-family: SourceHanSansSC-bold;
       position: relative;
       text-align: left;
    }
    .BusyMachine{
       width: 16.82vw;
       height: 58.19vh;
       line-height: 1.25rem;
       border-radius: 0.5rem;
       background-color: rgba(255,255,255,1);
       color: rgba(16,16,16,1);
       font-size: 0.88rem;
       text-align: center;
       box-shadow: 0rem 0.13rem 0.38rem 0rem rgba(0,0,0,0.4);
       font-family: Roboto;
       border: 0.06rem solid rgba(255,254,254,1);
    }
    .MachineTest{
       width: 43.07vw;
       height: 58.19vh;
       line-height: 1.25rem;
       border-radius: 0.5rem;
       background-color: rgba(255,255,255,1);
       color: rgba(16,16,16,1);
       font-size: 0.88rem;
       text-align: center;
       box-shadow: 0rem 0.13rem 0.38rem 0rem rgba(0,0,0,0.4);
       font-family: Roboto;
       border: 0.06rem solid rgba(255,254,254,1);
    }
    .MachineFault{
        width: 16.825vw;
       height: 58.19vh;
       line-height: 1.25rem;
       border-radius: 0.5rem;
       background-color: rgba(255,255,255,1);
       color: rgba(16,16,16,1);
       font-size: 0.88rem;
       text-align: center;
       box-shadow: 0rem 0.13rem 0.38rem 0rem rgba(0,0,0,0.4);
       font-family: Roboto;
       border: 0.06rem solid rgba(255,254,254,1);
    }
 
    .son{
       width: 14.05vw;
       height: 4.44vh;
       background-color: rgba(255,255,255,1);
       color: rgba(16,16,16,1);
       font-size: 0.73vw;
       display:flex ;
       align-items: center;
       justify-content: space-between;
       font-family: Roboto;
       border: 0.06rem solid rgba(187,187,187,1);
       
    }
 </style>