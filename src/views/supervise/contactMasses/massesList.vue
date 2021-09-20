<template>
  <div class="lxqzgl pad_20">
    <div class="ba_f">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="联系群众管理" name="lxqzgl">
          <lxqzgl />
        </el-tab-pane>
        <el-tab-pane label="问卷调查" name="wjdc">
          <wjdc />
        </el-tab-pane>
        <el-tab-pane label="联系群众须知配置" name="lxqzxzpz">
          <lxqzxzpz />
        </el-tab-pane>
        <el-tab-pane label="联系信息配置" name="lxxxpz">
          <lxxxpz />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import '@/styles/llcss.css' // liuli css
import lxqzgl from '@/views/supervise/contactMasses/compages/lxqzgl'
import wjdc from '@/views/supervise/contactMasses/compages/wjdc'
import lxqzxzpz from '@/views/supervise/contactMasses/compages/lxqzxzpz'
import lxxxpz from '@/views/supervise/contactMasses/compages/lxxxpz'
export default {
  name: 'MassesList',
  components: { lxqzgl, wjdc, lxqzxzpz, lxxxpz },
  data() {
    return {
      activeName: 'lxqzgl'
    }
  },
  computed: {},
  created() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onSearch() {},
    fetchData() {}
  }
}
</script>
