<template>
  <div class="step-container">
    <el-table
      :data="tableData"
      style="width: 100%"
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
    <div class="main-inner-box" style="margin-top: 24px;padding: 14px 17px 24px;">
      <div class="display_row_center" style="margin-bottom: 24px;">
        <label class="text-label">问题报告名称：</label>
        <el-input v-model="reportName" style="width: 400px;margin-left: 7px;"></el-input>
      </div>
      <tinymce v-model="content" :height="300" />
      <label style="margin: 24px 0 16px;" class="text-label">政治生态画像：</label>
      <el-input
        style="width: 100%;margin-left: 0;"
        v-model="textarea2"
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
      <label style="margin: 24px 0 18px;" class="text-label">其他附件：</label>
      <div class="display_row_center annex-container">
        <div class="order-number font-title">序号</div>
        <div class="annex-message font-title">附件信息</div>
        <div class="handle font-title">操作</div>
      </div>
      <div class="display_row_center annex-result-container" v-for="(item, index) in annexList">
        <div class="order-number font-title">{{ index + 1 }}</div>
        <div class="annex-message font-title">
          <el-input style="width: 371px;" :value="item.message" disabled/>
        </div>
        <div class="handle font-title display_row_center">
          <el-button icon="el-icon-download" type="primary" size="mini" plain round>下载</el-button>
          <el-button icon="el-icon-upload2" v-if="item.upload" size="mini" type="primary" plain round>上传</el-button>
          <el-button icon="el-icon-delete" type="danger" size="mini" plain round>删除</el-button>
        </div>
      </div>
    </div>
    <div class="display_row_center" style="justify-content: center;margin: 24px 0 14px;">
      <el-button type="primary">上一步</el-button>
      <el-button type="primary" style="margin-left: 20px">检查报告完成并提交</el-button>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      reportName: "关于xxxx企业/部门/个人督查整改情况汇报",
      tableData: [{
        name: '0',
        province: '0',
        city: '0',
        address: '10 / 50.00',
        zip: '面上问题报告',
        handle: '下载问题清单',
        score: '85.30'
      }],
      textarea2: "政治画像政治画像政治画像政治画像政治画像",
      annexList: [{
        message: "",
        upload: false
      }, {
        message: "个人领导报告",
        upload: true
      }, {
        message: "专项报告",
        upload: true
      }],
      content:
        `信息必须通过转换而再度为人眼所读取。具体方法依赖于感光`
    }
  }
}
</script>

<style scoped lang="scss" src="./taskStep.scss">

</style>
<style>
.mce-statusbar {
  display: none!important;
}
</style>
