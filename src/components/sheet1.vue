<template>
<!-- 这里 class="demo-form-inline"这句话没写没影响 -->
<el-form ref="form" :inline="true"  label-width="80px">
  <el-button type="primary" align="left" @click="jump('/')">返回主菜单</el-button>
  <el-form-item label="检查项目">
    <el-input :span="12" v-model="form.name_project"></el-input>
  </el-form-item>
  <el-form-item label="检查站点">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="站一" value="shanghai"></el-option>
      <el-option label="站二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>

  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item label="工作班次">
    <el-radio-group v-model="form.daywork">
      <el-radio label="白班"></el-radio>
      <el-radio label="夜班"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交表单</el-button>
    <el-button>取消</el-button>
  </el-form-item>


</el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name_project: '',
          No_machine:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          daywork: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        
        this.$http.post('book/total',{form},{emulateJSON:true}).then(res=>{
            if(res.status==200){
                console.log('submit!')
            }else{
                alert('提交失败')
            }
        })
      },
      jump(url){
              this.$router.push(url)
      },

    }
  }
</script>

