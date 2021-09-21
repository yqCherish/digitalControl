<template>
  <div class="editxq">
    <el-drawer
      title="问题详情"
      :visible.sync="drawer"
      direction="rtl"
      size="600px"
    >
      <div class="pad_30">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="问题ID：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="备注名称：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="提交时间：">
            <div class="flex-bet">
              <div class="flex-grow-1">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="选择日期"
                  style="width: 100%"
                />
              </div>
              <div class="flex-grow-1">
                <el-form-item label="处理状态" label-width="80px">
                  <el-input v-model="form.name" />
                </el-form-item>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="反馈方式：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="反馈人姓名：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="联系地址：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="电子邮箱：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="反馈对象：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="对象名称：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="反馈问题描述：">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
        </el-form>
        <div class="bor_t_de4 pad_20">
          <div class="flex">
            <div class="fon_14 wei">反馈材料:</div>
            <div class="mar_l20">
              <el-input v-model="form.name" />
            </div>
            <div class="mar_l20">
              <!-- <el-button size="medium" icon="el-icon-search">下载</el-button> -->
              <el-button icon="el-icon-download" plain>下载</el-button>
            </div>
          </div>
        </div>
        <div class="bor_t_de4 pad_20">
          <div class="flex">
            <div class="fon_14 wei">处理进度：:</div>
          </div>
          <div class="bor_e5 ba_f4 pad_20 mar_t10">
            <div class="flex">
              <p class="fon_12 wei">2月</p>
              <p class="labelwex">21</p>
              <p class="wei">2020-02-15 10:00:00 已处理</p>
            </div>
            <div class="mar_l50 c9 fon_12">
              处理结果：完美解决，问题存在，待提交督查整改
            </div>
            <div class="flex mar_t10 mar_l20">
              <p class="labelwex">21</p>
              <p class="wei">2020-02-15 10:00:00 已处理</p>
            </div>
            <div class="mar_l50 c9 fon_12">
              处理结果：完美解决，问题存在，待提交督查整改
            </div>
            <div class="flex mar_t10">
              <p class="fon_12 wei">1月</p>
              <p class="labelwex">21</p>
              <p class="wei">2020-02-15 10:00:00 已处理</p>
            </div>
            <div class="mar_l50 c9 fon_12">
              处理结果：完美解决，问题存在，待提交督查整改
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      form: {
        name: '',
        price: '',
        stock: '',
        date1: ''
      },
      drawer: false,
      title: '',
      dialogFormVisible: false
    }
  },
  // name: "edit",
  created() {},
  methods: {
    showEdit(row) {
      if (!row) {
        this.title = '添加'
        this.drawer = true
      } else {
        this.title = '编辑'
        this.drawer = true
        // this.form = Object.assign({}, row);
      }
      this.dialogFormVisible = true
    },
    close() {
      this.$refs['form'].resetFields()
      this.form = this.$options.data().form
      this.dialogFormVisible = false
    }
  }
}
</script>
<style lang="scss">
.editxq {
  .labelwex {
    color: #1d65ee;
    padding: 2px;
    margin: 0 5px;
    border: 1px solid #1d65ee;
  }
}
</style>
