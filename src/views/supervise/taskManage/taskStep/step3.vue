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
      />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        name: '0',
        province: '0',
        city: '0',
        address: '10 / 50.00',
        zip: '面上问题报告',
        handle: '下载问题清单',
        score: '85.30'
      }]
    }
  }
}
</script>

<style scoped lang="scss" src="./taskStep.scss">

</style>
