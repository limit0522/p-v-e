<template>
  <div class="select-box">
    <div>
      <span>id:</span>
      <el-select v-model="option.id" placeholder="请选择id">
        <el-option
          v-for="item in ['i1','i2','i3']"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </div>
    <div>
      <span>标题:</span>
      <el-input v-model="option.title" placeholder="请输入标题"></el-input>
    </div>
    <div>
      <el-button @click="getTabList" type="primary">查询</el-button>
    </div>
  </div>
 
  <el-table :data="data.table[option.page]" style="width: 100%">
    <el-table-column prop="title" label="标题"> </el-table-column>
    <el-table-column prop="body" label="内容"> </el-table-column>
    <el-table-column prop="id" label="id"> </el-table-column>
  </el-table>
  <el-pagination
    @current-change="handleCurrentChange"
    :current-page="data.page"
    layout="total, prev, pager, next, jumper"
    :total="data.total"
  >
  </el-pagination>
</template>
<script>
import {reactive} from 'vue'
import API from '../axiosDemo.js'
export default{
    name: "CourseList",
    setup() {
        let data = reactive({
            table: [],
            page: 1,
            total: 0,
          });
        
        let option=reactive({
            id:'',
            title:'',
            page: 0,
        
        })
        let getCourseListFun = async (config) => {
            let res = await API(config);
            let arr = res.dataList;
            let newArr = [];
            data.total = arr.length;
            // for (let index = 0; index < arr.length; index++) {
            //     let obj = arr.splice(index, 10); 
            //     newArr.push(obj);
            // }
            while(arr.length){
                let obj = arr.splice(0, 10); 
                newArr.push(obj);
            }
            data.table = newArr;
        };
        getCourseListFun({
            url: '/lists',
            method: 'get'
        });
        
        let handleCurrentChange = (index) => {
            option.page = index-1;
            data.page = index;
            // getCourseListFun({page:data.page})
        };
        
        let getTabList=()=>{
            let search = data.table[option.page];
            console.log(search);
            for(let i=0; i<search.length; i++){
              if(search[i].title == option.title && search[i].id == option.id){
                console.log(search[i].body);
              }
            }
        }
        return {
            data,
            handleCurrentChange,
            getTabList,
            option
        };

    }
}
</script>
<style scoped>
    .select-box{
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
    }
    .select-box > div{
        margin-right: 10px;
        width: 30%;
        display: flex;
        align-items: center;
    }
    .select-box > div span{
        width: 50px;
    }
</style>