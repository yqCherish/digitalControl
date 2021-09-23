<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    category: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      chart: null,
      chartDataList: [{
        title: '督查问题存在程度占比分析',
        data: [{ value: 520, name: '不存在', itemStyle: { color: '#5AD8A6' }},
          { value: 260, name: '存在但不严重', itemStyle: { color: '#5D7092' }},
          { value: 119, name: '存在且比较严重', itemStyle: { color: '#F6BD16' }},
          { value: 100, name: '存在且非常严重', itemStyle: { color: '#5B8FF9' }}],
        class: ['不存在', '存在但不严重', '存在且比较严重', '存在且非常严重']
      }, {
        title: '督查问题数量同期同比分析',
        data: [
          { value: 119, name: '2020', itemStyle: { color: '#EE6666' }},
          { value: 100, name: '2021', itemStyle: { color: '#5570C7' }}],
        class: ['2020', '2021']
      }, {
        title: '督查问题存在程度占比分析',
        data: [{ value: 239, name: '审核通过', itemStyle: { color: '#5AD8A6' }},
          { value: 100, name: '审核不通过', itemStyle: { color: '#E8684A' }}],
        class: ['审核通过', '审核不通过']
      }, {
        title: '督查问题存在程度占比分析',
        data: [{ value: 419, name: '面上问题报告', itemStyle: { color: '#6E9DF9' }},
          { value: 100, name: '个人问题报告', itemStyle: { color: '#FAC859' }}],
        class: ['面上问题报告', '个人问题报告']
      }, {
        title: '督查问题存在程度占比分析',
        data: [{ value: 520, name: '不存在', itemStyle: { color: '#5AD8A6' }},
          { value: 260, name: '存在但不严重', itemStyle: { color: '#5D7092' }},
          { value: 119, name: '存在且比较严重', itemStyle: { color: '#F6BD16' }},
          { value: 100, name: '存在且非常严重', itemStyle: { color: '#5B8FF9' }}],
        class: ['不存在', '存在但不严重', '存在且比较严重', '存在且非常严重']
      }, {
        title: '督查问题数量同期同比分析',
        data: [
          { value: 119, name: '2020', itemStyle: { color: '#EE6666' }},
          { value: 100, name: '2021', itemStyle: { color: '#5570C7' }}],
        class: ['2020', '2021']
      }, {
        title: '任务完成进度企业/部门数占比',
        data: [{ value: 520, name: '检查准备', itemStyle: { color: '#5AD8A6' }},
          { value: 260, name: '检查了解', itemStyle: { color: '#5570C7' }},
          { value: 119, name: '检查报告', itemStyle: { color: '#F6BD16' }},
          { value: 119, name: '检查反馈', itemStyle: { color: '#EE6666' }},
          { value: 119, name: '检查处置', itemStyle: { color: '#5D7092' }},
          { value: 100, name: '完成归档', itemStyle: { color: '#5B8FF9' }}],
        class: ['检查准备', '检查了解', '检查报告', '检查反馈', '检查处置', '完成归档']
      }]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons' + this.category)

      this.chart.setOption({
        title: {
          text: this.chartDataList[this.category].title,
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: this.category === 6 ? {
          orient: 'vertical',
          right: 10,
          bottom: 60,
          data: this.chartDataList[this.category].class
        } : this.category === 0 ? {
          orient: 'vertical',
          right: 0,
          bottom: 60,
          data: this.chartDataList[this.category].class
        } : this.category < 4 ? {
          orient: 'vertical',
          right: 50,
          bottom: 60,
          data: this.chartDataList[this.category].class
        } : {
          left: 'center',
          right: 10,
          bottom: 0,
          data: this.chartDataList[this.category].class
        },
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            // roseType: 'radius',
            radius: [35, 85],
            center: this.category === 6 ? ['35%', '50%'] : ['50%', '50%'],
            data: this.chartDataList[this.category].data,
            animationEasing: 'cubicInOut',
            animationDuration: 2600,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              show: false
            }
          }
        ]
      })
    }
  }
}
</script>
