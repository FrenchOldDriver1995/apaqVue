<template>
  <div id="app">
    <!-- 只把app当个容器试试 -->
    
    
    <!-- <el-form :inline="true">

      <el-form-item>
      <el-button type="primary" @click="jump('/')">回到首页</el-button>
    </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="jump('/sheet_choice')">表单选择</el-button>
    </el-form-item>
     <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </el-form> -->
    <router-view></router-view>
   <!-- 直接在路由那里跳过这个就好了，component设成你想要的真实首页 -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    jump(url){
      this.$router.push(url)
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>