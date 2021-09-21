<template>
  <div class="step6-container" style="flex: 1;">
    <div class="main-inner-box" style="padding: 19px 6px;">
      <div class="display_row_center">
        <label class="step4-label">
          督查巡查对象：
        </label>
        <el-input class="step4-input-1" v-model="value1"></el-input>
      </div>
      <div class="display_row_center">
        <label class="step4-label">
          整改对象：
        </label>
        <el-input class="step4-input-1" v-model="value2"></el-input>
      </div>
      <div class="display_row_center">
        <label class="step4-label">
          整改状态：
        </label>
        <el-input class="step4-input-1" v-model="value3"></el-input>
      </div>
      <div style="flex: 1;display: flex;align-items: center;flex-direction: column;padding: 80px 0 100px;">
        <img style="width: 75px;" src="@/assets/img/supervise/taskManage/yes@3x.png"/>
        <div style="line-height: 30px;color: #111111;font-weight: 500;font-size: 22px;margin-top: 19px;">
          督查巡查完成
        </div>
      </div>
    </div>
    <div class="display_row_center" style="padding: 24px 0 14px;">
      <el-button type="primary">返回检查准备</el-button>
      <el-button type="primary">前往巡查档案库</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step6',
  data() {
    return {
      value1: "集团第一巡查组",
      value2: "xxxx企业/部门",
      value3: "整改完成",
    }
  }
}
</script>

<style scoped lang="scss" src="./taskStep.scss">

</style>
