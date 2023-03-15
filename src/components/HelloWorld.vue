<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="getData" type="primary">test axios</el-button>
    <!-- <p>{{testData.list.length ? testData.list : "暂无数据"}}</p> -->
      <el-alert
        v-if = "flag"
        :title="title"
        :type="type"
        :description="testData.list"
        show-icon
      />
  </div>
</template>


<script>
import {reactive,ref} from 'vue'
import API from "../axiosDemo.js"
import { useStore } from 'vuex'

export default {
  name : "HelloWorld",
  setup() {
    let flag = ref(false);
    let title = ref("");
    let type = ref("");
    const msg = ref("helloworld content");
    let testData = reactive({
      list: []
    });
    const store1 = useStore();
    const getData = ()=>{
      store1.commit("setState",100);
      //console.log(store1.state.count);
      flag.value = true;
      API({
        url: '/test',
        method: 'get'
      }).then((res)=>{
        testData.list = res.dataList;
        title.value = "success";
        type.value = "success";
      }).catch((err)=>{
        testData.list = err;
        title.value = "failed";
        type.value = "error";
      })
    }
    return {
      msg,
      testData,
      getData,
      flag,
      title,
      type,
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
.el-alert{
  margin-top: 20px;
  width: 200px;
}
</style>
