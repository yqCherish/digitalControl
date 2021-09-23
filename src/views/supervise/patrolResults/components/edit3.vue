<template>
  <div class="editxq">
    <el-drawer
      title="贵阳块数据城市建设有限公督查巡查结果数据分析"
      :visible.sync="drawer2"
      direction="rtl"
      size="900px"
    >
      <div class="">
        <!-- <div class="pad_20 flex-bet flex-y-top">
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline searchform"
          >
            <div>
              <el-form-item label="">
                <el-select
                  v-model="formInline.vipLabel"
                  clearable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in labelOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="" class="mar_l20">
                <el-select
                  v-model="formInline.userChannel"
                  clearable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in lyOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  size="medium"
                >查询</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div> -->
        <div>
          <div>
            <div class="pad_20 color_9">xxx集团xx届xx轮xx次各企业/部门督查整改工作结果统计</div>
          </div>
          <div class="pad_20">
            <bar-chart :category="3" />
          </div>
        </div>
        <!-- <div class="flex mar_t40">
          <div style="width:500px">
            <pie-chart :category="0" />
          </div>
          <div style="width:500px">
            <pie-chart :category="1" />
          </div>
        </div> -->
      </div>
    </el-drawer>
  </div>
</template>

<script>
// import echarts from 'echarts'
import BarChart from '@/views/supervise/patrolResults/components/BarChart'
// import PieChart from '@/views/supervise/patrolResults/components/PieChart'
export default {
  // mounted() {
  //    this.$nextTick(() => {
  //     this.initChart();
  //   })
  // },
  //   beforeDestroy() {
  //   if (!this.chart) {
  //     return
  //   }
  //   this.chart.dispose()
  //   this.chart = null
  // },
  components: { BarChart },
  data() {
    return {
      formInline: {
        name: '',
        price: '',
        stock: '',
        date1: '',
        type: []
      },
      labelOptions: [
        {
          name: '第十五届',
          value: '1'
        }
      ],
      lyOptions: [
        {
          name: '第三次',
          value: '1'
        }
      ],
      drawer2: false,
      title: '',
      dialogFormVisible: false,
      chart: null
    }
  },
  // name: "edit",
  created() {},
  methods: {
    showEdit(row) {
      if (!row) {
        this.drawer2 = true
      } else {
        this.title = '贵阳块数据城市建设有限公督查巡查结果数据分析'
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
    // init() {
    //   let myChart = echarts.init(document.getElementById("mainEch"));
    //   myChart.setOption(this.echarts1_option, true);
    // },
  }
}
</script>
