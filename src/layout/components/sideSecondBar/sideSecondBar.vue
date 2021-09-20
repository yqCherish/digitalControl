<template>
  <div class="bar-container">
    <header class="display_flex">
      <el-divider class="col-divider" direction="vertical" style="color: red;" />
      <div>{{ secondMenus.meta.title }}</div>
      <!--      <div class="second-bar-title">监督整改</div>-->
    </header>
    <el-divider class="row-divider" />
    <div v-for="item in secondMenus.children" class="child-item">
      <div class="child-title">{{ item.title }}</div>
      <div class="display_flex">
        <p v-for="line in item.children" class="child-link" @click="_linkPage(line.name)">{{ line.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'secondMenus'
    ])
  },
  name: 'SideSecondBar',
  methods: {
    _linkPage(name) {
      console.log('name', name)
      this.$router.push({
        name
      })
      this.$store.commit('app/TOGGLE_SIDEBAR')
    }
  }
}
</script>

<style scoped>
  .display_flex {
    display: flex;
    flex-wrap: wrap;
  }
  .bar-container {
    padding: 16px;
  }
  .col-divider {
    background-color: #1D65EE;
    width: 2px;
  }
  .second-bar-title {
    font-size: 14px;
    font-weight: 500;
    color: #111111;
  }
  .row-divider {
    margin: 10px 0;
  }
  .child-title {
    font-size: 12px;
    font-weight: 500;
    color: #111111;
  }
  .child-link {
    font-weight: 400;
    color: #999999;
    font-size: 14px;
    margin-right: 24px;
    cursor: pointer;
  }
  .child-link:last-child {
    margin-right: 0;
  }
  .child-item {
    margin: 15px 0 10px;
    display: inline-block;
  }
</style>
