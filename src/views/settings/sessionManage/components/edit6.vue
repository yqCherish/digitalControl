<template>
  <div class="editxq">
    <el-drawer
      title="配置检查组"
      :visible.sync="drawer"
      direction="rtl"
      size="600px"
    >
      <div class="pad_30">
        <el-form ref="form" :model="form" label-width="140px">
          <el-form-item label="选择添检查组类型：">
            <el-button type="primary" round plain>检查领导组</el-button>
            <el-button type="primary" round plain>检查执行组</el-button>
          </el-form-item>
          <el-form-item label="检查组长名称：">
            <el-input
              v-model="form.name"
              placeholder="请输入检查组名称（限制10字符）"
            />
          </el-form-item>
          <el-form-item label="选择查询名称：">
            <div class="flex">
              <div class="">
                <el-select v-model="form.region" placeholder="查询全部人员">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </div>
              <div class="mar_l10">
                <el-input
                  v-model="form.name"
                  placeholder="请输人员姓名后查询"
                />
              </div>
              <div class="mar_l10">
                <el-button type="primary" size="medium">查询</el-button>
              </div>
            </div>
          </el-form-item>
          <div class="flex-bet">
            <div><el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选 </el-checkbox></div>
            <div>
              <el-button class="" plain size="small">重置所选</el-button>
              <el-button class="" plain size="small">确认添加</el-button>
              <el-button class="" plain size="small">删除所有</el-button>
              <el-button class="" plain size="small">删除所选</el-button>
            </div>
          </div>
          <div class="mar_t10 bor_dd ba_f5">
            <el-checkbox-group v-model="checkList">
              <div class="pad_10">
                <el-checkbox label="汝悦秋1">汝悦秋 </el-checkbox>
                <el-checkbox label="汝悦秋2">汝悦秋 </el-checkbox>
                <el-checkbox label="汝悦秋3">汝悦秋 </el-checkbox>
                <el-checkbox label="汝悦秋4">汝悦秋 </el-checkbox>
                <el-checkbox label="汝悦秋5">汝悦秋 </el-checkbox>
              </div>
              <div class="pad_10">
                <el-checkbox label="楼壮勤1">楼壮勤 </el-checkbox>
                <el-checkbox label="楼壮勤2">楼壮勤 </el-checkbox>
                <el-checkbox label="楼壮勤3">楼壮勤 </el-checkbox>
                <el-checkbox label="楼壮勤4">楼壮勤 </el-checkbox>
                <el-checkbox label="楼壮勤5">楼壮勤 </el-checkbox>
              </div>

              <div class="pad_10">
                <el-checkbox label="越蓉学1">越蓉学 </el-checkbox>
                <el-checkbox label="越蓉学2">越蓉学 </el-checkbox>
                <el-checkbox label="越蓉学3">越蓉学 </el-checkbox>
                <el-checkbox label="越蓉学4">越蓉学 </el-checkbox>
                <el-checkbox label="越蓉学5">越蓉学 </el-checkbox>
              </div>
              <div class="pad_10">
                <el-checkbox label="耿澜1">耿澜 </el-checkbox>
                <el-checkbox label="耿澜2">耿澜 </el-checkbox>
                <el-checkbox label="耿澜3">耿澜 </el-checkbox>
                <el-checkbox label="耿澜4">耿澜 </el-checkbox>
                <el-checkbox label="耿澜5">耿澜 </el-checkbox>
              </div>
              <div class="pad_10">
                <el-checkbox label="宁蓓1">宁蓓 </el-checkbox>
                <el-checkbox label="宁蓓2">宁蓓 </el-checkbox>
                <el-checkbox label="宁蓓3">宁蓓 </el-checkbox>
                <el-checkbox label="宁蓓4">宁蓓 </el-checkbox>
                <el-checkbox label="宁蓓5">宁蓓 </el-checkbox>
              </div>
              <div class="pad_10">
                <el-checkbox label="侍真刚1">侍真刚 </el-checkbox>
                <el-checkbox label="侍真刚2">侍真刚 </el-checkbox>
                <el-checkbox label="侍真刚3">侍真刚 </el-checkbox>
                <el-checkbox label="侍真刚4">侍真刚 </el-checkbox>
                <el-checkbox label="侍真刚5">侍真刚 </el-checkbox>
              </div>
              <div class="pad_10">
                <el-checkbox label="宓莉1">宓莉 </el-checkbox>
                <el-checkbox label="宓莉2">宓莉 </el-checkbox>
                <el-checkbox label="宓莉3">宓莉 </el-checkbox>
                <el-checkbox label="宓莉4">宓莉 </el-checkbox>
                <el-checkbox label="宓莉5">宓莉 </el-checkbox>
              </div>
              <div class="pad_10">
                <el-checkbox label="庚云1">庚云 </el-checkbox>
                <el-checkbox label="庚云2">庚云 </el-checkbox>
                <el-checkbox label="庚云3">庚云 </el-checkbox>
                <el-checkbox label="庚云4">庚云 </el-checkbox>
                <el-checkbox label="庚云5">庚云 </el-checkbox>
              </div>
              <div class="pad_10">
                <el-checkbox label="矫仪1">矫仪 </el-checkbox>
                <el-checkbox label="矫仪2">矫仪 </el-checkbox>
                <el-checkbox label="矫仪3">矫仪 </el-checkbox>
                <el-checkbox label="矫仪4">矫仪 </el-checkbox>
                <el-checkbox label="矫仪5">矫仪 </el-checkbox>
              </div>
            </el-checkbox-group>
          </div>
          <el-form-item label="选择添检查组类型：">
            <div class="flex mar_t10">
              <el-button
                type="primary"
                size="small"
                round
                plain
              >全部</el-button>
              <el-button
                type="primary"
                size="small"
                round
                plain
              >检查领导组</el-button>
              <el-button
                type="primary"
                size="small"
                round
                plain
              >检查执行组</el-button>
              <el-button
                class=""
                plain
                size="small"
              >同步上一轮检查组</el-button>
            </div>
          </el-form-item>
        </el-form>
        <div class="flex mar_t10">
          <div class="flex-1 ba_f mar_10 leftxs pad_20">
            <div class="titlexs flex-bet flex-y-top pad_10 wid">
              <div class="fon_14 wei">检查领导组</div>
              <div>+</div>
            </div>
            <div class="titlexs2 flex-bet flex-y-top pad_10 wid mar_t10">
              <div class="fon_14 wei">第一检查领导组</div>
              <div>
                <el-button type="text">删除</el-button>
              </div>
            </div>
            <div class="titlexs2 flex-bet flex-y-top pad_10 wid mar_t10">
              <div class="fon_14 wei">第二检查领导组</div>
              <div />
            </div>
            <div class="titlexs flex-bet flex-y-top pad_10 wid mar_t10">
              <div class="fon_14 wei">检查领导组</div>
              <div>+</div>
            </div>
            <div class="titlexs2 flex-bet flex-y-top pad_10 wid mar_t10">
              <div class="fon_14 wei">第二检查领导组</div>
              <div />
            </div>

            <div class="flex-x-bottom mar_t40">
              <el-button class="" plain size="small">删除所有</el-button>
            </div>
          </div>
          <div class="flex-1 ba_f">
            <div class="wei fon_14">已添加人员（第一检查领导组：2人）</div>
            <div class="mar_t10">
              <div>
                <el-checkbox
                  v-model="checked1"
                >张三 （检查领导组）
                </el-checkbox>
              </div>
              <div class="mar_t10">
                <el-checkbox
                  v-model="checked2"
                >李四 （检查执行组）
                </el-checkbox>
              </div>
            </div>
            <div class="flex-x-bottom mar_t40">
              <el-button class="" plain size="small">添加人员</el-button>
              <el-button class="" plain size="small">删除所有</el-button>
              <el-button class="" plain size="small">删除所选</el-button>
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
      checked: false,
      dialogFormVisible: false,
      checkList: [],
      isIndeterminate: true,
      checkAll: false,
      checked1: false,
      checked2: false
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
    },
    close() {
      this.$refs['form'].resetFields()
      this.form = this.$options.data().form
      this.dialogFormVisible = false
    },
    handleCheckAllChange(val) {
      if (this.checkAll === true) {
        this.checkList = ['汝悦秋1', '汝悦秋2', '汝悦秋3', '汝悦秋4', '汝悦秋5', '楼壮勤1', '楼壮勤2', '楼壮勤3', '楼壮勤4', '楼壮勤5', '越蓉学1', '越蓉学2', '越蓉学3', '越蓉学4', '越蓉学5', '耿澜1', '耿澜2', '耿澜3', '耿澜4', '耿澜5', '宁蓓1', '宁蓓2', '宁蓓3', '宁蓓4', '宁蓓5', '侍真刚1', '侍真刚2', '侍真刚3', '侍真刚4', '侍真刚5', '宓莉1', '宓莉2', '宓莉3', '宓莉4', '宓莉5', '庚云1', '庚云2', '庚云3', '庚云4', '庚云5', '矫仪1', '矫仪2', '矫仪3', '矫仪4', '矫仪5']
      } else {
        this.checkList = []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.leftxs {
  width: 221px;
  height: 435px;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(177, 177, 177, 0.1);
  border-radius: 0px 0px 4px 4px;
}
.titlexs {
  background: #edf0f3;
  border: 1px dashed #333;
}
.titlexs2 {
  background: #fff;
  border: 1px dashed #333;
}
</style>
