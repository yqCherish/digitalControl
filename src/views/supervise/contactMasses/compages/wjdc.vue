<template>
  <div class="">
    <div class="pad_20 flex-bet flex-y-top">
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline searchform"
      >
        <div>
          <el-form-item label="有效时间">
            <el-date-picker
              v-model="formInline.date1"
              type="date"
              placeholder="选择日期"
            />
            <el-date-picker
              v-model="formInline.date2"
              class="mar_l20"
              type="date"
              placeholder="选择日期"
            />
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="formInline.keyword"
              size="medium"
              placeholder="请输入问卷名称"
              @input="onSearch"
            />
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
              @click="onSearch"
            >新增问卷</el-button>
          </el-form-item>
        </div>
      </el-form>
      <div class="flex">
        <ul class="flex tablebtn" />
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name1" label="创建时间" width="180" />
      <el-table-column prop="name2" label="问卷名称" />
      <el-table-column prop="name3" label="有效时间" />
      <el-table-column prop="name4" label="答题数量" />
      <el-table-column prop="name5" label="答题人数" />
      <el-table-column prop="name6" label="问卷状态" />
      <el-table-column prop="name7" label="正常/禁用" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="flex">
            <el-button
              icon="el-icon-position"
              @click="handleEdit3(scope.row)"
            >发布</el-button>
            <el-button
              icon="el-icon-edit"
              @click="handleEdit4(scope.row)"
            >编辑</el-button>
            <el-button
              icon="el-icon-delete"
              @click="handleEdit(scope.row)"
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
    <edit3 ref="edit3" @fetchData="fetchData" />
    <edit4 ref="edit4" @fetchData="fetchData" />
  </div>
</template>

<script>
import '@/styles/llcss.css' // liuli css
import Edit3 from '@/views/supervise/contactMasses/components/edit3'
import Edit4 from '@/views/supervise/contactMasses/components/edit4'
export default {
  components: { Edit3, Edit4 },
  data() {
    return {
      activeName: 'wjdc',
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
          name1: '2020-01-01 10:00:00',
          name2: '关于深入学习习近平新思想、新理念、新方法现实中存在问题调查',
          name3: '2021-01-01  ~2021-02-01',
          name4: '匿名',
          name5: '0',
          name6: '待发布',
          name7: '正常'
        },
        {
          name1: '2020-01-01 10:00:00',
          name2: '关于深入学习习近平新思想、新理念、新方法现实中存在问题调查',
          name3: '2021-01-01  ~2021-02-01',
          name4: '匿名',
          name5: '0',
          name6: '待发布',
          name7: '正常'
        },
        {
          name1: '2020-01-01 10:00:00',
          name2: '关于深入学习习近平新思想、新理念、新方法现实中存在问题调查',
          name3: '2021-01-01  ~2021-02-01',
          name4: '匿名',
          name5: '0',
          name6: '待发布',
          name7: '正常'
        }
      ]
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
    handleEdit3(row) {
      this.$refs['edit3'].showEdit(row)
    },
    handleEdit4(row) {
      this.$refs['edit4'].showEdit(row)
    }
  }
}
</script>
