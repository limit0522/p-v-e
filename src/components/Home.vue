<template>
    <div class="home">
        <el-container>
            <el-header class="top-box">
                <el-row :gutter="24">
                    <el-col :span="18">
                        <img class="logo" src="../assets/logo.png" alt="">
                    </el-col>
                    <el-col :span="6">
                        <div class="info-box">
                            <span>{{userID}}</span>
                            <el-button class="out-btn" @click="gohome" type="text">退出</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                    router
                    class="el-menu-vertical-demo">
                        <el-menu-item :route="i.path" v-for="i in tabList" :key="i.name" :index="i.name">
                            <!-- <i class="el-icon-document"></i> -->
                            <template #title>{{i.meta.title}}</template>
                        </el-menu-item> 
                    </el-menu>
                </el-aside>
                <el-main>
                <div class="content-box">
                    <router-view/>
                </div>
                </el-main>
            </el-container>
        </el-container>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import router from '../router.js'
export default{
    name: "HomeContent",
    setup() {
        let currentRouter = useRouter();
        let userID = currentRouter.currentRoute.value.query.userId;
        let tabList = router.options.routes[2].children;
        const gohome = ()=>{
            currentRouter.push({path: '/'})
        }
        return {
            tabList,
            userID,
            gohome
        };
    }
}
</script>
<style scoped>

.top-box {
    background: #efefef;
    padding: 5px;
}
.top-box .logo {
    width: 50px;
}
.top-box .info-box {
    text-align: right;
}
.top-box .out-btn {
    margin-left: 10px;
}
.content-box{
    padding:20px;
}
</style>