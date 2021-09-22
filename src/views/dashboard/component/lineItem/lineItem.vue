<template>
  <div class="text-container">
    <div v-for="item in dataList" class="display_flex_center m-b-17">
      <div class="date">{{ item.date }}</div>
      <div class="content">{{ item.content }}</div>
      <div v-if="item.finished" class="state">已办</div>
      <template v-else>
        <div class="active-state">标为已办</div>
        <div class="active-state m-l-12">查看</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [{
        date: '2021/04/28',
        content: '第十五届2021年第一次巡查任务过程中的局部…',
        finished: false
      }, {
        date: '2021/04/28',
        content: '第十五届2021年第一次巡查任务过程中的局部…',
        finished: false
      }, {
        date: '2021/04/28',
        content: '第十五届2021年第一次巡查任务过程中的局部…',
        finished: false
      }, {
        date: '2021/04/28',
        content: '第十五届2021年第一次巡查任务过程中的局部…',
        finished: false
      }, {
        date: '2021/04/28',
        content: '第十五届2021年第一次巡查任务过程中的局部…',
        finished: true
      }, {
        date: '2021/04/28',
        content: '第十五届2021年第一次巡查任务过程中的局部…',
        finished: false
      }]
    }
  }
}
</script>

<style scoped lang="scss">
  .text-container {
    padding: 22px 0 7px;
    .date {
      font-weight: 400;
      color: #999999;
      line-height: 20px;
      font-size: 14px;
      margin-right: 12px;
    }
    .content {
      font-weight: 500;
      color: #111111;
      line-height: 20px;
      font-size: 14px;
      flex: 1;
    }
    .state {
      font-weight: 400;
      color: #111111;
      line-height: 20px;
      font-size: 14px;
    }
    .active-state{
      font-weight: 400;
      color: #1D65EE;
      line-height: 20px;
      font-size: 14px;
    }
  }
  .display_flex_center {
    display: flex;
    align-items: center;
  }
  .m-b-17 {
    margin-bottom: 17px;
  }
  .m-l-12 {
    margin-left: 12px;
  }
</style>
