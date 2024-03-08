<template>
   <ManageAbort></ManageAbort>
   <div class="bottom">
      <!-- 最好封装成组件 -->
      <el-card class="granaryIn">
         <h4>本月粮食入库记录</h4>
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
      <el-card class="qualityTest">
         <h4>本月质量检测记录</h4>
         <LineChart></LineChart>
      </el-card>
      <div class="right">
         <el-card class="disqualifyScale">
            <h4>累计检测不合格项比例</h4>
            <PineChart></PineChart>
         </el-card>
         <el-card class="qualityScale">
            <h4>累计质检比例</h4>
            <PineChart></PineChart>
         </el-card>
      </div>
   </div>
</template>

<script setup>
import ManageAbort from '../components/MainPage/ManageAbort.vue';
import LineChart from '../components/Echarts/LineCharts/index.vue'
import PineChart from '../components/Echarts/PineCharts/index.vue'
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
   .granaryIn{
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
   .qualityTest{
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
   .right{
      width: 17.60vw;
      height: 58.19vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .disqualifyScale{
         height:27.89vh;
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
      .qualityScale{
      height:27.89vh;
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