<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000

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
      chart: null
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
      this.chart = echarts.init(this.$el)

      this.category === 1 && this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['企业01', '企业02', '企业03', '企业04', '企业05', '企业06', '企业07'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisLine: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '30%',
          data: [29, 52, 40, 64, 70, 88, 50],
          animationDuration,
          itemStyle: {
            color: '#3F81FF'
          }
        }]
      })
      this.category === 0 && this.chart.setOption({
        title: {
          text: '问题数量',
          textStyle: {
            color: '#808080',
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['不存在', '存在但不严重', '存在且比较严重', '存在且非常严重']
        },
        grid: {
          top: 60,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['企业01', '企业02', '企业03', '企业04', '企业05', '企业06', '企业07'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [
          {
            name: '不存在',
            type: 'bar',
            barGap: 0.2,
            emphasis: {
              focus: 'series'
            },
            data: [12, 4, 3, 8, 2, 5, 14],
            animationDuration,
            itemStyle: {
              color: '#5AD8A6'
            }
          },
          {
            name: '存在但不严重',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [6, 6, 8, 3, 8, 10, 7],
            animationDuration,
            itemStyle: {
              color: '#6DC8EC'
            }
          },
          {
            name: '存在且比较严重',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [10, 9, 14, 6, 11, 5, 2],
            animationDuration,
            itemStyle: {
              color: '#5B8FF9'
            }
          },
          {
            name: '存在且非常严重',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [4, 11, 4, 7, 3, 8, 12],
            animationDuration,
            itemStyle: {
              color: '#1D65EE'
            }
          }
        ]
      })
      this.category === 2 && this.chart.setOption({
        title: {
          text: '分值',
          padding: [20, 20, 30, 20],
          textStyle: {
            color: '#808080',
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 60,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['企业01', '企业02', '企业03', '企业04', '企业05', '企业06', '企业07'],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.15)'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#000000', // 更改坐标轴文字颜色
              fontSize: 12, // 更改坐标轴文字大小
              fontWeight: 500
            }
          }
        }],
        yAxis: [{
          show: true,
          type: 'value',
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.15)'
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.45)'
            }
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '25%',
          data: [92.5, 82.5, 75.5, 69.5, 62.5, 45.5, 25.5],
          animationDuration,
          itemStyle: {
            normal: {
              barBorderRadius: 10,
              color: '#3F81FF'
            },
            emphasis: {
              barBorderRadius: 10
            }
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#1D65EE', // 更改坐标轴文字颜色
              fontSize: 12, // 更改坐标轴文字大小
              fontWeight: 500
            }
          }
        }]
      })
    }
  }
}
</script>
