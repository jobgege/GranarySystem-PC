<script setup>
import { ref } from 'vue'
const sampleNumberValue = ref('')
const sampleTimeValue = ref('')
const operatorValue = ref('')
const tableData = [
  {
    serialNumber: '1',
    sampleBatchNumber: 'QY232231030',
    sampleMachine: '1号机',
    grainVariety: '品种名',
    sampleTime: '2021-03-10 11:00',
    sampleWeight: '1000kg',
    operator: 'XXX',
  },
  {
    serialNumber: '2',
    sampleBatchNumber: 'QY232231030',
    sampleMachine: '1号机',
    grainVariety: '品种名',
    sampleTime: '2021-03-10 11:00',
    sampleWeight: '1000kg',
    operator: 'XXX',
  },
  {
    serialNumber: '3',
    sampleBatchNumber: 'QY232231030',
    sampleMachine: '1号机',
    grainVariety: '品种名',
    sampleTime: '2021-03-10 11:00',
    sampleWeight: '1000kg',
    operator: 'XXX',
  },
]
</script>

<template>
    <!-- 顶部输入查询框、功能按钮 -->
    <div class="head-inp-SampleManagement">
        <!-- 左边查询框 -->
        <div class="sampleNumber">
            扦样编号：<el-input v-model="sampleNumberValue" style="width: 14.0625vw;height: 2.1354vw;" placeholder="请输入入库编号" />
        </div>
        <div class="sampleTime">
            扦样时间：
            <el-date-picker
               v-model="sampleTimeValue"
               type="datetime"
               placeholder="yyyy/mm/日 --:--"
               style="width: 9.1146vw;height: 1.5625vw;"
            />
        </div>
        <div class="operator">
            操作人员：<el-input v-model="operatorValue" style="width: 14.0625vw;height: 2.1354vw;" placeholder="请输入登记人员姓名" />
        </div>
        <!-- 右边三个功能-可复用 -->
        <div class="function-class">
          <el-button class="search" color="#1890FF"><el-icon><Search /></el-icon>搜索</el-button>
          <el-button class="export" color="#9A9A9A"><el-icon><Download /></el-icon>导出</el-button>
          <el-button class="delete" color="#FB211C">批量删除</el-button>
        </div>
    </div>
    <!-- 顶部新建记录-->
    <div class="head-function-SampleManagement">
        <!-- 左边新建登记 -->
        <div class="new-registration">
           <el-button class="new-registration-btn" :icon="Plus" color="#72CE60" ><el-icon><Plus /></el-icon>&nbsp;新建记录</el-button> 
        </div>
    </div>
    <!-- 中间表单部分 -->
    <div class="main-form">
        <el-table 
        :data="tableData" stripe border 
        @selection-change="handleSelectionChange"
        max-height="647"
        style="width: 100%">
            <el-table-column class="selection" type="selection" align='center' min-width="6"/>
            <el-table-column class="serialNumber" prop="serialNumber" label="序号" align='center' min-width="5"/>
            <el-table-column class="sampleBatchNumber" prop="sampleBatchNumber" label="扦样批次编号" align='center' min-width="11"/>
            <el-table-column class="sampleMachine" prop="sampleMachine" label="扦样机" align='center' min-width="8"/>
            <el-table-column class="grainVariety" prop="grainVariety" label="粮食品种" align='center' min-width="8"/>
            <el-table-column class="sampleTime" prop="sampleTime" label="扦样时间" align='center' min-width="12"/>
            <el-table-column class="sampleWeight" prop="sampleWeight" label="样本重量" align='center' min-width="10"/>
            <el-table-column class="operator" prop="operator" label="操作人员" align='center' min-width="10"/>
            <el-table-column class="operation" label="操作" align='center' min-width="30">
                <template #default="scope">
                  <el-button size="small" color="#1890FF">查看监控视频</el-button>&nbsp;&nbsp;
                  <el-button size="small" color="#6C6C6C">查看详细信息</el-button>&nbsp;&nbsp;
                  <el-button size="small" color="#FF221C">×删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <!-- 底部分页 -->
    <div class="bottom-pagination">
        <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
</template>

  
<style scoped >
.head-inp-SampleManagement{
    width: 100%;
    height: 3.3333vw;
    .sampleNumber{
        float: left;
        margin: 1.0938vw 0 0 2.4688vw;
    }
    .sampleTime{
        float: left;
        margin: 1.4063vw 0 0 3.8021vw;
    }
    .operator{
        float: left;
        margin: 1.0938vw 0 0 4.4792vw;
    }
    .function-class{
        float: left;
        margin: 1.3542vw 0 0 2.5833vw;
        .search{
            float: left;
            width: 4.0104vw;
            height: 1.9792vw;
            color: #fff;
            font-size: .8333vw;
        }
        .export{
            float: left;
            width: 4.0104vw;
            height: 1.9792vw;
            color: #fff;
            font-size: .8333vw;
        }
        .delete{
            float: left;
            width: 4.1667vw;
            height: 1.9792vw;
            color: #fff;
            font-size: .8333vw;
        }
    }
}
.head-function-SampleManagement{
    width: 100%;
    height: 5.5208vw;
    .new-registration{
        float: left;
        margin: 1.4583vw 0 0 2.5521vw;
        .new-registration-btn{
            width: 6.5104vw;
            height: 2.6042vw;
            color:#fff;
            font-size: 1.0417vw;
        }
    }
}
.main-form{
    width: 79.7917vw;
    margin-left: 2.2917vw;
}
.bottom-pagination{
    margin: 2.3958vw 0 0 26vw;
}
</style>