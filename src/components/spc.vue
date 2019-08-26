<template>
    <el-container>
        <el-header>
        <el-carousel :interval="5000" arrow="always">
            <!-- 组件中使用v-for循环需使用:key -->
        <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
        
        </el-carousel-item>
        </el-carousel>
        </el-header>
        <el-container>
        <el-aside>


        </el-aside>
        <el-main>
            
                    <linegraph :id="'linegraph'" :data="option" style="height: 350px;"></linegraph>
                    <linegraph :id="'barGraph'" :data="option2" style="height: 350px;"></linegraph>


        </el-main>
        </el-container>
    </el-container>
</template>

<style>
  .el-carousel__item h3 {
    color: red;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: blue;
  }
</style>
<script>
import linegraph from '@/components/linegraph.vue'
export default {
    data(){
        return{
            lunboList:[
                //获取轮播画面的数据
            ],
            notAccess:false,
            ChartLineGraph2:null,
            option:{
                title:{
                    text:'全年产量',
                    left:'center'
                },
                tooltip:{
                    trigger:'item',
                    formatter:'{a}<br/>{b}:{c}'
                },
                legend:{
                    left:'center',
                    data:['本年','上年'],
                    bottm:0
                },
                xAxis:{
                    type:'value',
                    name:'x',
                    splitLine:{show:false},
                    data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
                },
                grid:{
                    left:'1%',
                    right:'2%',
                    bottom:'8%',
                    containLabel:true
                },
                yAxis:{
                    type:'value',
                    name:'y',
                    splitLine:{show:true},
                    data:['10%','20%','30%','40%','50%','60%','70%','80%','90%','100%']
                },
                series:[
                    {
                        name:'本年',
                        type:'line',
                        data:[0.8,0.98,0.78,0.55,0.64,0.32,0.81,0.43,0.49,0.77,0.53,0,91]
                    },
                     {
                        name:'上年',
                        type:'line',
                        data:[0.84,0.91,0.38,0.65,0.64,0.32,0.61,0.73,0.49,0.67,0.82,0.49]
                    }
                ]
            },
            option2:{
                title:{
                    text:'全年产量2',
                    left:'center'
                },

                legend:{
                    left:'center',
                    data:['本年','上年'],
                    bottm:0
                },
                xAxis:{
                    type:'value',
                    
                    data:['检品机1','检品机2','检品机3','检品机4','检品机5','检品机6','检品机7']
                },
                grid:{
                    left:'1%',
                    right:'2%',
                    bottom:'8%',
                    containLabel:true
                },
                yAxis:{
                    type:'value',

                },
                series:[
                    {
                        name:'本年',
                        type:'bar',
                        barwidth:15,
                        data:[120,180,210,160,70,130,170]
                    },
                     {
                        name:'上年',
                        type:'bar',
                        barwidth:15,
                        data:[140,210,180,90,90,170,130]
                    },
     
                ]
            },

        }
    },

    
    methods:{

    },
    components:{
        // ErrorTip,
        linegraph,
    }
}
</script>
