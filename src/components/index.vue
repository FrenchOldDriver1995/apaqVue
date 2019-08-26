<template>
<!-- <div align="left" class="container">

</div> -->
<el-container>

        <!-- <el-header align="left">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
        </el-header>


    <el-container>
        <el-aside  style="height: 500px; width:220px; border: 0.5px solid #eee">
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">检验表单</span>
    </template>

    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1" @click="jump('/sheet_winding')">钉卷表</el-menu-item>
      <el-menu-item index="1-2" @click="jump('/sheet1')">测试表1</el-menu-item>
    </el-menu-item-group>

    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>

    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>

  <el-menu-item index="2">
    <i class="el-icon-menu"></i> 
    <!-- 这个el-iocn- 设置标签长什么样 -->
    <!-- <span slot="title" @click="jump('/auto')">SPC实时监控</span>
  </el-menu-item>

  <el-menu-item index="3">
      <!-- disabled禁用，是否可以通过这个设置权限 
    <i class="el-icon-document"></i>
    <span slot="title">未提交表单</span>
  </el-menu-item>

    <el-menu-item index="4">
      <!-- disabled禁用，是否可以通过这个设置权限
    <i class="el-icon-document"></i>
    <span slot="title">已提交表单</span>
  </el-menu-item>-->

  <!-- <el-menu-item index="5">
    <i class="el-icon-setting"></i>
    <span slot="title" @click="jump('/echart')">测试echart</span>
  </el-menu-item> -->

  <!-- <el-menu-item index="6">
      <i class="el-icon-warning"></i>
      <span slot="title"  @click="jump('/spc')">无轮播spc</span>
      <!-- <el-submenu-item index="6-1" @click="jump('/auto')">轮播折线图spc</el-submenu-item> -->
  <!-- </el-menu-item> --> 

<!-- </el-menu> -->
<!-- </el-aside> -->

    <el-container>
        <el-main style="text-align:cneter">

                <router-view></router-view>

            <h1>使用说明</h1>
            <h1>点击对应按钮，进入spc监控系统，可以实时查看SPC情况</h1>
  
            <el-button type="primary"  icon="el-icon-search" round @click="jump('/auto')">钉卷站SPC管控（正箔）</el-button>
        </el-main>
    </el-container>

</el-container>


</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
        // 这里设置为true的话会自动展开
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      jump(url){
      this.$router.push(url)
        }
    }
  }
</script>