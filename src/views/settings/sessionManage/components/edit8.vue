<template>
  <div class="editxq">
    <el-drawer
      title="创建/编辑计划详情"
      :visible.sync="drawer"
      direction="rtl"
      size="600px"
    >
      <div class="pad_30">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="第一步：">
            <div class="flex">
              <div>下载届轮次管理模板</div>
              <div class="mar_l20 subjectcolor">届轮次导入模板.XLS</div>
              <div class="mar_l20 subjectcolor">下载</div>
            </div>
          </el-form-item>
          <el-form-item label="第二步：">
            <div>导入下载后填写好的模板</div>
          </el-form-item>
        </el-form>
        <div class="pad_20 ba_f5 flex-center" style="border:1px dashed #999">
          <div class="t-c wid">
            <!-- <div class="el-icon-s-order fon_30"></div> -->
            <div>单击或拖动文件到此区域</div>
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
