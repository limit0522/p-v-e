<template>
<div>
    <div class="p-content">
        <router-link class="mr20" to='/'>ElementUI</router-link>
        <router-link to='/hello'>HelloWorld</router-link>
    </div>
    <div class="p-view">
        <router-view></router-view>
    </div> 
</div>
</template>

<script>
export default {
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 20px;
}
.p-content{
  display: flex;
  justify-content: center;
}
.p-view{
  margin-top: 20px;
}
.mr20{
  margin-right: 20px;
}
</style>
