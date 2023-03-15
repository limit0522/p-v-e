<template>
<div class="login">
    <h4>后台管理系统</h4>
    <el-form
      label-width="80px"
      :model="loginData"
    >
      <el-form-item label="账号">
        <el-input placeholder="请输入账号" v-model="loginData.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="loginData.password" show-password></el-input>
      </el-form-item>
       <el-form-item>
          <el-button @click="subFun" class="sub-btn" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import {reactive} from 'vue'
import API from '../axiosDemo.js'
export default {
  name: "ElementUI",
  setup(){
    const currentRouter = useRouter();
    const store2 = useStore();
    console.log(store2.state.count);
    let loginData = reactive({
      name: '',
      password: ''
    })
    let subFun = ()=>{
      if(!loginData.name || !loginData.password){
        ElMessage.error("请先填写账号和密码");
        return;
      }
      API({
        url: '/login',
        method: 'post',
        data: loginData
      }).then((res)=>{
        const loginName = JSON.parse(res).name;
        ElMessage.success('欢迎您使用，' + loginName);
        //currentRouter.push({path: 'home'});
        currentRouter.push({path: 'home',query: {userId: loginName}})
      })
    }
    return {
      loginData,
      subFun,
    }
  }
}
</script>

<style scoped>

.login{
  width: 500px;
  margin: 150px auto;
  border:1px solid #efefef;
  border-radius: 10px;
  padding:20px
}
h4{
  text-align: center;
}
.sub-btn{
  width: 100%;
}
</style>
