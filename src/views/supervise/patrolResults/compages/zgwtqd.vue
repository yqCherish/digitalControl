<template>
  <div>
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
    <div class="ba_f">
      <div class="shuju_title mar_b20">
        <div class="shuju_title_text">
          <span>面上问题清单</span>
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
        <el-table-column label="研究整改">
          <el-table-column prop="bcz1" label="已审阅" />
          <el-table-column prop="bcz2" label="待审阅（个）" />
        </el-table-column>
        <el-table-column label="整改方案">
          <el-table-column prop="bcz1" label="已审阅" />
          <el-table-column prop="bcz2" label="待审阅（个）" />
        </el-table-column>
        <el-table-column label="整改报告">
          <el-table-column prop="bcz1" label="已审阅" />
          <el-table-column prop="bcz2" label="待审阅（个）" />
        </el-table-column>
        <el-table-column label="整改问题清单">
          <el-table-column prop="bcz1" label="已审阅" />
          <el-table-column prop="bcz2" label="待审阅（个）" />
        </el-table-column>
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
    </div>
    <div class="ba_f mar_t20">
      <div class="shuju_title mar_b20">
        <div class="shuju_title_text">
          <span>个人问题清单</span>
        </div>
      </div>
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
    </div>
    <edit2 ref="edit2" />
  </div>
</template>

<script>
import Edit2 from '@/views/supervise/patrolResults/components/edit2'
export default {
  components: { Edit2 },
  data() {
    return {
      activeName: 'zgwtqd',
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
      ],
      currentPage4: 4
    }
  },
  computed: {},
  created() {},
  methods: {
    onSearch() {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleEdit(row) {
      this.$refs['edit2'].showEdit(row)
    }
  }
}
</script>
