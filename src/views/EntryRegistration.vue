<script setup lang="ts">
import { reactive,ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const entrybatchevalue = ref('')
const entrytimevalue = ref('')
const registrantvalue = ref('')
const centerDialogVisible = ref(false)
const detailDialogVisible = ref(false)

const tableData = [
  {
    serialNumber: '1',
    entryBatchNumber: 'RK—2024022800001',
    grainVariety: '品种名',
    entryTime: '2021-03-10 11:00',
    grainWeight: '1000kg',
    registrant: 'XXX',
  },
  {
    serialNumber: '2',
    entryBatchNumber: 'RK—2024022800002',
    grainVariety: '品种名',
    entryTime: '2021-03-10 11:00',
    grainWeight: '1000kg',
    registrant: 'XXX',
  },
  {
    serialNumber: '3',
    entryBatchNumber: 'RK—2024022800003',
    grainVariety: '品种名',
    entryTime: '2021-03-10 11:00',
    grainWeight: '1000kg',
    registrant: 'XXX',
  }
]

// 新建登记表单内绑定的信息
interface NewEntryRegistrarionForm {
  grainNumber: string,
  grainName: string,
  grainProperty: string,
  grainWeigth: string,
  unit: string,
  registrant: string,
  warehouse: string,
  driver: string,
  license: string,
  phoneNumber: string,
  supplier: string,
  resulRemark: string,
}
const newEntryRegistrarionForm = reactive<NewEntryRegistrarionForm>({
  grainNumber: '',// 粮食编号-输入
  grainName: '',// 粮食名称-选择
  grainProperty: '',// 粮食性质-选择
  grainWeigth: '',// 粮食重量-输入
  unit: '',// 计量单位-选择
  registrant: '',// 登记人员-输入
  warehouse: '',// 仓库编号-选择
  driver: '',// 运输司机-输入
  license: '',// 车牌-选择
  phoneNumber: '',// 联系方式-输入
  supplier: '',// 供应商-输入
  resulRemark: '',// 结果备注-输入
})
const grainNameOption = [
  {
    value: '1',
    label: '粮食名称1',
  },
  {
    value: '2',
    label: '粮食名称2',
  },
  {
    value: '3',
    label: '粮食名称3',
  },
]
const grainPropertyOption = [
  {
    value: '1',
    label: '粮食性质1',
  },
  {
    value: '2',
    label: '粮食性质2',
  },
  {
    value: '3',
    label: '粮食性质3',
  },
]
const unitOption = [
  {
    value: '1',
    label: '单位1',
  },
  {
    value: '2',
    label: '单位2',
  },
  {
    value: '3',
    label: '单位3',
  },
]
const warehouseOption = [
  {
    value: '1',
    label: '仓库1',
  },
  {
    value: '2',
    label: '仓库2',
  },
  {
    value: '3',
    label: '仓库3',
  },
]

// 表单校验规则
const formSize = ref('default')
const newEntryRegistrarionFormRef = ref<FormInstance>()
const rules = reactive<FormRules<NewEntryRegistrarionForm>>({
  grainNumber: [
    { required: true, message: '', trigger: 'blur' }
  ],
  grainName: [
    {
      required: true,
      message: '',
      trigger: 'change',
    },
  ],
  grainProperty: [
    {
      required: true,
      message: '',
      trigger: 'change',
    },
  ],
  grainWeigth: [
    { required: true, message: '', trigger: 'blur' }
  ],
  unit: [
    {
      required: true,
      message: '',
      trigger: 'change',
    },
  ],
  registrant: [
    { required: true, message: '', trigger: 'blur' }
  ],
  warehouse: [
    {
      required: true,
      message: '',
      trigger: 'change',
    },
  ],
  driver: [
    { required: true, message: '', trigger: 'blur' }
  ],
  license: [
    { required: true, message: '', trigger: 'blur' }
  ],
  phoneNumber: [
    { required: true, message: '', trigger: 'blur' }
  ],
  supplier: [
    { required: true, message: '', trigger: 'blur' }
  ],
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      centerDialogVisible.value = false
      resetForm(newEntryRegistrarionFormRef.value)
      // TODO：表单成功提交后请求后端
    } else {
      console.log('error submit!', fields)
      
    }
  })
}
// 点右上角关闭/表单提交成功时并重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
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
           <el-button @click="centerDialogVisible = true" class="new-registration-btn" :icon="Plus" color="#72CE60" ><el-icon><Plus /></el-icon>&nbsp;新建登记</el-button> 
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
            <el-table-column class="selection" type="selection" align='center' min-width="5"/>
            <el-table-column class="serialNumber" prop="serialNumber" label="序号" align='center' min-width="5"/>
            <el-table-column class="entryBatchNumber" prop="entryBatchNumber" label="入门批次编号" align='center' min-width="15"/>
            <el-table-column class="grainVariety" prop="grainVariety" label="粮食品种" align='center' min-width="10"/>
            <el-table-column class="entryTime" prop="entryTime" label="入门时间" align='center' min-width="12"/>
            <el-table-column class="grainWeight" prop="grainWeight" label="粮食重量" align='center' min-width="10"/>
            <el-table-column class="registrant" prop="registrant" label="登记人员" align='center' min-width="9"/>
            <el-table-column class="operation" label="操作" align='center' min-width="34">
                <template #default="scope">
                  <el-button size="small" color="#1890FF">查看入门监控</el-button>&nbsp;
                  <el-button size="small" color="#6C6C6C" @click="detailDialogVisible = true">查看详细信息</el-button>&nbsp;
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

    <!-- ----------------弹出新建登记页面---------------- -->
    <el-dialog
    v-model="centerDialogVisible"
    align-center
    center
    width="73.0208vw"
    >
      <!-- a.自定义顶部样式 -->
      <div class="my-header-new">新建入门登记</div>
      <el-icon color="#fff" size="32" class="close-form" @click="resetForm(newEntryRegistrarionFormRef);centerDialogVisible = false"><CircleClose /></el-icon>
      <!-- b.中间表单部分 -->
      <div class="new-entry-registrarion-form">
        <el-form
        ref="newEntryRegistrarionFormRef"
        :model="newEntryRegistrarionForm" 
        label-width="auto" 
        :inline="true"
        :rules="rules"
        >
          <el-form-item label="粮食编号：" prop="grainNumber">
            <el-input v-model="newEntryRegistrarionForm.grainNumber" style="width: 10.4167vw;height: 1.5625vw" clearable placeholder="请输入粮食编号"/>
          </el-form-item><br>
          <el-form-item label="粮食名称：" prop="grainName">
            <el-select v-model="newEntryRegistrarionForm.grainName" placeholder="请选择" style="width: 10.4167vw;height: 1.5625vw">
              <el-option
                v-for="item in grainNameOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item><br>
          <el-form-item label="粮食性质：" prop="grainProperty">
            <el-select v-model="newEntryRegistrarionForm.grainProperty" placeholder="请选择" style="width: 10.4167vw;height: 1.5625vw">
              <el-option
                v-for="item in grainPropertyOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item><br>
          <el-form-item label="粮食重量：" prop="grainWeigth">
            <el-input v-model="newEntryRegistrarionForm.grainWeigth" style="width: 10.4167vw;height: 1.5625vw" clearable placeholder="请输入"/>
          </el-form-item>
          <el-form-item label="计量单位：" prop="unit">
            <el-select v-model="newEntryRegistrarionForm.unit" placeholder="请选择单位" style="width: 10.4167vw;height: 1.5625vw">
              <el-option
                v-for="item in unitOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item><br>
          <el-form-item label="登记人员：" prop="registrant">
            <el-input v-model="newEntryRegistrarionForm.registrant" style="width: 10.4167vw;height: 1.5625vw" clearable placeholder="请输入人员姓名"/>
          </el-form-item><br>
          <el-form-item label="仓库编号：" prop="warehouse">
            <el-select v-model="newEntryRegistrarionForm.warehouse" placeholder="请选择仓库" style="width: 10.4167vw;height: 1.5625vw">
              <el-option
                v-for="item in warehouseOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item><br>
          <el-form-item label="运货司机：" prop="driver">
            <el-input v-model="newEntryRegistrarionForm.driver" style="width: 10.4167vw;height: 1.5625vw" clearable placeholder="请输入"/>
          </el-form-item>
          <el-form-item label="车牌：" prop="license">
            <el-input v-model="newEntryRegistrarionForm.license" style="width: 10.4167vw;height: 1.5625vw" clearable placeholder="请输入"/>
          </el-form-item>
          <el-form-item label="联系方式：" prop="phoneNumber">
            <el-input v-model="newEntryRegistrarionForm.phoneNumber" style="width: 10.4167vw;height: 1.5625vw" clearable placeholder="+86"/>
          </el-form-item><br>
          <el-form-item label="供应商：" prop="supplier">
            <el-input v-model="newEntryRegistrarionForm.supplier" style="width: 10.4167vw;height: 1.5625vw" clearable placeholder="请输入供应商"/>
          </el-form-item><br>
          <span class="add-argument">+ 添加参数</span><br><br>
          <el-form-item label="*结果备注：">
            <el-input
              v-model="newEntryRegistrarionForm.resultRemark"
              style="width: 24vw;"
              type="textarea"
              placeholder="请输入备注，不超过200字"
              maxlength="200"
              show-word-limit
              rows="2"
              resize="none"
            />
          </el-form-item><br>
          <el-form-item label="*附件：">
            <el-button>点击上传附件</el-button>
          </el-form-item><br>
          <el-form-item label="监控视频：">
          </el-form-item>
          <div class="monitoring">
              <div class="monitoring-one"></div>
              <div class="monitoring-two"></div>
          </div>
        </el-form>
      </div>
      <!-- c.底部取消和提交 -->
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitForm(newEntryRegistrarionFormRef);" color="#0F40F5">
            确认上传
          </el-button>
        </div>
      </template>
    </el-dialog>

    <!-- ----------------弹出详细信息页面---------------- -->
    <el-dialog
      v-model="detailDialogVisible"
      width="40.8854vw"
    >
      <!-- a.自定义顶部样式 -->
      <div class="my-header-detail">入库信息</div>
      <el-icon color="#101010" size="32" class="close-detail" @click="detailDialogVisible = false"><CircleClose /></el-icon>
      <!-- b.中间详细信息 -->
      <div class="detail-main">111</div>
    </el-dialog>

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
/* 弹出新建登记页面 */
.my-header-new{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3.4375vw;
    background-color: #34B5F2;
    font-size: 1.4583vw;
    text-align: center;
    line-height: 3.4375vw;
    color: #fff;
}
.close-form{
    position: absolute;
    right: .6771vw;
    top: .7813vw;
}
.new-entry-registrarion-form{
    margin: 3.125vw 0 0 18vw;
}
.add-argument{
    font-size: .8333vw;
    color: #0F40F5;
}
.add-argument:hover{
    cursor: pointer;
}
.monitoring-one{
    display: inline-block;
    margin: -.8vw 0 0 3.3333vw;
    width: 19.6354vw;
    height: 8.125vw;
    border: 1px solid;
    border-radius: .4vw;
}
.monitoring-two{
    display: inline-block;
    margin: -.8vw 0 0 1.25vw;
    width: 19.6354vw;
    height: 8.125vw;
    border: 1px solid;
    border-radius: .4vw;
}
/* :deep(.el-form-item__label) { 
        font-size: 16px;
    } */

/* 弹出新建登记页面 */
.my-header-detail{
  position: absolute;
  top: 41px;
  left: 0;
  width: 100%;
  height: 2.1354vw;
  font-size: 1.4583vw;
  text-align: center;
  line-height: 2.1354vw;
  color: #000;
  background-color: #fff;
}
.close-detail{
    position: absolute;
    top: 2.3438vw;
    right: 1.875vw;
}

</style>