<script setup>
import { ref } from 'vue'
const entrybatchevalue = ref('')
const entrytimevalue = ref('')
const registrantvalue = ref('')
const tableData = [
  {
    serialNumber: 'a',
    entryBatchNumber: 'a',
    grainVariety: 'a',
    entryTime: 'a',
    grainWeight: 'a',
    registrant: 'a',
  },
  {
    serialNumber: 'b',
    entryBatchNumber: 'b',
    grainVariety: 'b',
    entryTime: 'b',
    grainWeight: 'b',
    registrant: 'b',
  },
  {
    serialNumber: 'c',
    entryBatchNumber: 'c',
    grainVariety: 'c',
    entryTime: 'c',
    grainWeight: 'c',
    registrant: 'c',
  }
]
</script>

<template>
    <!-- 顶部输入查询框 -->
    <div class="head-inp">
        <div class="entrybatch">
            入门批次：<el-input v-model="entrybatchevalue" style="width: 14.0625vw;height: 2.1354vw;" placeholder="请输入入库编号" />
        </div>
        <div class="entrytime">
            入门时间：
            <el-date-picker
            v-model="entrytimevalue"
            type="datetimerange"
            range-separator="到"
            start-placeholder="yyyy/mm/日 --:--"
            end-placeholder="yyyy/mm/日 --:--"
            style="width: 19.9479vw;height: 1.5625vw;"
            />
        </div>
        <div class="registrant">
            登记人员：<el-input v-model="registrantvalue" style="width: 14.0625vw;height: 2.1354vw;" placeholder="请输入登记人员姓名" />
        </div>
    </div>
    <!-- 顶部新建、查询功能按钮 -->
    <div class="head-function">
        <!-- 左边新建登记 -->
        <div class="new-registration">
           <el-button class="new-registration-btn" :icon="Plus" color="#72CE60" ><el-icon><Plus /></el-icon>&nbsp;新建登记</el-button> 
        </div>
        <!-- 右边三个功能-可复用 -->
        <div class="function-class">
          <el-button class="search" color="#1890FF"><el-icon><Search /></el-icon>搜索</el-button>
          <el-button class="export" color="#9A9A9A"><el-icon><Download /></el-icon>导出</el-button>
          <el-button class="delete" color="#FB211C">批量删除</el-button>
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
            <el-table-column class="entryBatchNumber" prop="entryBatchNumber" label="入门批次编号" align='center' min-width="12"/>
            <el-table-column class="grainVariety" prop="grainVariety" label="粮食品种" align='center' min-width="10"/>
            <el-table-column class="entryTime" prop="entryTime" label="入门时间" align='center' min-width="12"/>
            <el-table-column class="grainWeight" prop="grainWeight" label="粮食重量" align='center' min-width="10"/>
            <el-table-column class="registrant" prop="registrant" label="登记人员" align='center' min-width="11"/>
            <el-table-column class="operation" label="操作" align='center' min-width="34">
                <template #default="scope">
                  <el-button size="small" color="#1890FF">查看入门监控</el-button>&nbsp;
                  <el-button size="small" color="#6C6C6C">查看详细信息</el-button>&nbsp;
                  <el-button size="small" color="#0F40F5">打印</el-button>&nbsp;
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
.head-inp{
    width: 100%;
    height: 3.4896vw;
    .entrybatch{
        float: left;
        margin: 1.3542vw 0 0 2.5521vw;
    }
    .entrytime{
        float: left;
        margin: 1.6146vw 0 0 7.2396vw;
    }
    .registrant{
        float: left;
        margin: 1.3542vw 0 0 7.2396vw;
    }
}
.head-function{
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
    .function-class{
        float: left;
        margin: 1.9271vw 0 0 57.6563vw;
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
.main-form{
    width: 79.7917vw;
    margin-left: 2.2917vw;
}
.bottom-pagination{
    margin: 3.5938vw 0 0 26vw;
}
</style>