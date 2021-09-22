<template>
  <div class="lxqzgl pad_20">
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
              @change="onSearch"
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
              @change="onSearch"
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
              @click="onSearch"
            >查询</el-button>
            <el-button
              type="primary"
              size="medium"
              @click="xinzeng"
            >新增</el-button>
            <el-button
              type="primary"
              size="medium"
              @click="xiangqing"
            >批量导入</el-button>
          </el-form-item>
        </div>
      </el-form>
      <div class="flex">
        <ul class="flex tablebtn" />
      </div>
    </div>
    <div class="ba_f pad_20">
      <div class="shuju_title mar_b20">
        <div class="shuju_title_text">
          <span>届次管理列表</span>
        </div>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name1" label="届/年" />
      <el-table-column prop="name2" label="届/年" />
      <el-table-column prop="name3" label="督查开始" />
      <el-table-column prop="name4" label="结束时间" />
      <el-table-column prop="name5" label="检查组配置情况" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="flex">
            <el-button
              icon="el-icon-edit"
              @click="handleEdit(scope.row)"
            >配置检查组</el-button>
            <el-button
              icon="el-icon-delete"
            >删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="pad_30">
      <div class="flex-x-bottom">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
        <!-- <el-button size='mini'>确定</el-button> -->
      </div>
    </div>
    <edit6 ref="edit6" @fetchData="fetchData" />
    <edit7 ref="edit7" @fetchData="fetchData" />
    <edit8 ref="edit8" @fetchData="fetchData" />
  </div>
</template>

<script>
import '@/styles/llcss.css' // liuli css
import Edit6 from '@/views/settings/sessionManage/components/edit6'
import Edit7 from '@/views/settings/sessionManage/components/edit7'
import Edit8 from '@/views/settings/sessionManage/components/edit8'
export default {
  name: 'Lxqzgl',
  components: { Edit6, Edit7, Edit8 },
  data() {
    return {
      activeName: 'lxqzgl',
      formInline: {
        date1: '',
        date2: '',
        keyword: '',
        vipLabel: '',
        isBlack: '',
        userChannel: '',
        timeData: ''
      },
      labelOptions: [
        {
          name: '第十五届',
          value: '1'
        }
      ],
      lyOptions: [
        {
          label: '第三轮',
          value: '1'
        }
      ],
      tableData: [
        {
          name1: '15 届',
          name2: '第1轮',
          name3: '2020-06-06',
          name4: '2020-07-08',
          name5: '领导组1个 执行组0个'
        },
        {
          name1: '15 届',
          name2: '第1轮',
          name3: '2020-06-06',
          name4: '2020-07-08',
          name5: '领导组1个 执行组0个'
        },
        {
          name1: '15 届',
          name2: '第1轮',
          name3: '2020-06-06',
          name4: '2020-07-08',
          name5: '领导组1个 执行组0个'
        }
      ],
      currentPage4: 4
    }
  },
  computed: {},
  created() {},
  methods: {
    onSearch() {},
    handleSeeEdit(row) {
      this.$router.push(`/userdetails?id=${row.id}`)
    },
    fetchData() {},
    handleEdit(row) {
      this.$refs['edit6'].showEdit(row)
    },
    xinzeng(row) {
      this.$refs['edit7'].showEdit(row)
    },
    xiangqing(row) {
      this.$refs['edit8'].showEdit(row)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
