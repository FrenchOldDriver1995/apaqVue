<template>
<div>
    <!-- <input type="button" value="返回"> -->
    <el-container direction="vertical">
        <el-container>
            <el-aside align="left">
                <el-button type="primary" round @click="jump('/')">返回</el-button>
            </el-aside>
        <el-main align="center">
            <!-- <el-button type="primary">返回</el-button> -->
            <!-- <h1 text-align="center">钰邦电子科技股份有限公司</h1> -->
            <div id="tijiao">
            <el-button type="primary" round @click="jump('/precise')">添加每日抽样数据/查看特定机台</el-button>
            </div>
            <div id="title">
            <h2 text-align="center">钉卷站正箔实时SPC（Xbar-R管制图）</h2>
            </div>
        </el-main>
        </el-container>


        <el-main>
            
        <div id="myChart3" :style="{width:'450px',height:'250px'}"></div>
        <div id="myChart2" :style="{width:'450px',height:'250px'}"></div>
        
        <div id="myChart4" :style="{width:'450px',height:'250px'}"></div>
        <div id="myChart1" :style="{width:'450px',height:'250px'}"></div>
        </el-main>

        <!-- <el-footer> -->
            <!-- <div class="parent">
                <children :msg="msg" @say="parentSay"></children>
            </div> -->
            <!-- 这句话是可以把父组件的值写到子组件中显示的 -->
            <!-- <children :message=search></children> -->
            
             
            <!-- <div id="shuru2">
            <el-button type="primary" round disabled @click="jump('/precise')">查看特定机台</el-button>
            </div> -->
        <!-- </el-footer> -->
    </el-container>
    
</div>
</template>
<style>
#myChart1,#myChart2,#myChart3,#myChart4,#tijiao,#title{
    /* display: flex;
    flex-wrap:nowrap; */
    display: inline-block 
    /* inline-block直接2x2 */

}

</style>
<script>
//步骤，画折线图，四个(暂定），调成窗口自适应，先默认加载四个框架，然后在统一切换数据实现轮播效果

// import precise from './precise.vue'

export default {
    name:'eCharts',
    data(){
        return{
            // list:[],
            search:'what haaa',
            msg:'hello, noob'
        }
    },
    mounted(){
        
        this.drawBgc(); //先画框架
        this.drawContent(); //再画内容
    },
    // components:{
    //     children:precise
    // },
    methods:{
        parentSay(msg){
            console.log(msg)
        },
        jump(url){//跳转链接
            this.$router.push(url)
        },
        // drawLine(){
        //     var myChart = this.$echarts.init(document.getElementById('myChart'),'light')
        //     //light，dark设置主题

        //         myChart.setOption({
        //         title:{text:'vue+ echarts'},
        //         tooltip:{},
        //         xAxis:{
        //             data:["衬","羊毛","贸易","羽绒服","短袖"]
        //         },
        //         yAxis:{},
        //         series:[{
        //             //series写数据的地方
        //             name:'销量',
        //             type:'bar',
        //             data:[5,20,36,10,10,20]
        //         }]
        //     });

        //     var myChart2 = this.$echarts.init(document.getElementById('myChart2'))

        //     myChart2.setOption({
        //         title:{text:'vue+ echarts2'},
        //         tooltip:{},
        //         dataset:{
        //             source:[
        //                 ['product','2015','2016','2017'],
        //                 ['Matcha Latte',43.4,85.8,93.7],
        //                 ['Milk Tea',83.1,73.4,55.1],
        //                 ['Cheese cocoa',86.4,65.2,82.5],
        //                 ['Walnut Brownie',72.4,53.9,39.1]
        //             ]
        //         },
        //         xAxis:{
        //             // data:["衬","羊毛","贸易","羽绒服","短袖"]
        //             type:'category'
        //             //类目轴对应dataset第一列,不要写成catagory了
        //         },
        //         yAxis:{},
        //         series:[
        //             //series写数据的地方
        //         {type:'bar'},
        //         {type:'bar'},
        //         {type:'bar'}
        //         ]
        //     })

        // },
        drawBgc(){
            //画第一个框
            //把要画直线的点提前放到数组
            var UCL=[]
            var LCL=[]
            var day=new Date().getDate() //获取当日天数
            var mon=new Date().getMonth()+1
            
            for(var k=0;k<28;k++){
                UCL.push(0.45)
                LCL.push(0.9)
            }
            var myChart1 = this.$echarts.init(document.getElementById('myChart1'))
            //先画一个空的框架
            myChart1.setOption({
                title:{
                    // text:'异步加载',
                    //subtext:'async'
                },
                tooltip:{},
                legend:{
                    data:['X-Chart','UCL','LCL']
                },
                xAxis:{
                    //这种方式是保证显示最新日期为今天，属于投机，实际上应该根据返回数据中的日期值来加载
                    data:[
                    //      day-27>0?mon+'月'+(day-27)+'日':mon-1+'月'+(day+(28-27))+'日',
                    //     day-26>0?mon+'月'+(day-26)+'日':mon-1+'月'+(day+(28-26))+'日',
                    //     day-25>0?mon+'月'+(day-25)+'日':mon-1+'月'+(day+(28-25))+'日',
                    //     day-24>0?mon+'月'+(day-24)+'日':mon-1+'月'+(day+(28-24))+'日',
                    //     day-23>0?mon+'月'+(day-23)+'日':mon-1+'月'+(day+(28-23))+'日',
                    //     day-22>0?mon+'月'+(day-22)+'日':mon-1+'月'+(day+(28-22))+'日',
                    //     day-21>0?mon+'月'+(day-21)+'日':mon-1+'月'+(day+(28-21))+'日',
                    //     day-20>0?mon+'月'+(day-20)+'日':mon-1+'月'+(day+(28-20))+'日',
                    //     day-19>0?mon+'月'+(day-19)+'日':mon-1+'月'+(day+(28-19))+'日',
                    //     day-18>0?mon+'月'+(day-18)+'日':mon-1+'月'+(day+(28-18))+'日',
                    //     day-17>0?mon+'月'+(day-17)+'日':mon-1+'月'+(day+(28-17))+'日',
                    //     day-16>0?mon+'月'+(day-16)+'日':mon-1+'月'+(day+(28-16))+'日',
                    //     day-15>0?mon+'月'+(day-15)+'日':mon-1+'月'+(day+(28-15))+'日',
                    //     day-14>0?mon+'月'+(day-14)+'日':mon-1+'月'+(day+(28-14))+'日',
                    //     day-13>0?mon+'月'+(day-13)+'日':mon-1+'月'+(day+(28-13))+'日',
                    //     day-12>0?mon+'月'+(day-12)+'日':mon-1+'月'+(day+(28-12))+'日',
                    //     day-11>0?mon+'月'+(day-11)+'日':mon-1+'月'+(day+(28-11))+'日',
                    //     day-10>0?mon+'月'+(day-10)+'日':mon-1+'月'+(day+(28-10))+'日',
                    //     day-9>0?mon+'月'+(day-9)+'日':mon-1+'月'+(day+(28-9))+'日',
                    //     day-8>0?mon+'月'+(day-8)+'日':mon-1+'月'+(day+(28-8))+'日',
                    //     day-7>0?mon+'月'+(day-7)+'日':mon-1+'月'+(day+(28-7))+'日',
                    //     day-6>0?mon+'月'+(day-6)+'日':mon-1+'月'+(day+(28-6))+'日',
                    //     day-5>0?mon+'月'+(day-5)+'日':mon-1+'月'+(day+(28-5))+'日',
                    //     day-4>0?mon+'月'+(day-4)+'日':mon-1+'月'+(day+(28-4))+'日',
                    //     day-3>0?mon+'月'+(day-3)+'日':mon-1+'月'+(day+(28-3))+'日',
                    // day-2>0?mon+'月'+(day-2)+'日':mon-1+'月'+(day+(28-2))+'日',
                    // day-1>0?mon+'月'+(day-1)+'日':mon-1+'月'+(day+(28-1))+'日',
                    // day>0?mon+'月'+day+'日':mon-1+'月'+(day+28)+'日',
                    ],
                    axisLabel:{
                        interArrival:0,
                        rotate:-90,
                        interval:0
                    }
                },
                yAxis:[{
                    type:'value',
                    //name:'阻抗',
                    min:0.4,
                    max:0.95,
                    interval:0.1,
                    
                }],
                series:[{
                    //在这个里面提前把栏位占好，后面setOption添加即可
                    name:'X-Chart', //这里的name好像要和上面一起切换
                    type:'line',
                    data:[]
                },
                {
                    
                    name:'UCL', 
                    type:'line',
                    data:UCL
                },
                {
                    
                    name:'LCL', 
                    type:'line',
                    data:LCL
                },

                ]
            });
            var myChart2 = this.$echarts.init(document.getElementById('myChart2'))
            //先画一个空的框架
            myChart2.setOption({
                title:{
                    // text:'异步加载',
                    //subtext:'async'
                },
                tooltip:{},
                legend:{
                    data:['X-Chart','UCL','LCL']
                },
                xAxis:{
                    data:[
                   
                    ],
                    axisLabel:{
                        interArrival:0,
                        rotate:-90,
                        interval:0
                    }
                },
                yAxis:[{
                    type:'value',
                    //name:'阻抗',
                    min:0.4,
                    max:0.95,
                    interval:0.1,
                    
                }],
                series:[{
                    //在这个里面提前把栏位占好，后面setOption添加即可
                    name:'X-Chart', //这里的name好像要和上面一起切换
                    type:'line',
                    data:[]
                },
                {
                    
                    name:'UCL', 
                    type:'line',
                    data:UCL
                },
                {
                    
                    name:'LCL', 
                    type:'line',
                    data:LCL
                },

                ]
            });

            var myChart3 = this.$echarts.init(document.getElementById('myChart3'))
            //先画一个空的框架
            myChart3.setOption({
                title:{
                    // text:'异步加载',
                    //subtext:'async'
                },
                tooltip:{},
                legend:{
                    data:['X-Chart','UCL','LCL']
                },
                xAxis:{
                    data:[
                    
                    ],
                    axisLabel:{
                        interArrival:0,
                        rotate:-90,
                        interval:0 //横坐标不省略显示
                    }
                },
                yAxis:[{
                    type:'value',
                    //name:'阻抗',
                    min:0.4,
                    max:0.95,
                    interval:0.1,
                    
                }],
                series:[{
                    //在这个里面提前把栏位占好，后面setOption添加即可
                    name:'X-Chart', //这里的name好像要和上面一起切换
                    type:'line',
                    data:[]
                },
                {
                    
                    name:'UCL', 
                    type:'line',
                    data:UCL
                },
                {
                    
                    name:'LCL', 
                    type:'line',
                    data:LCL
                },

                ]
            });


        
            //画第二个图
            var myChart4 = this.$echarts.init(document.getElementById('myChart4'))
            myChart4.setOption({
                title:{},
                legend:{
                    data:['X-Chart','UCL','LCL']
                },
                xAxis:{
                    data:[

                    ],
                    axisLabel:{
                        interArrival:0,
                        rotate:-90,
                        interval:0
                    }
                },
                yAxis:[{
                    type:'value',
                    //name:'阻抗',
                    min:0.4,
                    max:0.95,
                    interval:0.1,
                    // axisLabel:{
                    //     formatter:'{value}'
                    // },
                    // splitLine:{show:true},//去除网格线
                    // splitArea:{show:true}//保留网格区域
                }],
                series:[{
                    name:'X-Chart',
                    type:'line',
                    data:[],
                    markLine:{},
                },
                {
                    
                    name:'UCL', 
                    type:'line',
                    data:UCL
                },
                {
                    
                    name:'LCL', 
                    type:'line',
                    data:LCL
                },]
            });

            
        },
        drawContent(){
            //画内容
            //记得先用第一句获取对应的区域

            //画一个内容
            var result; //设成该区域内的全局变量，让所有的chart共享
            var myChart1 = this.$echarts.init(document.getElementById('myChart1'));
            var myChart2 = this.$echarts.init(document.getElementById('myChart2'));
            var myChart3 = this.$echarts.init(document.getElementById('myChart3'));
            
            var myChart4 = this.$echarts.init(document.getElementById('myChart4'));

            this.$http.get('spc/show').then(res=>{
                //应该把get数据这句话统一抽离出去,因为他也要定时的刷新获取数据


            //res.body即为传进来的同一集合下（车间）的数组，不同编号代表不同的机台，每个机台的testVal就是测试数据，但最好使用二维数组，这里暂时是一维的。
            var i=0
            
            result = res.body
            var avgLen=result[0].avgLine.length //获取平均线数据的长度，取倒数28个显示
            var len = result.length //这个是有多少个机台
            
            
            
            //为什么这里放外面不执行。。
            // var matrix=result[0].record //获得后端的矩阵

            //result[0]是整个第一张表
            //result[0].avgLine是avg走势图 ，range同理
            //result[0].record是整个14 x 28 的表
            //这里的表，横着一行为一天的内容，而不是一列
            
                //把下面的加载内容放入setInterval即可切换

                setInterval(function(){
                i+=4;
                


                var re1=result[(i+3)%len]
                var len1=re1.record.length //这个len不要全部统一成一样了，应该根据对应机台单独计算
                myChart1.setOption({
                title:{
                    text:'机台'+re1.no_machine,
                    subtext:'阻抗  规格:'+re1.format,
                    
                    
                },
                //关于这里的日期坐标，可以把最后一天get成当天的，然后前面依次递减
                
                xAxis:{
                    
                    type:'category',
                    //record数组表示每一天的数据
                    //数组第一位选择天数，第二位区分数据
                    //比如record[len2-1][2] 就是表示最后的一天（截止到最近的数据）的日期
                    //record[len2-1][1] 就表示最后这一天的月份
                    //通过len2-i来表示从今天起往前数的第i-1天
                    data:[ 
                        re1.record[len1-28][1]+'月'+re1.record[len1-28][2]+'日',
                        re1.record[len1-27][1]+'月'+re1.record[len1-27][2]+'日',
                        re1.record[len1-26][1]+'月'+re1.record[len1-26][2]+'日',
                        re1.record[len1-25][1]+'月'+re1.record[len1-25][2]+'日',
                        re1.record[len1-24][1]+'月'+re1.record[len1-24][2]+'日',
                        re1.record[len1-23][1]+'月'+re1.record[len1-23][2]+'日',
                        re1.record[len1-22][1]+'月'+re1.record[len1-22][2]+'日',
                        re1.record[len1-21][1]+'月'+re1.record[len1-21][2]+'日',
                        re1.record[len1-20][1]+'月'+re1.record[len1-20][2]+'日',
                        re1.record[len1-19][1]+'月'+re1.record[len1-19][2]+'日',
                        re1.record[len1-18][1]+'月'+re1.record[len1-18][2]+'日',
                        re1.record[len1-17][1]+'月'+re1.record[len1-17][2]+'日',
                        re1.record[len1-16][1]+'月'+re1.record[len1-16][2]+'日',
                        re1.record[len1-15][1]+'月'+re1.record[len1-15][2]+'日',
                        re1.record[len1-14][1]+'月'+re1.record[len1-14][2]+'日',
                        re1.record[len1-13][1]+'月'+re1.record[len1-13][2]+'日',
                        re1.record[len1-12][1]+'月'+re1.record[len1-12][2]+'日',
                        re1.record[len1-11][1]+'月'+re1.record[len1-11][2]+'日',
                        re1.record[len1-10][1]+'月'+re1.record[len1-10][2]+'日',
                        re1.record[len1-9][1]+'月'+re1.record[len1-9][2]+'日',
                        re1.record[len1-8][1]+'月'+re1.record[len1-8][2]+'日',
                        re1.record[len1-7][1]+'月'+re1.record[len1-7][2]+'日',
                        re1.record[len1-6][1]+'月'+re1.record[len1-6][2]+'日',
                        re1.record[len1-5][1]+'月'+re1.record[len1-5][2]+'日',
                        re1.record[len1-4][1]+'月'+re1.record[len1-4][2]+'日',
                        re1.record[len1-3][1]+'月'+re1.record[len1-3][2]+'日',
                        re1.record[len1-2][1]+'月'+re1.record[len1-2][2]+'日',
                        re1.record[len1-1][1]+'月'+re1.record[len1-1][2]+'日',

                    ]//这里要修改成后端存储数组record中的前三行（年月日，年可看情况忽略）
                },
                
                series:[{
                    //这里放具体数据
                    // name:'销量销量',
                    // data:data.data
                    data: //result[(i+3)%len].avgLine,
                    [
                        //由于后端代码对avgLine也做了push操作，所以这里avgLine[i]和record[i][10]是一个效果
                        re1.avgLine[len1-28],
                        re1.avgLine[len1-27],
                        re1.avgLine[len1-26],
                        re1.avgLine[len1-25],
                        re1.avgLine[len1-24],
                        re1.avgLine[len1-23],
                        re1.avgLine[len1-22],
                        re1.avgLine[len1-21],
                        re1.avgLine[len1-20],
                        re1.avgLine[len1-19],
                        re1.avgLine[len1-18],
                        re1.avgLine[len1-17],
                        re1.avgLine[len1-16],
                        re1.avgLine[len1-15],
                        re1.avgLine[len1-14],
                        re1.avgLine[len1-13],
                        re1.avgLine[len1-12],
                        re1.avgLine[len1-11],
                        re1.avgLine[len1-10],
                        re1.avgLine[len1-9],
                        re1.avgLine[len1-8],
                        re1.avgLine[len1-7],
                        re1.avgLine[len1-6],
                        re1.avgLine[len1-5],
                        re1.avgLine[len1-4],
                        re1.avgLine[len1-3],
                        re1.avgLine[len1-2],
                        re1.avgLine[len1-1],
                    ],
                    markLine:{
                        //画水平线
                        symbol:['none','none'],//去掉箭头
                        itemStyle:{
                            normal:{
                                color:'green',
                                label:{
                                    show:true
                                }
                            }
                        },
                        data:[{type: 'average', name:'平均值'}]
                    }
                },
                ]
                });


                var re2=result[(i+1)%len];
                var len2=re2.record.length;
                myChart2.setOption({
                title:{
                    text:'机台'+re2.no_machine,
                    subtext:'阻抗  规格:'+re2.format,
                },
                //关于这里的日期坐标，可以把最后一天get成当天的，然后前面依次递减
                xAxis:{
                    
                    type:'category',

                    data:[
                        re2.record[len2-28][1]+'月'+re2.record[len2-28][2]+'日',
                        re2.record[len2-27][1]+'月'+re2.record[len2-27][2]+'日',
                        re2.record[len2-26][1]+'月'+re2.record[len2-26][2]+'日',
                        re2.record[len2-25][1]+'月'+re2.record[len2-25][2]+'日',
                        re2.record[len2-24][1]+'月'+re2.record[len2-24][2]+'日',
                        re2.record[len2-23][1]+'月'+re2.record[len2-23][2]+'日',
                        re2.record[len2-22][1]+'月'+re2.record[len2-22][2]+'日',
                        re2.record[len2-21][1]+'月'+re2.record[len2-21][2]+'日',
                        re2.record[len2-20][1]+'月'+re2.record[len2-20][2]+'日',
                        re2.record[len2-19][1]+'月'+re2.record[len2-19][2]+'日',
                        re2.record[len2-18][1]+'月'+re2.record[len2-18][2]+'日',
                        re2.record[len2-17][1]+'月'+re2.record[len2-17][2]+'日',
                        re2.record[len2-16][1]+'月'+re2.record[len2-16][2]+'日',
                        re2.record[len2-15][1]+'月'+re2.record[len2-15][2]+'日',
                        re2.record[len2-14][1]+'月'+re2.record[len2-14][2]+'日',
                        re2.record[len2-13][1]+'月'+re2.record[len2-13][2]+'日',
                        re2.record[len2-12][1]+'月'+re2.record[len2-12][2]+'日',
                        re2.record[len2-11][1]+'月'+re2.record[len2-11][2]+'日',
                        re2.record[len2-10][1]+'月'+re2.record[len2-10][2]+'日',
                        re2.record[len2-9][1]+'月'+re2.record[len2-9][2]+'日',
                        re2.record[len2-8][1]+'月'+re2.record[len2-8][2]+'日',
                        re2.record[len2-7][1]+'月'+re2.record[len2-7][2]+'日',
                        re2.record[len2-6][1]+'月'+re2.record[len2-6][2]+'日',
                        re2.record[len2-5][1]+'月'+re2.record[len2-5][2]+'日',
                        re2.record[len2-4][1]+'月'+re2.record[len2-4][2]+'日',
                        re2.record[len2-3][1]+'月'+re2.record[len2-3][2]+'日',
                        re2.record[len2-2][1]+'月'+re2.record[len2-2][2]+'日',
                        re2.record[len2-1][1]+'月'+re2.record[len2-1][2]+'日',

                    ],//这里要修改成后端存储数组record中的前三行（年月日，年可看情况忽略）

                
                },
                series:[{
                    //这里放具体数据
                    // name:'销量销量',
                    // data:data.data
                    data: //result[(i+1)%len].avgLine,
                    [
                        re2.avgLine[len2-28],
                        re2.avgLine[len2-27],
                        re2.avgLine[len2-26],
                        re2.avgLine[len2-25],
                        re2.avgLine[len2-24],
                        re2.avgLine[len2-23],
                        re2.avgLine[len2-22],
                        re2.avgLine[len2-21],
                        re2.avgLine[len2-20],
                        re2.avgLine[len2-19],
                        re2.avgLine[len2-18],
                        re2.avgLine[len2-17],
                        re2.avgLine[len2-16],
                        re2.avgLine[len2-15],
                        re2.avgLine[len2-14],
                        re2.avgLine[len2-13],
                        re2.avgLine[len2-12],
                        re2.avgLine[len2-11],
                        re2.avgLine[len2-10],
                        re2.avgLine[len2-9],
                        re2.avgLine[len2-8],
                        re2.avgLine[len2-7],
                        re2.avgLine[len2-6],
                        re2.avgLine[len2-5],
                        re2.avgLine[len2-4],
                        re2.avgLine[len2-3],
                        re2.avgLine[len2-2],
                        re2.avgLine[len2-1],
                        
                    ],
                    markLine:{
                        //画水平线
                        symbol:['none','none'],//去掉箭头
                        itemStyle:{
                            normal:{
                                color:'green',
                                label:{
                                    show:true
                                }
                            }
                        },
                        data:[{type: 'average', name:'平均值'}]
                    }
                },
                ]
                });






                var re3=result[i%len]
                var len3=re3.record.length
                myChart3.setOption({
                title:{
                    text:'机台'+re3.no_machine,
                    subtext:'阻抗  规格:'+re3.format,
                },
                //关于这里的日期坐标，可以把最后一天get成当天的，然后前面依次递减
                xAxis:{
                    
                    type:'category',

                    data:[
                        re3.record[len3-28][1]+'月'+re3.record[len3-28][2]+'日',
                        re3.record[len3-27][1]+'月'+re3.record[len3-27][2]+'日',
                        re3.record[len3-26][1]+'月'+re3.record[len3-26][2]+'日',
                        re3.record[len3-25][1]+'月'+re3.record[len3-25][2]+'日',
                        re3.record[len3-24][1]+'月'+re3.record[len3-24][2]+'日',
                        re3.record[len3-23][1]+'月'+re3.record[len3-23][2]+'日',
                        re3.record[len3-22][1]+'月'+re3.record[len3-22][2]+'日',
                        re3.record[len3-21][1]+'月'+re3.record[len3-21][2]+'日',
                        re3.record[len3-20][1]+'月'+re3.record[len3-20][2]+'日',
                        re3.record[len3-19][1]+'月'+re3.record[len3-19][2]+'日',
                        re3.record[len3-18][1]+'月'+re3.record[len3-18][2]+'日',
                        re3.record[len3-17][1]+'月'+re3.record[len3-17][2]+'日',
                        re3.record[len3-16][1]+'月'+re3.record[len3-16][2]+'日',
                        re3.record[len3-15][1]+'月'+re3.record[len3-15][2]+'日',
                        re3.record[len3-14][1]+'月'+re3.record[len3-14][2]+'日',
                        re3.record[len3-13][1]+'月'+re3.record[len3-13][2]+'日',
                        re3.record[len3-12][1]+'月'+re3.record[len3-12][2]+'日',
                        re3.record[len3-11][1]+'月'+re3.record[len3-11][2]+'日',
                        re3.record[len3-10][1]+'月'+re3.record[len3-10][2]+'日',
                        re3.record[len3-9][1]+'月'+re3.record[len3-9][2]+'日',
                        re3.record[len3-8][1]+'月'+re3.record[len3-8][2]+'日',
                        re3.record[len3-7][1]+'月'+re3.record[len3-7][2]+'日',
                        re3.record[len3-6][1]+'月'+re3.record[len3-6][2]+'日',
                        re3.record[len3-5][1]+'月'+re3.record[len3-5][2]+'日',
                        re3.record[len3-4][1]+'月'+re3.record[len3-4][2]+'日',
                        re3.record[len3-3][1]+'月'+re3.record[len3-3][2]+'日',
                        re3.record[len3-2][1]+'月'+re3.record[len3-2][2]+'日',
                        re3.record[len3-1][1]+'月'+re3.record[len3-1][2]+'日',

                    ]//这里要修改成后端存储数组record中的前三行（年月日，年可看情况忽略）
                },
                
                series:[{
                    //这里放具体数据
                    // name:'销量销量',
                    // data:data.data
                    data: //result[i%len].avgLine,
                    [
                        re3.avgLine[len3-28],
                        re3.avgLine[len3-27],
                        re3.avgLine[len3-26],
                        re3.avgLine[len3-25],
                        re3.avgLine[len3-24],
                        re3.avgLine[len3-23],
                        re3.avgLine[len3-22],
                        re3.avgLine[len3-21],
                        re3.avgLine[len3-20],
                        re3.avgLine[len3-19],
                        re3.avgLine[len3-18],
                        re3.avgLine[len3-17],
                        re3.avgLine[len3-16],
                        re3.avgLine[len3-15],
                        re3.avgLine[len3-14],
                        re3.avgLine[len3-13],
                        re3.avgLine[len3-12],
                        re3.avgLine[len3-11],
                        re3.avgLine[len3-10],
                        re3.avgLine[len3-9],
                        re3.avgLine[len3-8],
                        re3.avgLine[len3-7],
                        re3.avgLine[len3-6],
                        re3.avgLine[len3-5],
                        re3.avgLine[len3-4],
                        re3.avgLine[len3-3],
                        re3.avgLine[len3-2],
                        re3.avgLine[len3-1],
                    ],
                    markLine:{
                        //画水平线
                        symbol:['none','none'],//去掉箭头
                        itemStyle:{
                            normal:{
                                color:'green',
                                label:{
                                    show:true
                                }
                            }
                        },
                        data:[{type: 'average', name:'平均值'},

                        
                        ]
                    }
                },
                ]
                });

                var re4=result[(i+2)%len]
                var len4=re4.record.length
                myChart4.setOption({
                    title:{
                        text:'机台'+re4.no_machine,
                        subtext:'阻抗  规格:'+re4.format,
                    },
                    xAxis:{
                        type:'category',
                        data:[
                        re4.record[len4-28][1]+'月'+re4.record[len4-28][2]+'日',
                        re4.record[len4-27][1]+'月'+re4.record[len4-27][2]+'日',
                        re4.record[len4-26][1]+'月'+re4.record[len4-26][2]+'日',
                        re4.record[len4-25][1]+'月'+re4.record[len4-25][2]+'日',
                        re4.record[len4-24][1]+'月'+re4.record[len4-24][2]+'日',
                        re4.record[len4-23][1]+'月'+re4.record[len4-23][2]+'日',
                        re4.record[len4-22][1]+'月'+re4.record[len4-22][2]+'日',
                        re4.record[len4-21][1]+'月'+re4.record[len4-21][2]+'日',
                        re4.record[len4-20][1]+'月'+re4.record[len4-20][2]+'日',
                        re4.record[len4-19][1]+'月'+re4.record[len4-19][2]+'日',
                        re4.record[len4-18][1]+'月'+re4.record[len4-18][2]+'日',
                        re4.record[len4-17][1]+'月'+re4.record[len4-17][2]+'日',
                        re4.record[len4-16][1]+'月'+re4.record[len4-16][2]+'日',
                        re4.record[len4-15][1]+'月'+re4.record[len4-15][2]+'日',
                        re4.record[len4-14][1]+'月'+re4.record[len4-14][2]+'日',
                        re4.record[len4-13][1]+'月'+re4.record[len4-13][2]+'日',
                        re4.record[len4-12][1]+'月'+re4.record[len4-12][2]+'日',
                        re4.record[len4-11][1]+'月'+re4.record[len4-11][2]+'日',
                        re4.record[len4-10][1]+'月'+re4.record[len4-10][2]+'日',
                        re4.record[len4-9][1]+'月'+re4.record[len4-9][2]+'日',
                        re4.record[len4-8][1]+'月'+re4.record[len4-8][2]+'日',
                        re4.record[len4-7][1]+'月'+re4.record[len4-7][2]+'日',
                        re4.record[len4-6][1]+'月'+re4.record[len4-6][2]+'日',
                        re4.record[len4-5][1]+'月'+re4.record[len4-5][2]+'日',
                        re4.record[len4-4][1]+'月'+re4.record[len4-4][2]+'日',
                        re4.record[len4-3][1]+'月'+re4.record[len4-3][2]+'日',
                        re4.record[len4-2][1]+'月'+re4.record[len4-2][2]+'日',
                        re4.record[len4-1][1]+'月'+re4.record[len4-1][2]+'日',

                        ]

                    },
                    series:[{
                        data: //result[(i+2)%len].avgLine,
                        [
                            re4.avgLine[len4-28],
                        re4.avgLine[len4-27],
                        re4.avgLine[len4-26],
                        re4.avgLine[len4-25],
                        re4.avgLine[len4-24],
                        re4.avgLine[len4-23],
                        re4.avgLine[len4-22],
                        re4.avgLine[len4-21],
                        re4.avgLine[len4-20],
                        re4.avgLine[len4-19],
                        re4.avgLine[len4-18],
                        re4.avgLine[len4-17],
                        re4.avgLine[len4-16],
                        re4.avgLine[len4-15],
                        re4.avgLine[len4-14],
                        re4.avgLine[len4-13],
                        re4.avgLine[len4-12],
                        re4.avgLine[len4-11],
                        re4.avgLine[len4-10],
                        re4.avgLine[len4-9],
                        re4.avgLine[len4-8],
                        re4.avgLine[len4-7],
                        re4.avgLine[len4-6],
                        re4.avgLine[len4-5],
                        re4.avgLine[len4-4],
                        re4.avgLine[len4-3],
                        re4.avgLine[len4-2],
                        re4.avgLine[len4-1],
                        ],
                        markLine:{
                        
                        symbol:['none','none'],//去掉箭头
                        itemStyle:{
                            normal:{
                                color:'green',
                                label:{
                                    show:true
                                }
                            }
                        },
                        //A线就是(L线-平均值)*2/3 + 平均值
                        data:[{type: 'average', name:'平均值'}]
                    }
                    }]
                });
                },5000);




            }); //这里是get链接操作的结尾

            

            
            

        },

    }
}
</script>
