<template>
    <div>
        <el-container>

            <el-header align="left">
                <el-button  type="primary" round @click="jump('/auto')">返回</el-button>
                <div id="search">
                <el-input type="text" size="medium" v-model="search_number" placeholder="机台号（不区分大小写）"></el-input>
                </div>
                <div id="look">
                <el-button type="primary" round @click="findOne('spc/findOne')">查看特定机台</el-button>
                </div>
            </el-header>
            <el-main>
                <!-- <div :message=search>{{message}}</div> -->
                <!-- <div class="hello">
                    <div class="children" @click="say">
                        <div>
                            父子组件{{msg}}
                            <h1>{{$route.params.id}}</h1>
                        </div>
                    </div>
                </div> -->
                <div id="xchart" :style="{width:'450px',height:'250px'}"></div>
                <div id="rchart" :style="{width:'450px',height:'250px'}"></div>
                
            </el-main>
            <el-footer>
                <div id="shuru">
                <el-input type="text" size="mini" v-model="addNumber" placeholder="机台号（不区分大小写）"></el-input>
                </div>
                <div id="shuru2">
                <el-input type="text" size="mini" v-model="data1" placeholder="抽样数据"></el-input>
                </div>
                <div id="shuru3">
                <el-input type="text" size="mini" v-model="data2" placeholder="抽样数据"></el-input>
                </div>
                <div id="shuru4">
                <el-input type="text" size="mini" v-model="data3" placeholder="抽样数据"></el-input>
                </div>
                <div id="shuru5">
                <el-input type="text" size="mini" v-model="data4" placeholder="抽样数据"></el-input>
                </div>
                <div id="shuru6">
                <el-input type="text" size="mini" v-model="data5" placeholder="抽样数据"></el-input>
                </div>
                 <div id="tijiao">
                <el-button type="primary" round @click="submit">提交（并切换到该机台）</el-button>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>
<style>
#input,#bt,#xchart,#rchart,#shuru,#shuru2,#shuru3,#shuru4,#shuru5,#shuru6,#tijiao,#search,#look{

    display: inline-block 
    /* inline-block直接2x2 */

}
</style>

<script>


export default {
    // props:{
    //     msg:{
    //         type:String,
    //         default:()=>{
    //             return ''
    //         }
    //     }
    // },
    // props:['message'],
    // create(){
    //     console.log(this.$route.params.id)
    // },
    data(){
        return{
            // childrenSay:'hello.world',
            search_number:'',
            addNumber:'' ,
            data1:'',
            data2:'',
            data3:'',
            data4:'',
            data5:'',
        }
    },
    mounted(){
        this.drawBgc();
        //this.drawContent();
    },
    methods:{
        jump(url){//跳转链接
            this.$router.push(url)
        },
        submit(){
            //提交每日数据
            this.$http.post('spc/insert',
            {
                id:this.addNumber.toUpperCase(),
                d1:this.data1,
                d2:this.data2,
                d3:this.data3,
                d4:this.data4,
                d5:this.data5,
            },{emulateJSON:true}).then(res=>{
                //提交成功之后重新更新一次
                this.search_number=this.addNumber;
                this.findOne();
                this.addNumber='';
                this.data1='';
                this.data2='';
                this.data3='';
                this.data4='';
                this.data5='';
            })
        },
        // say(){
        //     this.$emit('say'.this.childrenSay);
        // },
        findOne(){
            //先发送到后端一个机台号，然后后端返回一个结果
            this.$http.post('spc/findOne', {
                id:this.search_number.toUpperCase(), //传参,自动变大写
            },{emulateJSON:true}).then(res=>{
                if(res.status==200){//200表示成功返回数据，否则请求不成功
                                    console.log(res.body)
                var re=res.body
                var len=re.record.length
                var xchart= this.$echarts.init(document.getElementById('xchart'));
                var rchart= this.$echarts.init(document.getElementById('rchart'));

                xchart.setOption({
                    title:{
                    text:'机台'+re.no_machine,
                    subtext:'阻抗  规格:'+re.format,
                },
                    xAxis:{
                        type:'category',
                        data:[
                        re.record[len-28][1]+'月'+re.record[len-28][2]+'日',
                        re.record[len-27][1]+'月'+re.record[len-27][2]+'日',
                        re.record[len-26][1]+'月'+re.record[len-26][2]+'日',
                        re.record[len-25][1]+'月'+re.record[len-25][2]+'日',
                        re.record[len-24][1]+'月'+re.record[len-24][2]+'日',
                        re.record[len-23][1]+'月'+re.record[len-23][2]+'日',
                        re.record[len-22][1]+'月'+re.record[len-22][2]+'日',
                        re.record[len-21][1]+'月'+re.record[len-21][2]+'日',
                        re.record[len-20][1]+'月'+re.record[len-20][2]+'日',
                        re.record[len-19][1]+'月'+re.record[len-19][2]+'日',
                        re.record[len-18][1]+'月'+re.record[len-18][2]+'日',
                        re.record[len-17][1]+'月'+re.record[len-17][2]+'日',
                        re.record[len-16][1]+'月'+re.record[len-16][2]+'日',
                        re.record[len-15][1]+'月'+re.record[len-15][2]+'日',
                        re.record[len-14][1]+'月'+re.record[len-14][2]+'日',
                        re.record[len-13][1]+'月'+re.record[len-13][2]+'日',
                        re.record[len-12][1]+'月'+re.record[len-12][2]+'日',
                        re.record[len-11][1]+'月'+re.record[len-11][2]+'日',
                        re.record[len-10][1]+'月'+re.record[len-10][2]+'日',
                        re.record[len-9][1]+'月'+re.record[len-9][2]+'日',
                        re.record[len-8][1]+'月'+re.record[len-8][2]+'日',
                        re.record[len-7][1]+'月'+re.record[len-7][2]+'日',
                        re.record[len-6][1]+'月'+re.record[len-6][2]+'日',
                        re.record[len-5][1]+'月'+re.record[len-5][2]+'日',
                        re.record[len-4][1]+'月'+re.record[len-4][2]+'日',
                        re.record[len-3][1]+'月'+re.record[len-3][2]+'日',
                        re.record[len-2][1]+'月'+re.record[len-2][2]+'日',
                        re.record[len-1][1]+'月'+re.record[len-1][2]+'日',
                        ]
                    },
                    series:[{
                        data:[
                            re.record[len-28][10],
                        re.record[len-27][10],
                        re.record[len-26][10],
                        re.record[len-25][10],
                        re.record[len-24][10],
                        re.record[len-23][10],
                        re.record[len-22][10],
                        re.record[len-21][10],
                        re.record[len-20][10],
                        re.record[len-19][10],
                        re.record[len-18][10],
                        re.record[len-17][10],
                        re.record[len-16][10],
                        re.record[len-15][10],
                        re.record[len-14][10],
                        re.record[len-13][10],
                        re.record[len-12][10],
                        re.record[len-11][10],
                        re.record[len-10][10],
                        re.record[len-9][10],
                        re.record[len-8][10],
                        re.record[len-7][10],
                        re.record[len-6][10],
                        re.record[len-5][10],
                        re.record[len-4][10],
                        re.record[len-3][10],
                        re.record[len-2][10],
                        re.record[len-1][10],
                        
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
                    ],
                    
                });


                //设定第二幅图
                rchart.setOption({
                    title:{
                        text:'range-chart',
                    },
                    xAxis:{
                        type:'category',
                        data:[
                        re.record[len-28][1]+'月'+re.record[len-28][2]+'日',
                        re.record[len-27][1]+'月'+re.record[len-27][2]+'日',
                        re.record[len-26][1]+'月'+re.record[len-26][2]+'日',
                        re.record[len-25][1]+'月'+re.record[len-25][2]+'日',
                        re.record[len-24][1]+'月'+re.record[len-24][2]+'日',
                        re.record[len-23][1]+'月'+re.record[len-23][2]+'日',
                        re.record[len-22][1]+'月'+re.record[len-22][2]+'日',
                        re.record[len-21][1]+'月'+re.record[len-21][2]+'日',
                        re.record[len-20][1]+'月'+re.record[len-20][2]+'日',
                        re.record[len-19][1]+'月'+re.record[len-19][2]+'日',
                        re.record[len-18][1]+'月'+re.record[len-18][2]+'日',
                        re.record[len-17][1]+'月'+re.record[len-17][2]+'日',
                        re.record[len-16][1]+'月'+re.record[len-16][2]+'日',
                        re.record[len-15][1]+'月'+re.record[len-15][2]+'日',
                        re.record[len-14][1]+'月'+re.record[len-14][2]+'日',
                        re.record[len-13][1]+'月'+re.record[len-13][2]+'日',
                        re.record[len-12][1]+'月'+re.record[len-12][2]+'日',
                        re.record[len-11][1]+'月'+re.record[len-11][2]+'日',
                        re.record[len-10][1]+'月'+re.record[len-10][2]+'日',
                        re.record[len-9][1]+'月'+re.record[len-9][2]+'日',
                        re.record[len-8][1]+'月'+re.record[len-8][2]+'日',
                        re.record[len-7][1]+'月'+re.record[len-7][2]+'日',
                        re.record[len-6][1]+'月'+re.record[len-6][2]+'日',
                        re.record[len-5][1]+'月'+re.record[len-5][2]+'日',
                        re.record[len-4][1]+'月'+re.record[len-4][2]+'日',
                        re.record[len-3][1]+'月'+re.record[len-3][2]+'日',
                        re.record[len-2][1]+'月'+re.record[len-2][2]+'日',
                        re.record[len-1][1]+'月'+re.record[len-1][2]+'日',
                        ]
                    },
                    series:[{
                        data:[
                            //第8位是最大值，9位是最小值，相减得到range区间值
                            re.record[len-28][8]-re.record[len-28][9],
                        re.record[len-27][8]-re.record[len-27][9],
                        re.record[len-26][8]-re.record[len-26][9],
                        re.record[len-25][8]-re.record[len-25][9],
                        re.record[len-24][8]-re.record[len-24][9],
                        re.record[len-23][8]-re.record[len-23][9],
                        re.record[len-22][8]-re.record[len-22][9],
                        re.record[len-21][8]-re.record[len-21][9],
                        re.record[len-20][8]-re.record[len-20][9],
                        re.record[len-19][8]-re.record[len-19][9],
                        re.record[len-18][8]-re.record[len-18][9],
                        re.record[len-17][8]-re.record[len-17][9],
                        re.record[len-16][8]-re.record[len-16][9],
                        re.record[len-15][8]-re.record[len-15][9],
                        re.record[len-14][8]-re.record[len-14][9],
                        re.record[len-13][8]-re.record[len-13][9],
                        re.record[len-12][8]-re.record[len-12][9],
                        re.record[len-11][8]-re.record[len-11][9],
                        re.record[len-10][8]-re.record[len-10][9],
                        re.record[len-9][8]-re.record[len-9][9],
                        re.record[len-8][8]-re.record[len-8][9],
                        re.record[len-7][8]-re.record[len-7][9],
                        re.record[len-6][8]-re.record[len-6][9],
                        re.record[len-5][8]-re.record[len-5][9],
                        re.record[len-4][8]-re.record[len-4][9],
                        re.record[len-3][8]-re.record[len-3][9],
                        re.record[len-2][8]-re.record[len-2][9],
                        re.record[len-1][8]-re.record[len-1][9],
                        
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
                    ],

                })
                }else{
                    console.log('机器不存在')
                }
            })
        },
        drawBgc(){ //预先画背景图
            var UCL=[]
            var LCL=[]
            var day=new Date
           
            for(var k=0;k<28;k++){
                UCL.push(0.45)
                LCL.push(0.9)
            }
            var xchart = this.$echarts.init(document.getElementById('xchart'))
            //先画一个空的框架
            xchart.setOption({
                title:{
                    // text:'异步加载',
                    //subtext:'async'
                },
                tooltip:{},
                legend:{
                    data:['X-Chart','UCL','LCL']
                },
                xAxis:{
                    data:[],
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
            var rchart = this.$echarts.init(document.getElementById('rchart'))
            //先画一个空的框架
            rchart.setOption({
                title:{
                    // text:'异步加载',
                    //subtext:'async'
                },
                tooltip:{},
                legend:{
                    data:['R-Chart']
                },
                xAxis:{
                    data:[],
                    axisLabel:{
                        interArrival:0,
                        rotate:-90,
                        interval:0
                    }
                },
                yAxis:[{
                    type:'value',
                    //name:'阻抗',
                    
                    
                }],
                series:[{
                    //在这个里面提前把栏位占好，后面setOption添加即可
                    name:'R-Chart', //这里的name好像要和上面一起切换
                    type:'line',
                    data:[]
                },


                ]
            });
        },
        // drawContent(){
        //     var re;
        //     var xchart= this.$echarts.init(document.getElementById('xchart'));
        //     var num=parseInt(this.message)
        //     this.$http.get('spc/show').then(res=>{
        //         // console.log(res.body)
        //         re=res.body
        //         // console.log(re[num])
        //         xchart.setOption({
        //             title:{
        //                 text:re[this.message].no_machine
        //             },
        //             xAxis:{
        //                 type:'category',
        //                 data:[]
        //             },
        //             series:[{
        //                 data:re[this.message].avgLine
        //             }

        //             ]
        //         });
            
            
        //     })
        // }
    }
}
</script>
