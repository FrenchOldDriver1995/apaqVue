import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from "@/components/login";

import sheet_choice from "@/components/sheet_choice"
import sheet_winding from "@/components/sheet_winding"
import sheet1 from '@/components/sheet1'
import sheet2 from '@/components/sheet2'

import sheet3 from '@/components/sheet3'
import index from '@/components/index'
import spc from '@/components/spc'
import testEchart from '@/components/testEchart'
import auto from '@/components/auto'
import precise from '@/components/precise'
Vue.use(Router)

//这个地方写路由配置
//下面写路由配置相关路径，上面也必须相应导入

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: index
      // 这里嵌套一个子路由，用来登录
    },


    {
      path:'/login',
      name:'login',
      component:login
    },

    {
      path:'/sheet_choice',
      name:'表单选择',
      component:sheet_choice,
      children:[ //这里是子路由
        {
          path:'/sheet_winding',
          name:'钉卷表',
          component:sheet_winding
        },
        {
          path:'/sheet1',
          name:'测试表',
          component:sheet1
        },
        {
          path:'/sheet2',
          name:'测试表2',
          component:sheet2
        },
        {
          path:'/sheet3',
          name:'测试表3',
          component:sheet3
        },
      ]
    },

    {
      path:'/spc',
      name:'spc管控',
      component:spc
    },
    {
      path:'/echart',
      name:'测试echart',
      component:testEchart
    },
    {path:'/auto',component:auto},
    {path:'/precise',component:precise},
    
    
    

  ]
})