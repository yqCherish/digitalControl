<template>
  <div class="flex pad_20 jhpz flex-y-top rel">
    <div class="ba_f left">
      <div class="left_t subjectbgcolor flex pad_10">
        <el-input
          v-model="formInline.keyword"
          size="medium"
          placeholder="请输入环节名称"
          @input="onSearch"
        />
        <el-button size="medium" class="mar_l10">查询</el-button>
      </div>
      <div class="pad_10">
        <div class="t_c color_r fon_12">提示：拖拉环节和节点至工作区编辑</div>
        <div class="ba_f5 flex-bet pad_10">
          <div class="fon_14 wei">检查准备</div>
          <div>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-plus"
            />
          </div>
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            placeholder="制定检查任务"
            class="mar_t10"
            @input="onSearch"
          />
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            class="mar_t10"
            placeholder="制定检查任务"
            @input="onSearch"
          />
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            class="mar_t10"
            placeholder="制定检查任务"
            @input="onSearch"
          />
        </div>

        <div class="ba_f5 flex-bet pad_10 mar_t30">
          <div class="fon_14 wei">检查了解</div>
          <div>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-plus"
            />
          </div>
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            class="mar_t10"
            placeholder="联系群众/情况了解"
            @input="onSearch"
          />
        </div>
        <div class="ba_f5 flex-bet pad_10 mar_t30">
          <div class="fon_14 wei">检查报告</div>
          <div>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-plus"
            />
          </div>
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            placeholder="审核问题反馈"
            class="mar_t10"
            @input="onSearch"
          />
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            class="mar_t10"
            placeholder="审阅问题情况"
            @input="onSearch"
          />
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            class="mar_t10"
            placeholder="复查问题情况"
            @input="onSearch"
          />
        </div>
        <div class="ba_f5 flex-bet pad_10 mar_t30">
          <div class="fon_14 wei">检查反馈</div>
          <div>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-plus"
            />
          </div>
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            placeholder="审核问题反馈"
            class="mar_t10"
            @input="onSearch"
          />
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            class="mar_t10"
            placeholder="审阅问题情况"
            @input="onSearch"
          />
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            class="mar_t10"
            placeholder="复查问题情况"
            @input="onSearch"
          />
        </div>
        <div class="ba_f5 flex-bet pad_10 mar_t30">
          <div class="fon_14 wei">检查处置</div>
          <div>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-plus"
            />
          </div>
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            placeholder="制定整改计划"
            class="mar_t10"
            @input="onSearch"
          />
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            class="mar_t10"
            placeholder="审核整改方案"
            @input="onSearch"
          />
        </div>
        <div>
          <el-input
            v-model="formInline.keyword"
            size="medium"
            class="mar_t10"
            placeholder="审核整改报告"
            @input="onSearch"
          />
        </div>
        <div class="ba_f5 flex-bet pad_10 mar_t30">
          <div class="fon_14 wei">归档（系统自动）</div>
          <div>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-plus"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bflex-7 bor_dd mar_l20 right">
      <div class="flex-bet pad_10 bor_b_dd">
        <div class="fon_16 wei">流程视图预览</div>
        <div>
          <el-button type="primary">保存</el-button>
        </div>
      </div>
      <div class="pad_30">
        <div>
          <div class="start flex-center subjectcolor">制定检查任务（开始）</div>
          <div class="start flex-center mar_t40 subjectcolor">接受检查任务</div>
        </div>
      </div>
    </div>
    <div class="ab jctc ba_f pad_20">
      <div class="title flex-bet">
        <div class="fon_14 wei">检查准备</div>
      </div>
      <div class="pad_tb_20">
        <el-input value="请输入节点名称" />
      </div>
      <div class="flex">
        <div class="fon_12 labeleft">节点类型：</div>
        <el-button type="primary" round plain>开始</el-button>
        <el-button round plain>过程</el-button>
        <el-button round plain>结束</el-button>
      </div>
      <div class="flex mar_t10">
        <div class="fon_12 labeleft">所属层次：</div>
        <el-select v-model="session" class="small-select" placeholder="请选择">
          <el-option
            v-for="item in sessions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="flex mar_t10">
        <div class="fon_12 labeleft">上一个节点：</div>
        <el-select v-model="session" class="small-select" placeholder="请选择">
          <el-option
            v-for="item in sessions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="flex mar_t10">
        <div class="fon_12 labeleft">下一个节点：</div>
        <el-select v-model="session" class="small-select" placeholder="请选择">
          <el-option
            v-for="item in sessions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="flex mar_t10">
        <div class="fon_12 labeleft">选择操作对象：</div>
        <el-select v-model="session" class="small-select" placeholder="请选择">
          <el-option
            v-for="item in sessions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="flex mar_t10">
        <div class="fon_12 labeleft">操作类型：</div>
        <el-select v-model="session" class="small-select" placeholder="请选择">
          <el-option
            v-for="item in sessions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="flex mar_t10">
        <div class="fon_12 labeleft">是否需要审核：</div>
        <el-select v-model="session" class="small-select" placeholder="请选择">
          <el-option
            v-for="item in sessions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="flex mar_t10">
        <div class="fon_12 labeleft">选择审核对象：</div>
        <el-select v-model="session" class="small-select" placeholder="请选择">
          <el-option
            v-for="item in sessions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="flex mar_t10">
        <div class="fon_12 labeleft">是否有时间限制：</div>
        <el-button type="primary" round plain>开始</el-button>
        <el-button round plain>是</el-button>
        <el-button round plain>否</el-button>
      </div>
      <div class="t_c mar_t20">
        <el-button type="primary" class="wid" @click="shangyibu">保存</el-button>
      </div>

    </div>
  </div>
</template>

<script>
import '@/styles/llcss.css' // liuli css
export default {
  components: {},
  data() {
    return {
      activeName: 'wjdc',
      formInline: {
        date1: '',
        date2: '',
        keyword: '',
        lyOptions1: '',
        lyOptions2: '',
        lyOptions3: '',
        lyOptions4: '',
        isBlack: '',
        userChannel: '',
        timeData: ''
      },
      type: 1
    }
  },
  computed: {},
  created() {},
  methods: {
    onSearch() {},
    fetchData() {},
    shangyibu() {
      this.step = 1
    }
  }
}
</script>
<style scoped lang="scss">
.jhpz {
  .left {
    width: 244px;
  }
  .right {
    margin-left: 360px;
  }
  .start {
    width: 285px;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .jctc {
    width: 340px;
    top: 100px;
    left: 268px;
  }
  .labeleft {
    width: 100px;
    text-align: right;
  }
}
</style>
