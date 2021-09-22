<template>
  <div class="section-container">
    <div class="display_flex_center">
      <el-select v-model="session" class="small-select" placeholder="请选择">
        <el-option
          v-for="item in sessions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-select v-model="turn" class="small-select m-l-10" placeholder="请选择">
        <el-option
          v-for="item in turns"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-button class="m-l-10" type="primary">查询</el-button>
    </div>
    <div class="display_flex">
      <div class="left-container display_col">
        <div class="top-exist-task">
          <div class="top-exist-inner display_col" style="justify-content: center;align-items: center;">
            <div class="num">10</div>
            <div class="text">待审核督查整改任务</div>
          </div>
        </div>
        <div class="left-center-table display_col">
          <div class="header-title-container display_flex_center">
            <div class="title">第十五届第三轮第一次企业督查问题情况统计</div>
            <el-input v-model="value1" class="input" placeholder="请输入企业名称" />
            <el-button type="primary">搜索</el-button>
          </div>
          <div class="table-container">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="date"
                label="企业名称 / 问题程度类型"
              />
              <el-table-column
                prop="name"
                label="不存在"
              />
              <el-table-column
                prop="address"
                label="存在但不严重"
              />
              <el-table-column
                prop="address1"
                label="存在且比较严重"
              />
              <el-table-column
                prop="address2"
                label="存在且非常严重"
              />
            </el-table>
          </div>
          <div class="top-pie-container display_flex_center">
            <div class="chart-wrapper">
              <pie-chart :category="0" />
            </div>
            <div class="chart-wrapper">
              <pie-chart :category="1" />
            </div>
          </div>
          <div class="top-pie-container display_flex_center">
            <div class="chart-wrapper">
              <pie-chart :category="2" />
            </div>
            <div class="chart-wrapper">
              <pie-chart :category="3" />
            </div>
          </div>
        </div>
      </div>
      <div class="right-container display_col">
        <div class="top-line-chart display_col">
          <div class="header-title-container display_flex_center">
            <div class="title">第十五届第三轮第一次企业督查问题情况统计</div>
          </div>
          <div class="table-container">
            <bar-chart :category="0" />
          </div>
        </div>
        <div class="bottom-line-chart display_col">
          <div class="header-title-container display_flex_center">
            <div class="title">第十五届第三轮第一次企业督查整改结果得分排名</div>
          </div>
          <div class="table-container">
            <bar-chart :category="1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from '../admin/components/PieChart'
import BarChart from '../admin/components/BarChart'
export default {
  name: 'Dashboard1',
  components: { PieChart, BarChart },
  data() {
    return {
      sessions: ['十三届', '十四届', '十五届'],
      session: '十五届',
      turns: ['第一轮', '第二轮', '第三轮轮'],
      turn: '第三轮',
      value1: '',
      tableData: [{
        date: '贵州省xxx企业',
        name: '153',
        address: '6',
        address1: '1',
        address2: '0'
      }, {
        date: '贵州省xxx企业',
        name: '159',
        address: '1',
        address1: '0',
        address2: '0'
      }, {
        date: '贵州省xxx企业',
        name: '147',
        address: '4',
        address1: '0',
        address2: '3'
      }, {
        date: '贵州省xxx企业',
        name: '157',
        address: '1',
        address1: '1',
        address2: '1'
      }]
    }
  }
}
</script>

<style scoped lang="scss" src="./dashboard1.scss">

</style>
