<template>
  <div class="editxq">
    <el-drawer
      title="届轮次新增"
      :visible.sync="drawer"
      direction="rtl"
      size="600px"
    >
      <div class="pad_30">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="届次名词：">
            <el-input
              v-model="form.name"
              placeholder="请输入名称（例如2021届），限10字符"
            />
          </el-form-item>
          <el-form-item label="每届">
            <div class="flex">
              <div>
                <el-input
                  v-model="form.name"
                  placeholder="请输入名称（例如2021届），限10字符"
                />
              </div>
              <div class="mar_l20">年 / 轮</div>
            </div>
          </el-form-item>
          <el-form-item label="每轮">
            <div class="flex">
              <div>
                <el-input
                  v-model="form.name"
                  placeholder="请输入名称（例如2021届），限10字符"
                />
              </div>
              <div class="mar_l20">次</div>
            </div>
          </el-form-item>
          <div class="mar_20 fon_14 wei">整改证明材料：</div>
          <el-form-item label="第2次：">
            <div class="flex-bet">
              <div class="flex-grow-1">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="开始时间"
                  style="width: 100%"
                />
              </div>
              <div class="flex-grow-1 mar_l10">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="结束时间"
                  style="width: 100%"
                />
              </div>
            </div>
          </el-form-item>
          <el-form-item label="第2次：">
            <div class="flex-bet">
              <div class="flex-grow-1">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="开始时间"
                  style="width: 100%"
                />
              </div>
              <div class="flex-grow-1 mar_l10">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="结束时间"
                  style="width: 100%"
                />
              </div>
            </div>
          </el-form-item>
          <el-form-item label="第3次：">
            <div class="flex-bet">
              <div class="flex-grow-1">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="开始时间"
                  style="width: 100%"
                />
              </div>
              <div class="flex-grow-1 mar_l10">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="结束时间"
                  style="width: 100%"
                />
              </div>
            </div>
          </el-form-item>
          <el-form-item label="第4次：">
            <div class="flex-bet">
              <div class="flex-grow-1">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="开始时间"
                  style="width: 100%"
                />
              </div>
              <div class="flex-grow-1 mar_l10">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="结束时间"
                  style="width: 100%"
                />
              </div>
            </div>
          </el-form-item>
        </el-form>
        <div class="pad_20 flex-bet" style="margin-top:100px">
          <div class="fon_12 color_9">
            <div>提示：新增时操作【确认保存】直接添加至届次管理列表，</div>
            <div>届次列表已存在将同步最新配置结果覆盖原有配置</div>
          </div>
          <div>
            <el-button type="primary" size="medium">保存</el-button>
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
