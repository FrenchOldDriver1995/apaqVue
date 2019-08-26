<template>
    <el-form :inline="true" >
        <el-form-item label="id号">
        <el-input v-model="form.id" ></el-input>   
        </el-form-item>
        <el-form-item label="表单名">
        <el-input v-model="form.sheet_name" ></el-input>
        </el-form-item>
        <el-form-item label="机台名">
        <el-input v-model="form.No_machine" ></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" round @click="submit('/book/total')">提交</el-button>
        </el-form-item>
    </el-form>

    
    
</template>
<script>
export default {
    data(){
        return{
            form:{
                id:'',
                sheet_name:'',
                time:'',
                No_machine:'',
            }
        }
    },
    methods:{
        submit(url){
            this.$http.post(url, {
                sheet_name: this.form.sheet_name,
                id:this.form.id,
                No_machine:this.form.No_machine,
                time:new Date().toDateString(),
            },
    
            {
                emulateJSON:true
            }
            ).then(res=>{
                if(res.status == 200){
                    console.log('success')
                }else{
                    alert('fail')
                }
            })
        }
    }
}
</script>
