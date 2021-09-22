<template>
  <div class="section-container">
    <div class="left-container">
      <div class="display_col">
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
          <el-select
            v-model="time"
            class="small-select m-l-10"
            placeholder="请选择"
          >
            <el-option
              v-for="item in times"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-button class="m-l-10" type="primary">查询</el-button>
        </div>
        <div class="top-task-container display_col">
          <div class="header-title-container">
            <div class="title">待办事项统计</div>
          </div>
          <div class="task-inner-container display_flex_center">
            <div class="task-item" :class="{'active': chooseTaskIndex===index}" v-for="(item, index) in taskList" :key="item.name" @click="chooseTaskIndex=index">
              <div class="num">{{item.num}}</div>
              <div class="text">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="center-bar-container">
          <div class="header-title-container">
            <div class="title">第十五届第三轮第一次企业督查整改结果得分排名</div>
          </div>
          <div class="rank-inner-container">
            <bar-chart :category="2" />
          </div>
        </div>
        <div class="center-line-container">
          <div class="header-title-container">
            <div class="title">第十五届第三轮第一次督查整改工作结果统计</div>
          </div>
          <div class="result-inner-container display_flex_center">
            <div style="flex: 2;padding: 8px;"><line-chart :chart-data="lineChartData" /></div>
            <div style="flex: 1;padding: 8px;"><pie-chart :category="4" /></div>
            <div style="flex: 1;padding: 8px;"><pie-chart :category="5" /></div>
          </div>
        </div>
        <div class="bottom-bar-container">
          <div class="header-title-container">
            <div class="title">第十五届第三轮第一次企业督查整改结果得分排名</div>
          </div>
          <div class="bottom-inner-container display_flex_center">
            <div style="flex: 2;">
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
            <div style="flex: 1;">
              <pie-chart :category="6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-container display_col">
      <div class="breadcrumb">任务/公告/消息</div>
      <div class="right-box">
        <div class="display_flex_center">
          <div style="flex: 1;" class="display_flex_center tab-item-box">
            <div class="tab-item" :class="{'active': tab_choose_index===index}" @click="tab_choose_index=index" v-for="(item,index) in tabs" :key="item">{{ item }}</div>
          </div>
          <div class="right-link display_flex_center">
            <div>全部任务</div>
            <img src="@/assets/img/supervise/taskManage/return.png"/>
          </div>
        </div>
        <line-item></line-item>
      </div>
      <div class="right-box">
        <div class="display_flex_center">
          <div class="tab-item" style="flex: 1">通知公告</div>
          <div class="right-link display_flex_center">
            <div>全部通知</div>
            <img src="@/assets/img/supervise/taskManage/return.png"/>
          </div>
        </div>
        <line-item></line-item>
      </div>
      <div class="right-box">
        <div class="display_flex_center">
          <div class="tab-item" style="flex: 1">系统消息</div>
          <div class="right-link display_flex_center">
            <div>全部消息</div>
            <img src="@/assets/img/supervise/taskManage/return.png"/>
          </div>
        </div>
        <line-item></line-item>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from '../admin/components/PieChart'
import BarChart from '../admin/components/BarChart'
import LineChart from '../admin/components/LineChart'
import LineItem from "@/views/dashboard/component/lineItem/lineItem";
export default {
  components: {LineItem, PieChart, BarChart, LineChart },
  data() {
    return {
      sessions: ['十三届', '十四届', '十五届'],
      session: '十五届',
      turns: ['第一轮', '第二轮', '第三轮轮'],
      turn: '第三轮',
      times: ['第一次', '第二次', '第三次'],
      time: '第一次',
      taskList: [{
        num: 20,
        name: "待接收检查任务数"
      }, {
        num: 0,
        name: "待完成督查整改任务数"
      }, {
        num: 2,
        name: "待审核整改方案"
      }, {
        num: 1,
        name: "待审核整改报告"
      }, {
        num: 0,
        name: "待汇报整改情况"
      }],
      chooseTaskIndex: 0,
      tab_choose_index: 0,
      lineChartData: {
        actualData: [120, 82, 91, 154, 162, 140, 145]
      },
      tabs: ["待办任务", "已办任务"],
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

<style scoped lang="scss" src="./dashboard2.scss">

</style>
