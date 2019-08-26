<template>
  <!--这个是钉卷站的表单模板，暂时先测试用-->
    
<el-container>
      <h1 style="color:red">钉卷表单</h1>
      <p style="color: blue;">{{msg}}</p>
      <el-row>

        <p v-for="l in list" :key=l.id>{{l.id}}+++{{l.name}}</p>
      </el-row>
      <el-dialog :visible.sync="visible" title="hello element">

        <p>Try Element</p>
      </el-dialog>
    
</el-container>
</template>
<script type="text/ecmascript-6">
    export default{ 
        data() {
            return {
              msg:'测试一下',
              visible: false,
              radio:'1',
              list:[
                // {id:1 ,name:'haha'}
              ]
            }
        },
      created(){
          this.getInfo('user/show')
      },
      methods:{
          getInfo(url){
            this.$http.get(url).then(res=>{
              var data=res.body
              if(res.status == 200){
                data.forEach(item=>{
                  this.list.push({
                    id:item.id,
                    name:item.name
                  })
                })
              }else{
                console.log('导入失败')
              }
            })
          },
        // getByAjax(c_url){
        //     $.ajax({
        //       url:c_url,
        //       type:'get',
        //       data:{
        //         id: this.list.id,
        //         name:this.list.name
        //       },
        //       success:function(msg){
        //         $("#app2").html(msg);
        //       }
        //     })
        // },
      }
    }
</script>
