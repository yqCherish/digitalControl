<template>
  <div class="editxq">
    <el-drawer
      title="联系群众反馈问题处理"
      :visible.sync="drawer2"
      direction="rtl"
      size="700px"
    >
      <div class="pad_30">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="问卷名称：">
            <el-input
              v-model="form.name"
              placeholder="关于深入学习习近平新思想、新理念、新方法现实中存在问题调查"
            />
          </el-form-item>
          <el-form-item label="有效时间：">
            <el-input
              v-model="form.name"
              placeholder="2020-01-01 ~2021-02-01"
            />
          </el-form-item>
          <el-form-item label="" label-width="0">
            <el-select v-model="form.region" placeholder="问题类型">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
            <el-select
              v-model="form.region"
              class="mar_l10"
              placeholder="请输入选项数量"
            >
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
            <el-select
              v-model="form.region"
              class="mar_l10"
              placeholder="选项排序类型（无/字母/数值）"
            >
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <div class="flex-x-bottom">
            <el-button
              type="primary"
              icon="el-icon-plus"
              @click="handleEdit(scope.row)"
            >添加问题</el-button>
          </div>
        </el-form>
        <div class="ba_f5 mar_t10">
          <div class="flex subjectcolor fon_14">
            <div class="pad_5">编辑区</div>
            <div class="pad_5">清空所有</div>
          </div>
          <div>
            <div class="mar_t10">
              <div class="flex flex-center">
                <div>问题1（单选）：</div>
                <div>
                  <el-input v-model="name" placeholder="问题描述" />
                </div>
                <div class="mar_l10">
                  <i class="el-icon-delete" />
                  <i class="el-icon-success mar_l10" />
                </div>
              </div>
            </div>
            <div class="mar_l50">
              <div class="flex-center flex mar_t10">
                <div>
                  <el-radio v-model="radio" label="" />
                </div>
                <div>
                  <el-input v-model="name" placeholder="选项1" />
                </div>
              </div>
              <div class="flex-center flex mar_t10">
                <div>
                  <el-radio v-model="radio" label="" />
                </div>
                <div>
                  <el-input v-model="name" placeholder="选项1" />
                </div>
              </div>
              <div class="flex-center flex mar_t10">
                <div>
                  <el-radio v-model="radio" label="" />
                </div>
                <div>
                  <el-input v-model="name" placeholder="选项1" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="mar_t10">
              <div class="flex flex-center">
                <div>问题2（单选）：</div>
                <div>
                  <el-input v-model="name" placeholder="问题描述" />
                </div>
                <div class="mar_l10">
                  <i class="el-icon-delete" />
                  <i class="el-icon-success mar_l10" />
                </div>
              </div>
            </div>
            <div class="mar_l50">
              <div class="flex-center flex mar_t10">
                <div>
                  <el-radio v-model="radio" label="" />
                </div>
                <div>
                  <el-input v-model="name" placeholder="选项1" />
                </div>
              </div>
              <div class="flex-center flex mar_t10">
                <div>
                  <el-radio v-model="radio" label="" />
                </div>
                <div>
                  <el-input v-model="name" placeholder="选项1" />
                </div>
              </div>
              <div class="flex-center flex mar_t10">
                <div>
                  <el-radio v-model="radio" label="" />
                </div>
                <div>
                  <el-input v-model="name" placeholder="选项1" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="mar_t10">
              <div class="flex flex-center">
                <div>问题2（单选）：</div>
                <div>
                  <el-input v-model="name" placeholder="问题描述" />
                </div>
                <div class="mar_l10">
                  <i class="el-icon-delete" />
                  <i class="el-icon-success mar_l10" />
                </div>
              </div>
            </div>
            <div class="mar_l50">
              <div class="flex-center flex mar_t10">
                <div>
                  <el-input
                    v-model="form.desc"
                    type="textarea"
                    placeholder="请输入相关内容（限2000字符）"
                  />
                </div>
              </div>
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
        date1: '',
        type: []
      },
      name: '',
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
