<template>
    <ManageAbort></ManageAbort>
    <div class="bottom">
       <!-- 最好封装成组件 -->
       <el-card class="BusyMachine">
          <h4>运行设备</h4>
          <el-card class="son" v-for="(item,index) in tableData">
             <!-- 到时候根据数据遍历生成son属性名的el-card -->
                 <span>
                    {{ item.Machine }}
                 </span>
                 <span>
                     {{ item.Status }}
                 </span>
             </el-card>
       </el-card>
       <el-card class="MachineTest">
          <h4>本月设备检测记录</h4>
          <el-table :data="tableData" border class="table" header-cell-class-name="table-header">
                <el-table-column prop="Machine" label="设备"></el-table-column>
                <el-table-column prop="Status" label="检测状态"></el-table-column>
                <el-table-column prop="Time" label="检测时间"></el-table-column>
                <el-table-column prop="Logger" label="登记人员"></el-table-column>
            </el-table>
       </el-card>
       <el-card class="MachineFault">
          <h4>设备报错</h4>
            <el-table></el-table>
       </el-card>
    </div>
 </template>
 
 <script setup>
 import { onMounted } from 'vue';
 import ManageAbort from '../components/MainPage/ManageAbort.vue';
 const tableData = ref([]);
 const getData = () => {
    tableData.value = [
        {
         Machine: '一号扦样机',
         Status: '正常',
         Time: '2024.03.01 09:13:01',
         Logger: '小王',
        },
        {
         Machine: '一号扦样机',
         Status: '正常',
         Time: '2024.03.01 09:13:01',
         Logger: '小王',
        },
        {
         Machine: '一号扦样机',
         Status: '正常',
         Time: '2024.03.01 09:13:01',
         Logger: '小王',
        },
        {
         Machine: '一号扦样机',
         Status: '危险',
         Time: '2024.03.01 09:13:01',
         Logger: '小王',
        },
    ];
};
 
onMounted(()=>{
   getData();
})

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