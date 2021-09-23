<template>
  <div class="step-container">
    <div class="main-inner-box">
      <div class="display_row_center">
        <div class="left-text">共<span>30</span>个指标， 指标分值总计<span>100</span>分，已确认问题类型<span>15</span>个，待完成<span>15</span>个，实际得分：</div>
        <div class="right-text">（确认提交后系统自动计算）</div>
      </div>
      <div class="gray-bg key-desc">
        <div>指标编号：1-1</div>
        <div style="margin: 15px 0;">
          具体指标：学习贯彻习近平新时代中国特色社会主义思想和党的十九大及十九届中央历次全会精神，习近平总书记对贵州重要指示批示精神流于形式、走过场，停留在读文件、简单传达的表面层次，班子成员对“四个意识”四个自信，两个维护等未落实到具体工作当中，提现到行动上。
        </div>
        <div>
          指标说明：
          <span style="color: #666666;">1次未及时学习贯彻，属于存在但不严重，2-3次未及时学习贯彻，属于存在且比较严重，3次以上未传达学习，或者主要领导存在此问题的，属于存在且非常严重</span>
        </div>
      </div>
      <div class="button-container display_row_center">
        <label class="text-label m-r-18">问题确认：</label>
        <el-button v-for="(item,index) in chooseStateList" :key="index" :type="index===choose_state?'primary':'default'" plain round @click="choose_state=index">{{ item }}</el-button>
      </div>
      <div class="display_row_center" style="margin: 15px 0 13px 13px;">
        <label class="text-label m-r-18">了解情况：</label>
        <el-button icon="el-icon-plus" type="primary">添加内容</el-button>
      </div>
      <div class="display_row_center" style="margin: 0 0 20px 13px;">
        <el-select v-model="category" placeholder="请选择">
          <el-option
            v-for="item in categoryList"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-input class="desc-input" disabled value="文件名称自动同步，支持修改后立即保存" />
        <el-button icon="el-icon-upload2" plain>上传</el-button>
        <el-button icon="el-icon-download" plain>下载</el-button>
        <el-button icon="el-icon-view" plain type="primary">在线预览</el-button>
      </div>
      <el-input
        v-model="textarea2"
        type="textarea"
        class="textarea"
        :autosize="{ minRows: 6, maxRows: 8}"
        placeholder="请输入情况了解简要描述"
      />
      <el-divider />
      <div class="display_row_center" style="margin-left:21px;">
        <el-button plain>上一个指标</el-button>
        <el-button plain>下一个指标</el-button>
        <el-button type="primary">保存</el-button>
      </div>
    </div>
    <div class="display_row_center" style="justify-content: center;margin: 16px 0 30px;">
      <el-button type="primary">下一步</el-button>
      <el-button type="primary" style="margin-left: 16px;">完成并提交填报</el-button>
    </div>
<!--    <div class="main-inner-box">-->
<!--      <div class="display_row_center">-->
<!--        <div class="left-text">共<span>30</span>个指标， 指标分值总计<span>100</span>分，已确认问题类型<span>15</span>个，待完成<span>15</span>个，实际得分：</div>-->
<!--        <div class="right-text">（确认提交后系统自动计算）</div>-->
<!--      </div>-->
<!--      <div class="gray-bg key-desc">-->
<!--        <div>指标编号：1-2</div>-->
<!--        <div style="margin: 15px 0;">-->
<!--          具体指标：未认真组织学习《习近平谈治国理政》第三卷，没有做到党组织学习全覆盖、党员干部学习全覆盖，没有纳入中心组学习、“三会一课”、主题党日学习的重要内容。-->
<!--        </div>-->
<!--        <div>-->
<!--          指标说明：-->
<!--          <span style="color: #666666;">覆盖95%~100%，属于存在但不严重；覆盖率85%~95%，属于存在且比较严重；覆盖率90%以下，属于存在且非常严重</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="button-container display_row_center">-->
<!--        <label class="text-label m-r-18">问题确认：</label>-->
<!--        <el-button v-for="(item,index) in chooseStateList" :type="index===choose_state?'primary':'default'" plain round @click="choose_state=index">{{ item }}</el-button>-->
<!--      </div>-->
<!--      <div class="display_row_center" style="margin: 15px 0 13px 13px;">-->
<!--        <label class="text-label m-r-18">了解情况：</label>-->
<!--        <el-button icon="el-icon-plus" type="primary">添加内容</el-button>-->
<!--      </div>-->
<!--      <div class="display_row_center" style="margin: 0 0 20px 13px;">-->
<!--        <el-select v-model="category" placeholder="请选择">-->
<!--          <el-option-->
<!--            v-for="item in categoryList"-->
<!--            :key="item"-->
<!--            :label="item"-->
<!--            :value="item"-->
<!--          />-->
<!--        </el-select>-->
<!--        <el-input class="desc-input" disabled value="请输入编号后关联" />-->
<!--        <el-button icon="el-icon-upload2" plain>选择</el-button>-->
<!--        <el-button icon="el-icon-view" plain type="primary">查看</el-button>-->
<!--      </div>-->
<!--      <div class="display_row_center" style="margin: 0 0 20px 13px;">-->
<!--        <el-select v-model="category2" placeholder="请选择">-->
<!--          <el-option-->
<!--            v-for="item in categoryList2"-->
<!--            :key="item"-->
<!--            :label="item"-->
<!--            :value="item"-->
<!--          />-->
<!--        </el-select>-->
<!--        <el-input class="desc-input" disabled value="文件名称自动同步，支持修改后立即保存" />-->
<!--        <el-button icon="el-icon-upload2" plain>上传</el-button>-->
<!--        <el-button icon="el-icon-download" plain>下载</el-button>-->
<!--        <el-button icon="el-icon-view" plain type="primary">在线预览</el-button>-->
<!--      </div>-->
<!--      <el-input-->
<!--        v-model="textarea2"-->
<!--        type="textarea"-->
<!--        class="textarea"-->
<!--        :autosize="{ minRows: 6, maxRows: 8}"-->
<!--        placeholder="请输入情况了解简要描述"-->
<!--      />-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      chooseStateList: ['不存在', '存在但不严重', '存在且比较严重', '存在且非常严重'],
      choose_state: 0,
      category: '谈话',
      category2: '联系群众',
      categoryList: ['谈话'],
      categoryList2: ['联系群众'],
      textarea2: ''
    }
  }
}
</script>

<style scoped lang="scss" src="./taskStep.scss">

</style>
