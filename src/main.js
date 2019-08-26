// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import sheet_winding from './components/sheet_winding'
import echarts from 'echarts'
// import $ from 'jquery'
// Vue.use($)

Vue.use(Element,
  // {size:'small', zIndex: 3000} //这里可以修改默认的组件属性
  );
Vue.use(VueResource);
Vue.use(echarts) //导入echarts图工具
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
//这里不写这句话，直接在proxyTable里已经写好了，他会默认搜索到路径，这句添加了反倒会覆盖
// Vue.http.options.root='http://172.25.1.167:8088'

/* eslint-disable no-new */
new Vue({ //这个就是之前的Vue实例，只是没写var vm =
  el: '#app',
  data:{

  },
  methods:{

  },
  router,
  components: { App }, //组件渲染用components或者render都可以
  // render:c=>c(App),
  template: '<App/>',
  // render: c=>c(sheet_winding)
  // render会直接把整个主页app控制的部分覆盖渲染掉。。
})
