<template>
  <div class="dcxcjg pad_20">
    <div class="ba_f">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="督察巡查结果" name="dcxcjg">
          <dcxcjg />
        </el-tab-pane>
        <el-tab-pane label="督察整改结果" name="dczgjg">
          <dczgjg />
        </el-tab-pane>
        <el-tab-pane label="整改问题清单结果" name="zgwtqd">
          <zgwtqd />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import '@/styles/llcss.css' // liuli css
import dcxcjg from '@/views/supervise/patrolResults/compages/dcxcjg'
import dczgjg from '@/views/supervise/patrolResults/compages/dczgjg'
import zgwtqd from '@/views/supervise/patrolResults/compages/zgwtqd'
export default {
  name: 'ResultList',
  components: {
    dcxcjg,
    dczgjg,
    zgwtqd
  },
  data() {
    return {
      activeName: 'dcxcjg'
    }
  },
  computed: {},
  created() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onSearch() {}
    // handleSeeEdit(row) {
    //   this.$router.push(`/userdetails?id=${row.id}`);
    // },
  }
}
</script>
