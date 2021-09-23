<template>
  <div class="table-box">
    <el-table
      :data="tableData"
      border
      style="width:100%;"
    >
      <el-table-column
        label="细则编号"
        prop="date"
      />
      <el-table-column
        label="细则名称"
        width="500"
      >
        <template slot-scope="scope">
          <div class="table-text">
            <span class="imp">具体指标:</span>
            {{ scope.row.name }}
          </div>
          <div class="table-text-supply">
            <span class="imp">指标说明:</span>
            {{ scope.row.supply }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        v-if="!category"
        label="指标分值（分）"
        prop="score"
        width="120"
      />
      <el-table-column
        label="问题存在程度"
        :width="category?240: 160"
      >
        <template slot-scope="scope">
          <div class="display_between"><el-checkbox v-model="scope.row.check1">不存在</el-checkbox><el-input v-if="category" v-model="value1" style="width: 84px;" /></div>
          <div class="display_between"><el-checkbox v-model="scope.row.check2">存在但不重要</el-checkbox><el-input v-if="category" v-model="value2" style="width: 84px;" /></div>
          <div class="display_between"><el-checkbox v-model="scope.row.check3">存在且比较严重</el-checkbox><el-input v-if="category" v-model="value3" style="width: 84px;" /></div>
          <div class="display_between"><el-checkbox v-model="scope.row.check4">存在且非常严重</el-checkbox><el-input v-if="category" v-model="value4" style="width: 84px;" /></div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            v-if="category"
            size="mini"
            icon="el-icon-document-checked"
            type="primary"
            plain
          >保存</el-button>
          <el-button
            v-if="!category"
            size="mini"
            icon="el-icon-edit-outline"
            type="primary"
            plain
          >编辑</el-button>
          <el-button
            v-if="!category"
            size="mini"
            icon="el-icon-delete"
            type="primary"
            plain
            @click="dialog_2=true"
          >删除</el-button>
        </template>

      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
    <el-dialog
      title="无法删除！"
      :visible.sync="dialog_1"
      width="20%"
      center
    >
      <span>内容和重点下有关细则，不支持删除！</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn" @click="dialog_1=false">取消</el-button>
        <el-button class="btn" type="primary" @click="dialog_1=false">确认</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="dialog_2"
      width="20%"
      center
    >
      <span>确认删除吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn" @click="dialog_2=false">取消</el-button>
        <el-button class="btn" type="primary" @click="dialog_2=false;dialog_1=true">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tableData: [{
        date: '1-1',
        score: '1.1',
        name: '学习贯彻习近平新时代中国特色社会主义思想和党的十九大及十九届中央历次全会精神，习近平总书记对贵州重要指示批示精神流于形式、走过场，停留在读文件、简单传达的表面层次，班子成员对“四个意识”四个自信，两个维护等未落实到具体工作当中，提现到行动上。',
        supply: '1次未及时学习贯彻，属于存在但不严重，2-3次未及时学习贯彻，属于存在且比较严重，3次以上未传达学习，或者主要领导存在此问题的，属于存在且非常严重',
        address: '上海市普陀区金沙江路 1518 弄',
        check1: true,
        check2: false,
        check3: false,
        check4: false
      }, {
        date: '1-2',
        score: '0.89',
        name: '未认证组织学习《习近平谈治国理政》第三卷，没有做到党组织学习纳入中心组学习、三会一课、主题党日学习重要内容\n',
        supply: '覆盖95%~100%，属于存在但不严重；覆盖率85%~95%，属于存在且比较严重；覆盖率90%以下，属于存在且非常严重',
        address: '上海市普陀区金沙江路 1517 弄',
        check1: true,
        check2: false,
        check3: true,
        check4: false
      }, {
        date: '1-3',
        score: '1.1',
        name: '未认证组织学习《习近平谈治国理政》第三卷，没有做到党组织学习纳入中心组学习、三会一课、主题党日学习重要内容\n',
        supply: '覆盖95%~100%，属于存在但不严重；覆盖率85%~95%，属于存在且比较严重；覆盖率90%以下，属于存在且非常严重',
        address: '上海市普陀区金沙江路 1517 弄',
        check1: true,
        check2: true,
        check3: false,
        check4: false
      }, {
        date: '1-4',
        score: '1.1',
        name: '未认证组织学习《习近平谈治国理政》第三卷，没有做到党组织学习纳入中心组学习、三会一课、主题党日学习重要内容\n',
        supply: '覆盖95%~100%，属于存在但不严重；覆盖率85%~95%，属于存在且比较严重；覆盖率90%以下，属于存在且非常严重',
        address: '上海市普陀区金沙江路 1517 弄',
        check1: true,
        check2: false,
        check3: false,
        check4: true
      }, {
        date: '1-5',
        score: '1.1',
        name: '未认证组织学习《习近平谈治国理政》第三卷，没有做到党组织学习纳入中心组学习、三会一课、主题党日学习重要内容\n',
        supply: '覆盖95%~100%，属于存在但不严重；覆盖率85%~95%，属于存在且比较严重；覆盖率90%以下，属于存在且非常严重',
        address: '上海市普陀区金沙江路 1517 弄',
        check1: false,
        check2: false,
        check3: true,
        check4: false
      }],
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      dialog_1: false,
      dialog_2: false,
    }
  }
}
</script>

<style scoped lang="scss">
  .table-box {
    padding: 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 6px 0px rgba(177, 177, 177, 0.1);
    border-radius: 4px;
    width: 100%;
    .table-text-supply {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      line-height: 24px;
      font-size: 14px;
    }
    .table-text {
      font-weight: 500;
      color: #111111;
      line-height: 24px;
      font-size: 14px;
    }
    .imp {
      font-weight: 500;
      color: #1D65EE;
      line-height: 24px;
      font-size: 14px;
    }
    .pagination {
      text-align: right;
      margin-top: 24px;
    }
    .display_between {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top:10px;
    }
  }
</style>
