<template>
  <div class="body">
    <el-dialog
      :title="title"
      :visible.sync="dialogFormVisible"
      width="600px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="商品名称" prop="name">
          <el-input v-model.trim="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input-number v-model="form.price" :precision="2" :step="1" style="width: 300px" :min="0.00" />
        </el-form-item>
        <el-form-item label="库存" prop="stock">
          <el-input-number v-model="form.stock" :min="0" style="width: 300px" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="close">取 消</el-button>
        <el-button size="medium" type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'Edit',
  components: {},
  data() {
    return {
      form: {
        name: '',
        price: '',
        stock: ''
      },
      type: '',
      title: '',
      dialogFormVisible: false
    }
  },
  created() {

  },
  methods: {
    showEdit(row) {
      if (!row) {
        this.title = '添加'
      } else {
        this.title = '编辑'
        this.form = Object.assign({}, row)
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
