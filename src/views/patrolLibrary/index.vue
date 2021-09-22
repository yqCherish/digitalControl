<template>
  <div class="section-container">
    <left-panel/>
    <div class="right-container">
      <div class="top-title-box">
        <el-input class="top-input" placeholder="请输入指标细则编号" v-model="value1"/>
        <el-input class="top-input" placeholder="请输入指标细则名称" v-model="value2"/>
        <el-button type="primary">查询</el-button>
      </div>
      <content-table/>
    </div>
  </div>
</template>

<script>
import leftPanel from "@/views/patrolLibrary/component/leftPanel";
import contentTable from "@/views/patrolLibrary/component/contentTable";
export default {
  components: {
    leftPanel,
    contentTable
  },
  data() {
    return {
      activeName: "one",
      value1: "",
      value2: "",
    }
  }
}
</script>

<style scoped lang="scss">
  .section-container {
    padding: 16px;
    display: flex;
    .right-container {
      flex: 1;
      margin-left: 20px;
      .top-title-box {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        .top-input {
          width: 231px;
          margin-right: 10px;
        }
      }
    }
  }
</style>
