<template>
  <div class="editxq">
    <el-drawer
      title="创建/编辑计划详情"
      :visible.sync="drawer2"
      direction="rtl"
      size="700px"
    >
      <div class="pad_20" />
    </el-drawer>
    <el-dialog
      title="详情"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <div>
        <div>10/10 请谈一谈你对本企业/部门党建工作的看法</div>
        <div class="mar_t10 bor_b_e4 ba_f5 pad_10 lh25">
          列候意府统先度院打九日子经周矿消时划儿快已积五许金劳都便党必长成联变月新感族间儿器把。千别人上运容个般史持现可拉华须名手而安界价严委团包系小文常科公育情没意信。立去速消开率又查就九个程律工分这满条般由快命研列住集几目物两流导不出常家行己合了马常系。
          传派矿基叫张加代记切都级现提达集不车增后电农龙才无车量组省通治容也任参与场快干设道实众应领光百自世更己水美的日平利活成意何以亲层志存无化大土以我。看此劳治代看积且品规政还始之动型并带可石间位性价生马路个代几究究应队参满众叫复示作料机传元意质效面铁。报证引段共面米科等只风业许米下提空面毛日并管土与白然至本应保再的总民非压维间部计段增位周越志件的做维后然府路量。
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          name1: '费珊政',
          name2: 'A',
          name3: 'A',
          name4: 'A',
          name5: 'A',
          name6: 'A',
          name7: 'A',
          name8: 'A',
          name9: 'A',
          name10: 'A'
        },
        {
          name1: '矫悦惠',
          name2: 'B',
          name3: 'B',
          name4: 'B',
          name5: 'B',
          name6: 'B',
          name7: 'B',
          name8: 'B',
          name9: 'B',
          name10: 'B'
        },
        {
          name1: '巴君',
          name2: 'A',
          name3: 'A',
          name4: 'A',
          name5: 'A',
          name6: 'A',
          name7: 'A',
          name8: 'A',
          name9: 'A',
          name10: 'A'
        },
        {
          name1: '滕乐',
          name2: 'C',
          name3: 'C',
          name4: 'C',
          name5: 'C',
          name6: 'C',
          name7: 'C',
          name8: 'C',
          name9: 'C',
          name10: 'C'
        },
        {
          name1: '覃影',
          name2: 'C',
          name3: 'C',
          name4: 'C',
          name5: 'C',
          name6: 'C',
          name7: 'C',
          name8: 'C',
          name9: 'C',
          name10: 'C'
        }
      ],
      drawer2: false,
      title: '',
      dialogFormVisible: false,
      dialogVisible: false
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
    },
    handleSeeEdit() {
      this.dialogVisible = true
    }
  }
}
</script>
