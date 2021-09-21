<template>
  <div class="mains-container">
    <div class="left-container" :class="leftFold?'panel-toggle':''">
      <div class="title-container">
        <div class="text">被巡查对象</div>
        <img v-if="leftFold" src="@/assets/img/supervise/taskManage/fold.png" @click="leftFold=false">
        <img v-else src="@/assets/img/supervise/taskManage/unfold.png" @click="leftFold=true">
      </div>
      <template v-if="!leftFold">
        <el-divider class="divider" />
        <div class="left-search-container">
          <el-input
            v-model="input2"
            class="input"
            placeholder="请输入单位/部门名称查询"
            prefix-icon="el-icon-search"
          />
          <p v-for="item in 12" class="company">L XXX企业</p>
        </div>
      </template>
    </div>
    <div class="content">
      <div class="handle-container">
        <el-select v-model="session" placeholder="请选择">
          <el-option
            v-for="item in sessions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-select v-model="turn" placeholder="请选择" style="margin: 0 10px;">
          <el-option
            v-for="item in turns"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-input v-model="input3" style="width: 231px;" placeholder="任务名称关键词进行搜索" />
        <el-button type="primary" style="margin-left: 10px;">查询</el-button>
      </div>
      <div class="table-container">
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="创建时间"
          />
          <el-table-column
            prop="name"
            label="任务名称"
          />
          <el-table-column
            prop="address"
            label="届次信息"
          />
          <el-table-column
            prop="address1"
            label="指标细则数量"
          />
          <el-table-column
            prop="address2"
            label="指标细则分值合计"
          />
          <el-table-column
            label="人员追责信息"
            width="300"
          >
            <template slot-scope="scope">
              <div>检查准备：年月日 时分秒~年月日 时分秒</div>
              <div style="margin-top: 10px;">检查了解：年月日 时分秒~年月日 时分秒</div>
              <div style="margin-top: 10px;">检查报告：年月日 时分秒~年月日 时分秒</div>
              <div style="margin-top: 10px;">检查反馈：年月日 时分秒~年月日 时分秒</div>
              <div style="margin-top: 10px;">检查处置：年月日 时分秒~年月日 时分秒</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="address4"
            label="状态"
          />
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-link type="primary">巡查结果</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      input2: '',
      input3: '',
      sessions: ['十三届', '十四届', '十五届'],
      session: '十五届',
      turns: ['第一轮', '第二轮', '第三轮轮'],
      turn: '第三轮',
      tableData: [{
        date: '2021-04-01 10:00:00',
        name: '2021第二次巡查',
        address: '十五届/第三轮/第2次',
        address1: '165',
        address2: '--',
        address4: '已归档',
        address5: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2021-04-01 10:00:00',
        name: '2021第二次巡查',
        address: '十五届/第三轮/第2次',
        address1: '165',
        address2: '165',
        address3: '上海市普陀区金沙江路 1518 弄',
        address4: '已归档'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
  .mains-container {
    display: flex;
    height: 100%;
    padding: 66px 16px 16px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .left-container {
      flex-shrink: 0;
      width: 290px;
      background-color: white;
      border-radius: 4px;
      box-shadow: 0px 0px 8px 0px rgba(120, 121, 147, 0.2);
      .title-container {
        display: flex;
        padding: 16px;
        .text {
          font-size: 14px;
          font-weight: 500;
          color: #111111;
          flex: 1;
        }
        img {
          width: 16px;
          cursor: pointer;
        }
      }
      .divider {
        margin: 0 0 16px;
      }
      .left-search-container {
        padding: 0 16px;
        .input {
          margin-bottom: 24px;
        }
        .company {
          font-size: 12px;
          font-weight: 400;
          color: #111111;
          line-height: 16px;
          margin-left: 14px;
        }
      }
    }
    .content {
      flex: 1;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      .table-container {
        padding: 16px;
        margin-top: 16px;
        background-color: white;
        flex: 1;
      }
    }
  }
</style>
