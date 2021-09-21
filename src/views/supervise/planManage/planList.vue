<template>
  <div class="wjdc pad_20">
    <div v-if="type == 1">
      <div class="pad_20 flex-bet flex-y-top">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline searchform"
        >
          <div>
            <el-form-item label="">
              <el-select
                v-model="formInline.lyOptions1"
                clearable
                placeholder="请选择"
                @change="onSearch"
              >
                <el-option
                  v-for="item in lyOptions1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="" class="mar_l20">
              <el-select
                v-model="formInline.lyOptions2"
                clearable
                placeholder="请选择"
                @change="onSearch"
              >
                <el-option
                  v-for="item in labelOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="" class="mar_l20">
              <el-select
                v-model="formInline.lyOptions3"
                clearable
                placeholder="请选择"
                @change="onSearch"
              >
                <el-option
                  v-for="item in lyOptions2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="" class="mar_l20">
              <el-select
                v-model="formInline.lyOptions4"
                clearable
                placeholder="请选择"
                @change="onSearch"
              >
                <el-option
                  v-for="item in lyOptions3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-input
                v-model="formInline.keyword"
                size="medium"
                placeholder="请输入指标细则名称"
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
                @click="handleEdit5"
              >创建计划</el-button>
              <el-button
                type="primary"
                size="medium"
                @click="jhpz"
              >巡查计划流程配置</el-button>
            </el-form-item>
          </div>
        </el-form>
        <div class="flex">
          <ul class="flex tablebtn" />
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name1" label="创建时间" width="180" />
        <el-table-column prop="name2" label="计划名称" />
        <el-table-column prop="name3" label="届次信息" />
        <el-table-column prop="name4" label="是否调用分值模板" />
        <el-table-column prop="name5" label="指标细则数量" />
        <el-table-column prop="name6" label="指标细则分值合计" />
        <el-table-column prop="name7" label="计划开始/结束时间">
          <template slot-scope="scope">
            <div class="">2021-04-01 10:00:00/{{ scope.row.name }}</div>
            <div class="">2021-04-08 10:00:00</div>
          </template>
        </el-table-column>
        <el-table-column prop="name8" label="任务节点周期">
          <template slot-scope="scope">
            <div class="">检查准备：年月日 时分秒~年月日 时分秒{{ scope.row.name }}</div>
            <div class="">检查了解：年月日 时分秒~年月日 时分秒</div>
            <div class="">检查报告：年月日 时分秒~年月日 时分秒</div>
            <div class="">检查反馈：年月日 时分秒~年月日 时分秒</div>
            <div class="">检查处置：年月日 时分秒~年月日 时分秒</div>
          </template>
        </el-table-column>
        <el-table-column prop="name9" label="状态" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="">
              <div>
                <el-button
                  icon="el-icon-edit"
                  type="text"
                  @click="handleEdit5(scope.row)"
                >编辑</el-button>
              </div>
              <div>
                <el-button
                  icon="el-icon-position"
                  type="text"
                  @click="handleEdit3(scope.row)"
                >发布</el-button>
              </div>
              <div>
                <el-button
                  icon="el-icon-odometer"
                  type="text"
                  @click="handleEdit3(scope.row)"
                >计划指标</el-button>
              </div>
              <div>
                <el-button
                  icon="el-icon-stopwatch"
                  type="text"
                  @click="handleEdit3(scope.row)"
                >计划流程</el-button>
              </div>
              <el-button
                icon="el-icon-delete"
                class="color_rb"
                type="text"
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
          />
          <!-- <el-button size='mini'>确定</el-button> -->
        </div>
      </div>
      <edit5 ref="edit5" @fetchData="fetchData" />
    </div>
    <div v-if="type == 2">
      <jhpz />
    </div>
  </div>
</template>

<script>
import '@/styles/llcss.css' // liuli css
import Edit5 from '@/views/supervise/planManage/components/edit5'
import jhpz from '@/views/supervise/planManage/jhpz'
export default {
  name: 'Wjdc',
  components: { Edit5, jhpz },
  data() {
    return {
      activeName: 'wjdc',
      formInline: {
        date1: '',
        date2: '',
        keyword: '',
        lyOptions1: '',
        lyOptions2: '',
        lyOptions3: '',
        lyOptions4: '',
        isBlack: '',
        userChannel: '',
        timeData: ''
      },
      currentPage4: 1,
      lyOptions1: [
        {
          label: '待发布',
          value: '1'
        },
        {
          label: '已发布',
          value: '2'
        },
        {
          label: '审核中',
          value: '3'
        }
      ],
      labelOptions: [
        {
          label: '第十五届',
          value: '1'
        },
        {
          label: '第十六届',
          value: '3'
        },
        {
          label: '第十七届',
          value: '4'
        }
      ],
      lyOptions2: [
        {
          label: '第三轮',
          value: '1'
        }
      ],
      lyOptions3: [
        {
          label: '第一次',
          value: '1'
        },
        {
          label: '第二次',
          value: '2'
        },
        {
          label: '第三次',
          value: '3'
        }
      ],
      tableData: [
        {
          name1: '2020-01-01 10:00:00',
          name2: '2021第二次巡查',
          name3: '十五届/第三轮/第2次',
          name4: '否',
          name5: '165',
          name6: '—',
          name7: '2021-04-01 10:00:00/2021-04-08 10:00:00',
          name8:
            '检查准备：年月日 时分秒~年月日 时分秒检查了解：年月日 时分秒~年月日 时分秒检查报告：年月日 时分秒~年月日 时分秒检查反馈：年月日 时分秒~年月日 时分秒检查处置：年月日 时分秒~年月日 时分秒',
          name9: '待发布'
        },
        {
          name1: '2020-01-01 10:00:00',
          name2: '2021第二次巡查',
          name3: '十五届/第三轮/第2次',
          name4: '否',
          name5: '165',
          name6: '—',
          name7: '2021-04-01 10:00:00/2021-04-08 10:00:00',
          name8:
            '检查准备：年月日 时分秒~年月日 时分秒检查了解：年月日 时分秒~年月日 时分秒检查报告：年月日 时分秒~年月日 时分秒检查反馈：年月日 时分秒~年月日 时分秒检查处置：年月日 时分秒~年月日 时分秒',
          name9: '待发布'
        },
        {
          name1: '2020-01-01 10:00:00',
          name2: '2021第二次巡查',
          name3: '十五届/第三轮/第2次',
          name4: '否',
          name5: '165',
          name6: '—',
          name7: '2021-04-01 10:00:00/2021-04-08 10:00:00',
          name8:
            '检查准备：年月日 时分秒~年月日 时分秒检查了解：年月日 时分秒~年月日 时分秒检查报告：年月日 时分秒~年月日 时分秒检查反馈：年月日 时分秒~年月日 时分秒检查处置：年月日 时分秒~年月日 时分秒',
          name9: '待发布'
        }
      ],
      type: 1
    }
  },
  computed: {},
  created() {},
  methods: {
    onSearch() {},
    fetchData() {},
    handleEdit5(row) {
      this.$refs['edit5'].showEdit(row)
    },
    jhpz() {
      this.type = 2
    }
  }
}
</script>
