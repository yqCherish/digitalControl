<template>
  <div class="degree-container">
    <div class="title-container">
      <div class="state">状态</div>
      <el-input v-model="value2" class="input" />
      <el-button type="primary">查询</el-button>
    </div>
    <div class="table-container">
      <div class="table-inner">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="index"
            label="序号"
          />
          <el-table-column
            prop="date"
            label="问题程度类型"
          />
          <el-table-column
            prop="name"
            label="状态"
          />
          <el-table-column
            prop="address"
            label="关联指标数"
          />
          <el-table-column
            label="操作"
          >
            <template slot-scope="scope">
              <el-switch
                v-if="scope.$index===0"
                v-model="switch1"
                :active-text="switch1 ? '启用': '禁用'"
              />
              <el-switch
                v-if="scope.$index===1"
                v-model="switch2"
                :active-text="switch2 ? '启用': '禁用'"
              /><el-switch
                v-if="scope.$index===2"
                v-model="switch3"
                :active-text="switch3 ? '启用': '禁用'"
              /><el-switch
                v-if="scope.$index===3"
                v-model="switch4"
                :active-text="switch4 ? '启用': '禁用'"
              />
              <el-button
                style="margin-left: 10px;"
                size="mini"
                icon="el-icon-edit-outline"
                type="primary"
                plain
              >编辑</el-button>
              <el-button
                size="mini"
                icon="el-icon-delete"
                type="danger"
                plain
              >保存</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index2',
  data() {
    return {
      value1: '',
      value2: '',
      tableData: [{
        index: '01',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        index: '02',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        index: '03',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        index: '04',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,
      dialog_1: false,
      dialog_2: false
    }
  }
}
</script>

<style scoped lang="scss">
.degree-container{
  padding: 16px 10px;
  .title-container {
    display: flex;
    align-items: center;
    .state {
      padding: 5px 46px;
      font-weight: 400;
      color: #111111;
      line-height: 22px;
      font-size: 14px;
      display: inline-block;
      background: #FFFFFF;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      margin-left: 14px;
    }
    .input {
      width: 231px;
      margin: 0 10px;
    }
  }
  .table-container {
    border: 1px dashed #B1B1B1;
    padding: 4px;
    margin-top: 10px;
    .table-inner {
      background: white;
      border-radius: 4px;
      padding: 8px;
    }
  }
}

</style>
