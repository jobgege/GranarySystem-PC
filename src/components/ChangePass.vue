
<template>
    <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item label="旧密码" prop="pass">
      <el-input v-model="ruleForm.oldpass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="新密码" prop="pass">
      <el-input v-model="ruleForm.newpass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="确认新密码" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item class="button">
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >确认修改</el-button
      >

    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

// const ruleFormRef = ref()

// const checkAge = (rule, value, callback) => {
//   if (!value) {
//     return callback(new Error('Please input the age'))
//   }
//   setTimeout(() => {
//     if (!Number.isInteger(value)) {
//       callback(new Error('Please input digits'))
//     } else {
//       if (value < 18) {
//         callback(new Error('Age must be greater than 18'))
//       } else {
//         callback()
//       }
//     }
//   }, 1000)
// }

// const validatePass = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('Please input the password'))
//   } else {
//     if (ruleForm.checkPass !== '') {
//       if (!ruleFormRef.value) return
//       ruleFormRef.value.validateField('checkPass', () => null)
//     }
//     callback()
//   }
// }
// const validatePass2 = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('Please input the password again'))
//   } else if (value !== ruleForm.pass) {
//     callback(new Error("Two inputs don't match!"))
//   } else {
//     callback()
//   }
// }

const ruleForm = reactive({
  oldpass: '',
  newpass: '',
  checkPass: '',
})

// const rules = reactive<FormRules<typeof ruleForm>>({
//   pass: [{ validator: validatePass, trigger: 'blur' }],
//   checkPass: [{ validator: validatePass2, trigger: 'blur' }],
//   age: [{ validator: checkAge, trigger: 'blur' }],
// })

// const submitForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.validate((valid) => {
//     if (valid) {
//       console.log('submit!')
//     } else {
//       console.log('error submit!')
//       return false
//     }
//   })
// }

// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.resetFields()
// }
</script>
<style scope lang="less">
.el-radio-group {
  margin-right: 12px;
}
.el-form{
    width: 30vw;
    height: 41.14vh;
    background-color: #FFFFFF;
   
}
.el-form-item__content{
  display: flex;
    justify-content: center;
    align-items: center;
    .el-button{
      line-height: 1.25rem;
      border-radius: 0.25rem;
      background-color: rgba(15,64,245,1);
      color: rgba(255,255,255,1);
      font-size: 0.88rem;
      text-align: center;
    }
}

</style>