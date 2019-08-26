<template>
<!-- 这个组件是用来封装图标类的，需要利用到深度监听实现数据实时修改 -->
    <div v-bind:id = id v-bind:data=data></div>
</template>
<script>
export default {
    data(){
        return{
            ChartLineGraph:null
        }
    },

    watch:{
        data:{
            handler(newValue, oldValue){
                this.drawLineGraph(this.id,newValue);
            },
            deep:true //用于深度监听
        }
    },
    props:["id","data"],
    mounted(){
        this.drawLineGraph(this.id,this.data);
    },

    methods:{
        drawLineGraph(id,data){
            let _this=this;
            let myChart=document.getElementById(id)
            this.ChartLineGraph = this.$echarts.init(myChart) //基于准备好的dom，初始化echarts实例
            this.ChartLineGraph.setOption(data);
            window.addEventListener("resize",function(){
                _this.ChartLineGraph.resize();
            })
        },

        beforeDestroy(){
            if(this.ChartLineGraph){
                this.ChartLineGraph.clear();
            }
        }
    }
}
</script>
