<template>
  <div class="editxq">
    <el-drawer
      title="联系群众反馈问题处理"
      :visible.sync="drawer2"
      direction="rtl"
      size="700px"
    >
      <div class="">
        <div class="pad_20 flex-bet flex-y-top">
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
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
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
        </div>
        <div>
          <div>
            <div class="pad_20 color_9">xxx集团xx届xx轮xx次各企业/部门督查整改工作结果统计</div>
          </div>
          <div class="pad_20">
            <bar-chart :category="1" />
          </div>
        </div>
        <div class="flex mar_t40">
          <div style="width:400px">
            <pie-chart :category="0" />
          </div>
          <div style="width:400px">
            <pie-chart :category="1" />
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
// import echarts from 'echarts'
import BarChart from '@/views/supervise/patrolResults/components/BarChart'
import PieChart from '@/views/supervise/patrolResults/components/PieChart'
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
  components: { BarChart, PieChart },
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
      lyOptions: [],
      drawer2: false,
      title: '',
      dialogFormVisible: false,
      // echarts1_option: {
      //   color: ["#0095FF", "#FDD835", "#4EC478", "#40C045"],
      //   legend: {
      //     orient: "vertical",
      //     right: 0,
      //     data: ["安卓", "IOS", "其他"],
      //   },
      //   series: [
      //     {
      //       name: "访问来源",
      //       type: "pie",
      //       radius: ["40%", "60%"],
      //       avoidLabelOverlap: false,
      //       label: {
      //         show: false,
      //         position: "center",
      //       },
      //       emphasis: {
      //         label: {
      //           show: true,
      //           fontSize: "16",
      //           fontWeight: "bold",
      //         },
      //       },
      //       labelLine: {
      //         show: false,
      //       },
      //       data: [
      //         { value: 35, name: "安卓" },
      //         { value: 310, name: "IOS" },
      //         { value: 10, name: "其他" },
      //       ],
      //     },
      //   ],
      // },
      chart: null
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
    // init() {
    //   let myChart = echarts.init(document.getElementById("mainEch"));
    //   myChart.setOption(this.echarts1_option, true);
    // },
  }
}
</script>
