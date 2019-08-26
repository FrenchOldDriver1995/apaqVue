<template>
    <el-container>
      <el-main>
          <linegraph :id="'bargraph'" :data="option" style="height:350px;"></linegraph>
            <linegraph :id="'bargraph1'" :data="option2" style="height:350px;"></linegraph>
      </el-main>
    </el-container>
</template>
 
<script>
  import linegraph from '@/components/linegraph.vue'
    export default {
        name: "weixinanaly",
      data(){
          return{
              
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
                    bottom:0 //设置legend从下面开始的高度
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
                        data:[8, 5.2, 0.96, 0.27, 0.81, 0.47, 0.74, 0.23, .69, 0.25, 0.36, 0.56]
                    },
                     {
                        name:'上年',
                        type:'line',
                        data:[1, 0.2, 0.4, 0.8, 0.16, 0.32, 0.64, 1.28, 5.6, 0.25, 0.63, 0.65, 0.12]
                    }
                ]
            },
            option2:{
               
              title: {
                text: '全年设备产量对比图',
                left: 'center'
              },
              xAxis: {
                type: 'category',
                data: ['检品机1', '检品机2', '检品机3', '检品机4', '检品机5', '检品机6', '检品机7']
              },
              yAxis: {
                type: 'value'
              },
              legend: {
                left: 'center',
                data: ['本年', '上年'],
                bottom:0
              },
              grid: {
                left: '1%',
                right: '2%',
                bottom: '8%',
                containLabel: true
              },
              series: [
                {
                  name: '本年',
                  data: [100, 200, 150, 80, 70, 110, 130],
                  type: 'bar',
                  barWidth:30,
                },
                {
                  name: '上年',
                  data: [120, 200, 150, 80, 70, 110, 130],
                  type: 'bar',
                  barWidth:30,
                }]
            }


            
          }
      },
      components:{
          linegraph
      }
    }
</script>
 
<style scoped>
 
</style>