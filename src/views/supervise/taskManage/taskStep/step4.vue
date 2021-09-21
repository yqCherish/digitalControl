<template>
  <div class="step-container">
    <div class="display_row_center">
      <label class="step4-label">督查巡查对象：</label>
      <el-input class="step4-input-1" v-model="value1" disabled/>
    </div>
    <div class="display_row_center">
      <label class="step4-label">整改对象：</label>
      <el-input class="step4-input-1" v-model="value2" disabled/>
    </div>
    <div class="display_row_center">
      <label class="step4-label">督查巡查任务状态：</label>
      <el-input class="step4-input-1" v-model="value3" disabled/>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-top: 14px;margin-bottom: 24px;"
    >
      <el-table-column label="问题程度类型">
        <el-table-column
          prop="name"
          label="不存在（细则数 / 分值）"
          width="160"
        />
        <el-table-column
          prop="province"
          label="存在但不重要（细则数 / 分值）"
          width="160"
        />
        <el-table-column
          prop="city"
          label="存在且比较严重（细则数 / 分值）"
          width="160"
        />
        <el-table-column
          prop="address"
          label="存在且非常严重（细则数 / 分值）"
          width="180"
        />
      </el-table-column>
      <el-table-column
        prop="score"
        label="实际得分"
      />
      <el-table-column
        prop="zip"
        label="报告类型"
      />
      <el-table-column
        prop="handle"
        label="操作"
      >
        <template slot-scope="scope">
          <el-link type="primary">下载问题清单</el-link>
        </template>
      </el-table-column>
    </el-table>
    <div class="main-inner-box" style="padding: 16px;">
      <div class="display_row_center" style="margin-bottom: 25px;">
        <label class="step4-label-1">问题报告名称：</label>
        <el-input style="width: 400px" v-model="reportName"/>
      </div>
      <tinymce v-model="content" :height="300" />
      <label style="margin: 24px 0 16px;" class="text-label">政治生态画像：</label>
      <el-input
        v-model="textarea2"
        style="width: 100%;margin-left: 0;"
        type="textarea"
        class="textarea"
        :autosize="{ minRows: 4, maxRows: 6}"
        placeholder="请输入情况了解简要描述"
      />
      <div class="display_row_center" style="margin: 21px 0 24px;">
        <label class="text-label">整理后问题清单附件：</label>
        <el-input class="desc-input" disabled value="xxxxx.doc" />
        <el-button icon="el-icon-download" plain>下载</el-button>
        <el-button icon="el-icon-view" plain type="primary">在线预览</el-button>
      </div>
      <label style="margin: 0 0 18px;" class="text-label">其他附件：</label>
      <div class="display_row_center annex-container">
        <div class="order-number font-title">序号</div>
        <div class="annex-message font-title">附件信息</div>
        <div class="handle font-title">操作</div>
      </div>
      <div v-for="(item, index) in annexList" class="display_row_center annex-result-container">
        <div class="order-number font-title">{{ index + 1 }}</div>
        <div class="annex-message font-title">
          <el-input style="width: 371px;" :value="item.message" disabled />
        </div>
        <div class="handle font-title display_row_center">
          <el-button icon="el-icon-download" type="primary" size="mini" plain round>下载</el-button>
        </div>
      </div>
      <div class="desc-container">
        <div class="desc-title">审批日志</div>
        <div class="desc-text">
          张三   2021-04-24 10:00:00  审核 同意   审核备注：--
        </div>
        <div class="desc-text">
          李四   2021-04-24 10:00:00   审核 同意   审核备注：--
        </div>
        <div>
          确认查看
        </div>
        <div>
          被巡查单位主要负责人： 已确认
        </div>
        <div>
          被巡查单位执行组 （李四）：已确认
        </div>
      </div>
    </div>
    <div class="display_row_center" style="justify-content: center;margin: 24px 0 14px;">
      <el-button type="primary">上一步</el-button>
      <el-button type="primary" style="margin-left: 20px">发起整改</el-button>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce';
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      value1: "集团第一巡查组",
      value2: "xxxx企业/部门",
      value3: "已确认",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      tableData: [{
        name: '0',
        province: '0',
        city: '0',
        address: '10 / 50.00',
        zip: '面上问题报告',
        handle: '下载问题清单',
        score: '85.30'
      }],
      reportName: "关于xxxx企业/部门/个人督查整改情况汇报",
      content:
        `信息必须通过转换而再度为人眼所读取。具体方法依赖于感光`,
      textarea2: "政治画像政治画像政治画像政治画像政治画像",
      annexList: [{
        message: '巡查报告.doc'
      }, {
        message: '个人领导报告'
      }, {
        message: '专项报告'
      }]
    }
  }
}
</script>

<style scoped lang="scss" src="./taskStep.scss">

</style>
