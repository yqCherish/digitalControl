<template>
  <div class="editxq">
    <el-drawer
      title="联系群众反馈问题处理"
      :visible.sync="drawer2"
      direction="rtl"
      size="600px"
    >
      <div class="pad_30">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="处理方式：">
            <el-input
              v-model="form.name"
              placeholder="请输入（例如电话、微信...)"
            />
          </el-form-item>
          <el-form-item label="处理结果：">
            <el-input
              v-model="form.desc"
              type="textarea"
              placeholder="问题描述"
            />
          </el-form-item>
          <el-form-item label="状态：">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="已处理" name="type" />
              <el-checkbox label="跟进中" name="type" />
            </el-checkbox-group>
          </el-form-item>
        </el-form>
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
        date1: '',
        type: []
      },
      drawer2: false,
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
        this.drawer2 = true
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
