<template>
  <div>
    <div class="pad_20 flex-bet flex-y-top">
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline searchform"
      >
        <div>
          <el-form-item label="提交时间">
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
          <el-form-item label="反馈方式">
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
          <el-form-item label="反馈对象" class="mar_l20">
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
          <el-form-item label="处理状态" class="mar_l20">
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
          <el-form-item label="关键词">
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
      <div class="flex">
        <div class="flex fon_14 color_6">
          <div>待处理：</div>
          <div class="subjectcolor"><span class="fon_26">2</span>个</div>
        </div>
        <div class="flex fon_14 color_6 mar_l30">
          <div>已处理</div>
          <div class="subjectcolor"><span class="fon_26">1</span>个</div>
        </div>
        <div class="flex fon_14 color_6 mar_l30">
          <div>跟进中</div>
          <div class="subjectcolor"><span class="fon_26">0</span>个</div>
        </div>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name1" label="提交时间" width="180" />
      <el-table-column prop="name2" label="反馈方式" />
      <el-table-column prop="name3" label="反馈人姓名" />
      <el-table-column prop="name4" label="联系方式" />
      <el-table-column prop="name5" label="联系地址" />
      <el-table-column prop="name6" label="电子邮箱" />
      <el-table-column prop="name7" label="反馈对象" />
      <el-table-column prop="name8" label="对象名称" />
      <el-table-column prop="name9" label="处理状态" />
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <div class="flex">
            <el-button
              type="text"
              @click="handleEdit2(scope.row)"
            >处理</el-button>
            <el-button
              type="text"
              @click="handleEdit(scope.row)"
            >详情</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <edit ref="edit" @fetchData="fetchData" />
    <edit2 ref="edit2" @fetchData="fetchData" />
  </div>
</template>

<script>
import '@/styles/llcss.css' // liuli css
import Edit from '@/views/supervise/contactMasses/components/edit'
import Edit2 from '@/views/supervise/contactMasses/components/edit2'
export default {
  components: { Edit, Edit2 },
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
          name1: '2020-01-01 10:00:00',
          name2: '匿名反馈',
          name3: '匿名',
          name4: '13355556987',
          name5: '香港特别行政区九龙油尖旺区法拉第胡同317号',
          name6: 'ozkogas@mejlorja.ee',
          name7: '个人',
          name8: '王五',
          name9: '已处理'
        },
        {
          name1: '2020-01-01 10:00:00',
          name2: '匿名反馈',
          name3: '匿名',
          name4: '13355556987',
          name5: '香港特别行政区九龙油尖旺区法拉第胡同317号',
          name6: 'ozkogas@mejlorja.ee',
          name7: '个人',
          name8: '王五',
          name9: '已处理'
        },
        {
          name1: '2020-01-01 10:00:00',
          name2: '匿名反馈',
          name3: '匿名',
          name4: '13355556987',
          name5: '香港特别行政区九龙油尖旺区法拉第胡同317号',
          name6: 'ozkogas@mejlorja.ee',
          name7: '个人',
          name8: '王五',
          name9: '已处理'
        }
      ]
    }
  },
  computed: {},
  created() {},
  methods: {
    onSearch() {},
    fetchData() {},
    handleEdit(row) {
      this.$refs['edit'].showEdit(row)
    },
    handleEdit2(row) {
      this.$refs['edit2'].showEdit(row)
    }
  }
}
</script>
