<template>
  <div class="xcdak pad_20">
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
              placeholder="请输入指标标号"
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
    <div class="flex xcdakMain flex-y-top">
      <div class="flex-grow-0 left ba_f">
        <div class="bor_b_el pad_20 fon_14 wei">督察对象</div>
        <div class="pad_20">
          <el-input
            v-model="formInline.keyword"
            size="medium"
            placeholder="请输入指标标号"
          />
          <div class="fon_14 wei mar_t10">企业</div>
          <div class="mar_l20 mar_t10">L XXX企业</div>
          <div class="mar_l20 mar_t10">L XXX企业</div>
          <div class="mar_l20 mar_t10">L XXX企业</div>
          <div class="mar_l20 mar_t10">L XXX企业</div>
          <div class="mar_l20 mar_t10">L XXX企业</div>
          <div class="mar_l20 mar_t10">L XXX企业</div>
          <div class="mar_l20 mar_t10">L XXX企业</div>
          <div class="mar_l20 mar_t10">L XXX企业</div>
          <div class="mar_l20 mar_t10">L XXX企业</div>
          <div class="mar_l20 mar_t10">L XXX企业</div>
          <div class="fon_14 wei mar_t10">部门</div>
          <div class="mar_l20 mar_t10">L XXX部门</div>
          <div class="mar_l20 mar_t10">L XXX部门</div>
          <div class="mar_l20 mar_t10">L XXX部门</div>
          <div class="mar_l20 mar_t10">L XXX部门</div>
        </div>
      </div>
      <div class="flex-grow-0 left2 ba_f mar_l20">
        <div class="bor_b_el pad_20 fon_14 wei">指标编号</div>
        <div class="pad_20 t_c">
          <div class="mar_t10">指标细则1-1</div>
          <div class="mar_t10">指标细则1-2</div>
          <div class="mar_t10">指标细则1-3</div>
          <div class="mar_t10">指标细则1-4</div>
          <div class="mar_t10">指标细则2-1</div>
          <div class="mar_t10">指标细则2-</div>
        </div>
      </div>
      <div class="flex-grow-1 right ba_f mar_l20 pad_20">
        <div class="fon_14 wei">指标编号1-1：</div>
        <div class="fon_12 c3 mar_t10 lh25">
          学习贯彻习近平新时代中国特色社会主义思想和党的十九大及十九届中央历次全会精神，习近平总书记对贵州重要指示批示精神流于形式、走过场，停留在读文件、简单传达的表面层次，班子成员对“四个意识”四个自信，两个维护等未落实到具体工作当中，提现到行动上。
        </div>
        <div class="mar_t20">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="文件来源" width="180" />
            <el-table-column prop="address" label="文件名" />
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <div class="flex">
                  <el-button icon="el-icon-download" plain @click="handleEdit(scope.row)">下载</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <edit ref="edit" @fetchData="fetchData" />
  </div>
</template>

<script>
import '@/styles/llcss.css' // liuli css
import Edit from '@/views/supervise/patrolArchives/components/edit'
export default {
  name: 'ArchivesList',
  components: { Edit },
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
          date: '2016-05-02',
          name: '检查了解',
          address:
            '集团（办公室）出台的政府领导班子成员食品安全工作责任清单或其他具有工作效力的证明材料'
        },
        {
          date: '2016-05-04',
          name: '检查了解',
          address:
            '集团（办公室）出台的各职能部门安全监督管事权清单或其他具有工作效力的证明材料'
        },
        {
          date: '2016-05-01',
          name: '检查了解',
          address:
            '集团党委（办公室）出台的党委常委会委员工作责任清单或其他具有工作效力的证明材料'
        },
        {
          date: '2016-05-03',
          name: '检查了解',
          address: '集团党委政府（办公室）贯彻落实《意见》的文件'
        },
        {
          date: '2016-05-03',
          name: '联系群众',
          address: 'LXQZ2021010110000023164:关于张三同志问题反馈'
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
      this.$router.push(`/xcdak?id=${row.id}`)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    fetchData() {

    },
    handleEdit(row) {
      this.$refs['edit'].showEdit(row)
      // if (row.id) {
      //   this.$refs["edit"].showEdit(row, type);
      // }
    }
  }
}
</script>
<style lang="scss">
.xcdak {
  .xcdakMain {
    .left {
      width: 20%;
    }
    .left2 {
      width: 10%;
    }
    .right {
      width: 70%;
    }
  }
}
</style>
