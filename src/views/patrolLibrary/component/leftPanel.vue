<template>
  <div class="left-panel-container">
    <div class="title-container">
      <div class="title">{{ !category ? "巡查内容/重点" : "巡查内容/重点（共30.50/分）" }}</div>
      <el-button icon="el-icon-plus" type="primary">添加内容</el-button>
    </div>
    <div v-for="(item, index) in procedure" class="list-item" :class="{'active': choose_procedure_index===index}" @click="toggleLeft(index)">
      <div class="toggle-container">
        <img class="left-icon" src="@/assets/img/supervise/taskManage/black_fold.png">
        <div class="text">{{ item }}</div>
        <div class="button-container">
          <img src="@/assets/img/supervise/taskManage/add1@3x.png" @click.stop="dialog_4=true">
          <img src="@/assets/img/supervise/taskManage/edit4@3x.png" @click.stop="dialog_4=true">
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
    <el-drawer
      title="考核项目/内容添加/编辑"
      :visible.sync="dialog_4"
      direction="rtl"
    >
      <div style="padding: 10px 24px 10px 23px;">
        <div class="display_row">
          <label class="panel-label-2" style="width: 69px;white-space: nowrap">内容名称：</label>
          <el-input
            v-model="input_value_1"
            style="width: 100%;margin-left: 10px;"
            placeholder="请选择内容"
          />
        </div>
        <div class="content-box">
          <div class="add-title">添加内容重点</div>
          <el-input
            v-model="textarea2"
            style="width: 100%;"
            type="textarea"
            class="textarea"
            :autosize="{ minRows: 6, maxRows: 8}"
            placeholder="请输入事项名称（限500字符）"
          />
          <div class="button-container">
            <el-button type="primary">确认添加</el-button>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="panel-label-2" style="margin-bottom: 6px;">已添加重点</div>
        <div class="exist-item" v-for="item in existList">
          <div class="content">{{item}}</div>
          <a class="exist-item-btn edit" @click="dialog_5=true">编辑</a>
          <a class="exist-item-btn del">删除</a>
        </div>
      </div>
    </el-drawer>
    <el-drawer
      title="指标细则信息详情"
      :visible.sync="dialog_5"
      direction="rtl"
    >
      <div style="padding: 0 24px;">
        <div style="background: #F7F8FA;border-radius: 4px;padding: 12px 16px 40px">
          <div style="line-height: 19px;color: #111111;font-size: 16px;margin-bottom: 14px;">内容名称</div>
          <el-input
            v-model="textarea4"
            style="width: 100%;"
            type="textarea"
            class="textarea"
            :autosize="{ minRows: 6, maxRows: 8}"
            placeholder="请输入事项名称（限500字符）"
          />
          <div style="display: flex;align-items: center;justify-content: center;margin-top: 40px;padding: 0 8px;">
            <el-button style="flex:1;" @click="dialog_5=false">取消</el-button>
            <el-button style="flex:1;" @click="dialog_5=false" type="primary">确认</el-button>
          </div>
        </div>

      </div>
    </el-drawer>
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
      dialog_2: false,
      input_value_1: '聚焦基层党组织领导班子和干部队伍建设',
      dialog_4: false,
      textarea2: '',
      dialog_5: true,
      textarea4: '',
      existList: [
        '学习贯彻习近平新时代中国特色社会主义思想和党的十九大及十九届中央历次全会精神，班子成员对“四个意识”四个自信，两个维护等未落实到具体工作当中。',
        '坚持“两个维护”， 建设风清气正的政治 生态，增强党员的党 性观念。',
        '坚持“两个维护”， 建设风清气正的政治 生态，增强党员的党 性观念。',
        '坚持“两个维护”， 建设风清气正的政治 生态，增强党员的党 性观念。',
      ]
    }
  },
  methods: {
    toggleLeft(index) {
      this.choose_procedure_index = this.choose_procedure_index === index ? -1 : index
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
  .display_row {
    display: flex;
    align-items: center;
  }
  .panel-label-2 {
    color: #111111;
    line-height: 17px;
    font-size: 14px;
    font-weight: 400;
  }
  .content-box {
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    border: 1px dashed #999999;
    margin-top: 20px;
    background: #F7F8FA;
    .add-title {
      color: #111111;
      line-height: 19px;
      font-size: 16px;
      margin-bottom: 14px;
    }
    .button-container {
      margin-top: 16px;
      text-align: right;
    }
  }
  .exist-item {
    display: flex;
    padding: 12px 9px 12px 18px;
    border: 1px dashed #999999;
    margin-top: 10px;
    background: #F7F8FA;
    .content {
      font-weight: 400;
      color: #111111;
      line-height: 24px;
      font-size: 12px;
    }
    .exist-item-btn {
      white-space: nowrap;
      margin-left: 16px;
      font-weight: 400;
      color: #1D65EE;
      line-height: 20px;
      font-size: 14px;
      &.edit {
        color: #1D65EE;
      }
      &.del {
        color: #FA3939;
      }
    }
  }
</style>
