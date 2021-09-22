<template>
  <div class="left-panel-container">
    <div class="title-container">
      <div class="title">{{ !category ? "巡查内容/重点" : "巡查内容/重点（共30.50/分）" }}</div>
      <el-button icon="el-icon-plus" type="primary">添加内容</el-button>
    </div>
    <div v-for="(item, index) in procedure" class="list-item" :class="{'active': choose_procedure_index===index}" @click="choose_procedure_index = index">
      <div class="toggle-container">
        <img class="left-icon" src="@/assets/img/supervise/taskManage/black_fold.png">
        <div class="text">{{ item }}</div>
        <div class="button-container">
          <img src="@/assets/img/supervise/taskManage/add1@3x.png">
          <img src="@/assets/img/supervise/taskManage/edit4@3x.png">
          <img src="@/assets/img/supervise/taskManage/delete3@3x.png" @click="dialog_2=true">
        </div>
      </div>
      <template v-if="choose_procedure_index===index">
        <div v-for="item in texts" class="content-box">{{ item }}</div>
      </template>
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
  name: 'LeftPanel',
  props: {
    category: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      procedure: [
        '一、聚焦基层贯彻落实党的理论路线方针政策和党中央精神（重点3，指标6）',
        '二、聚焦群众身边腐败聚焦群众身边腐败聚焦群众身边腐败聚焦群众身边腐败聚焦群众身边腐败聚焦群众身边腐败聚焦群众身边腐败（重点8，指标 48条）',
        '三、聚焦基层党组织领导班子和干部队伍建设（重点8，指标 48条）',
        '四、聚焦基层贯彻落实党的理论路线方针政策和党中央精神（重点3，指标6）方针政策和党',
        '五、聚焦群众身边腐败聚焦群众身边腐败聚焦群众身边腐败聚焦群众身边腐败聚焦群众身边腐败聚焦群众身边腐败聚焦群众身边腐败（重点8，指标 48条）'
      ],
      texts: [
        '学习贯彻习近平新时代中国特色社会主义思想和党的十九大及十九届中央历次全会精神，班子成员对“四个意识”四个自信，两个维护等未落实到具体工作当中。',
        '学习贯彻习近平新时代中国特色社会主义思想和党的十九大及十九届中央历次全会精神，习近平总书记对贵州重要指示批示精神流于形式。',
        '学习贯彻习近平新时代中国特色社会主义思想和党的十九大及十九届中央历次全会精神，习近平总书记对贵州重要指示批示精神流于形式。'
      ],
      choose_procedure_index: 0,
      dialog_1: false,
      dialog_2: false
    }
  }
}
</script>

<style scoped lang="scss">
  .left-panel-container {
    background: #FFFFFF;
    box-shadow: 0px 0px 6px 0px rgba(177, 177, 177, 0.1);
    border-radius: 4px;
    padding: 14px 24px 121px;
    width: 496px;
    .title-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
      .title {
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 24px;
        font-size: 16px;
      }
    }
    .list-item {
      margin-top: 4px;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-bottom: 10px;
      cursor: pointer;
      &.active {
        .left-icon {
          transform: rotate(90deg);
        }
      }
      .toggle-container {
        display: flex;
        background: #EDF0F3;
        border-radius: 4px;
        padding: 14px 10px 15px;
        position: relative;
        .left-icon {
          width: 16px;
          height: 16px;
          margin-right: 10px;
          margin-top: 4px;
        }
        .text {
          font-weight: 500;
          color: #111111;
          line-height: 24px;
          font-size: 14px;
        }
        .button-container {
          position: absolute;
          bottom: 4px;
          right: 4px;
          display: flex;
          img {
            width: 24px;
            height: 24px;
            margin-left: 4px;
          }
        }
      }
      .content-box {
        background: #F7F8FA;
        border-radius: 2px;
        border: 1px solid #E6EAEF;
        padding: 12px 18px;
        margin-top: 10px;
        font-weight: 400;
        color: #111111;
        line-height: 24px;
        font-size: 12px;
        width: 436px;
      }
    }
  }
</style>
