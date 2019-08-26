
<template>  
<el-container>
         

      <el-form :inline="true">
        <!-- <el-form-item>
          <el-button type="primary" @click="jump('/sheet_winding')">钉卷表</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="jump('/sheet1')">测试表1</el-button>
         </el-form-item>
         <el-form-item>
          <el-button type="primary" @click="jump('/sheet2')">测试表2</el-button>
         </el-form-item>
         <el-form-item>
          <el-button type="primary" @click="jump('/sheet3')">测试表3</el-button>
         </el-form-item> -->

         <router-view></router-view>
      </el-form>
</el-container>

    
  </template>
   


 <script>
    export default {
        
        data() {
            return {}
        },
        methods:{
           jump(url){
              this.$router.push(url)
            }
        }
    }
</script>
