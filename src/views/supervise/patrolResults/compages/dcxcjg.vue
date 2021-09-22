<template>
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
          <el-form-item label="">
            <el-input
              v-model="formInline.keyword"
              size="medium"
              placeholder="请输入督察整改对象"
              @input="onSearch"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="medium"
              @click="onSearch"
            >查询</el-button>
          </el-form-item>
        </div>
      </el-form>
      <div class="flex">
        <ul class="flex tablebtn" />
      </div>
    </div>
    <div class="ba_f pad_20">
      <div class="flex-bet">
        <div class="flex-g-1 flex">
          <div>
            <div class="fon_12 color_9">督查整改届次</div>
            <div class="fon_14 wei c3 mar_t10">十五届第三轮第一次</div>
          </div>
          <div class="mar_l50">
            <div class="fon_12 color_9">督查整改计划指标</div>
            <div class="fon_14 wei c3 mar_t10">30个（总分100分）</div>
          </div>
        </div>
        <div class="flex-g-0">
          <el-button type="primary" size="medium">督查整改结果统计分</el-button>
        </div>
      </div>
    </div>
    <el-table
      :data="tableData"
      stripe
      align="center"
      style="width: 100%"
      class="mar_t15"
    >
      <el-table-column prop="date" label="被巡党组织" width="200" />
      <el-table-column label="问题程度类型数量">
        <el-table-column prop="bcz1" label="不存在（个）" />
        <el-table-column prop="bcz2" label="存在但不重要(个)" />
        <el-table-column prop="bcz3" label="存在且比较严重(个)" />
        <el-table-column prop="bcz4" label="存在且非常严重(个)" />
      </el-table-column>
      <el-table-column prop="bcz5" label="实际得分" width="200" />
      <el-table-column prop="name" label="报告类型" width="200" />
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <div class="flex">
            <el-button
              type="text"
              @click="handleEdit(scope.row)"
            >数据透视</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <edit2 ref="edit2" />
  </div>
</template>

<script>
import Edit2 from '@/views/supervise/patrolResults/components/edit2'
export default {
  components: { Edit2 },
  data() {
    return {
      formInline: {
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
          date: '贵州省xxxx企业',
          bcz1: '25',
          bcz2: '0',
          bcz3: '0',
          bcz4: '5',
          bcz5: '85.3',
          name: '面上问题报告'
        },
        {
          date: '贵州省xxxx企业',
          bcz1: '25',
          bcz2: '0',
          bcz3: '0',
          bcz4: '5',
          bcz5: '85.3',
          name: '面上问题报告'
        },
        {
          date: '贵州省xxxx企业',
          bcz1: '25',
          bcz2: '0',
          bcz3: '0',
          bcz4: '5',
          bcz5: '85.3',
          name: '面上问题报告'
        }
      ]
    }
  },
  methods: {
    handleEdit(row) {
      this.$refs['edit2'].showEdit(row)
    },
    onSearch() {}
  }
}
</script>
