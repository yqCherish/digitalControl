<template>
  <div class="section-container">
    <div class="left-container" :class="leftFold?'panel-toggle':''">
      <div class="title-container">
        <div class="text">被巡查对象</div>
        <img v-if="leftFold" src="@/assets/img/supervise/taskManage/fold.png" @click="leftFold=false">
        <img v-else src="@/assets/img/supervise/taskManage/unfold.png" @click="leftFold=true">
      </div>
      <template v-if="!leftFold">
        <el-divider class="divider" />
        <div class="left-search-container">
          <el-input
            v-model="input2"
            class="input"
            placeholder="请输入单位/部门名称查询"
            prefix-icon="el-icon-search"
          />
          <p v-for="item in 12" class="company">L XXX企业</p>
        </div>
      </template>
    </div>
    <div class="content">
      <div class="handle-container">
        <el-select v-model="session" placeholder="请选择">
          <el-option
            v-for="item in sessions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-select v-model="turn" placeholder="请选择" style="margin: 0 10px;">
          <el-option
            v-for="item in turns"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">查看全部已结束任务</el-button>
      </div>
      <div class="procedure-container">
        <div class="procedure-item">
          <el-button class="procedure-button" :type="currentIndex >= 1 ? 'primary' : 'default'" round @click="currentIndex=1">① 检查准备</el-button>
          <img src="@/assets/img/supervise/taskManage/fold.png" @click="leftFold=false">
        </div>
        <div class="procedure-item">
          <el-button class="procedure-button" :type="currentIndex >= 2 ? 'primary' : 'default'" round @click="currentIndex=2">② 检查了解</el-button>
          <img src="@/assets/img/supervise/taskManage/fold.png" @click="leftFold=false">
        </div>
        <div class="procedure-item">
          <el-button class="procedure-button" :type="currentIndex >= 3 ? 'primary' : 'default'" round @click="currentIndex=3">③ 检查报告</el-button>
          <img src="@/assets/img/supervise/taskManage/fold.png" @click="leftFold=false">
        </div>
        <div class="procedure-item">
          <el-button class="procedure-button" :type="currentIndex >= 4 ? 'primary' : 'default'" round @click="currentIndex=4">④ 检查反馈</el-button>
          <img src="@/assets/img/supervise/taskManage/fold.png" @click="leftFold=false">
        </div>
        <div class="procedure-item">
          <el-button class="procedure-button" :type="currentIndex >=5 ? 'primary' : 'default'" round @click="currentIndex=5">⑤ 检查处置</el-button>
          <img src="@/assets/img/supervise/taskManage/fold.png" @click="leftFold=false">
        </div>
        <div class="procedure-item">
          <el-button class="procedure-button" :type="currentIndex >= 6 ? 'primary' : 'default'" round @click="currentIndex=6">⑥ 归档(系统自动)</el-button>
        </div>
      </div>
      <div class="main-box">
        <div class="main-left">
          <div class="main-title">
            贵州省贵阳市大数据产业集团有限公司
            <span>十五</span>届 监督巡查<span>第三轮 第一次</span>监督整改工作
          </div>
          <div v-if="currentIndex===1" class="main-message-box">
            <div class="main-inner-box">
              <div class="row-line">
                <label>任务名称：</label>
                <el-input class="large-input" value="贵州省贵阳市大数据产业集团有限公司第 十五届 监督巡查第三轮 第一次监督整改工作" />
              </div>
              <div class="row-line">
                <label>所属层次：</label>
                <el-input v-model="value1" placeholder="待填报" class="large-input" />
              </div>
              <div class="row-line">
                <label>所属层次：</label>
                <el-select v-model="session" class="small-select" placeholder="请选择">
                  <el-option
                    v-for="item in sessions"
                    :key="item"
                    :label="item"
                    :value="item"
                  />
                </el-select>
                <el-select v-model="turn" class="small-select" placeholder="请选择">
                  <el-option
                    v-for="item in turns"
                    :key="item"
                    :label="item"
                    :value="item"
                  />
                </el-select>
                <el-select v-model="time" class="small-select" placeholder="请选择">
                  <el-option
                    v-for="item in times"
                    :key="item"
                    :label="item"
                    :value="item"
                  />
                </el-select>
              </div>
              <div class="row-line">
                <label>隶属年/月：</label>
                <el-date-picker
                  v-model="value2"
                  class="datepick-middle"
                  style="margin-right: 23px;"
                  type="date"
                  placeholder="选择日期"
                />
                <el-date-picker
                  v-model="value3"
                  class="datepick-middle"
                  type="date"
                  placeholder="选择日期"
                />
              </div>
              <div class="row-line">
                <label>指标引用：</label>
                <el-input v-model="value4" class="middle-input" />
                <div class="quote-tips">
                  <img class="remind" src="@/assets/img/supervise/taskManage/remind@3x.png">
                  <p class="text">计划创建完成后可前往计划指标进行增删</p>
                </div>
              </div>
              <div class="row-line max-length">
                <label>报告类型：</label>
                <el-button type="primary" round plain>面上问题报告</el-button>
                <el-button round plain>个人问题报告</el-button>
              </div>
              <el-divider class="content-title" content-position="left">任务周期设置</el-divider>
              <div class="row-line bottom-length">
                <label>检查准备周期：</label>
                <el-date-picker
                  v-model="value5"
                  class="datepick-small"
                  style="margin-right: 12px;"
                  type="date"
                  placeholder="选择日期"
                />
                <el-date-picker
                  v-model="value6"
                  class="datepick-small"
                  type="date"
                  placeholder="选择日期"
                />
              </div>
              <div class="row-line bottom-length">
                <label>检查了解周期：</label>
                <el-date-picker
                  v-model="value7"
                  class="datepick-small"
                  style="margin-right: 12px;"
                  type="date"
                  placeholder="选择日期"
                />
                <el-date-picker
                  v-model="value8"
                  class="datepick-small"
                  type="date"
                  placeholder="选择日期"
                />
              </div>
              <div class="row-line bottom-length">
                <label>检查报告周期：</label>
                <el-date-picker
                  v-model="value9"
                  class="datepick-small"
                  style="margin-right: 12px;"
                  type="date"
                  placeholder="选择日期"
                />
                <el-date-picker
                  v-model="value10"
                  class="datepick-small"
                  type="date"
                  placeholder="选择日期"
                />
              </div>
              <div class="row-line bottom-length">
                <label>检查反馈周期：</label>
                <el-date-picker
                  v-model="value11"
                  class="datepick-small"
                  style="margin-right: 12px;"
                  type="date"
                  placeholder="选择日期"
                />
                <el-date-picker
                  v-model="value12"
                  class="datepick-small"
                  type="date"
                  placeholder="选择日期"
                />
              </div>
              <div class="row-line bottom-length">
                <label>检查处理周期：</label>
                <el-date-picker
                  v-model="value13"
                  class="datepick-small"
                  style="margin-right: 12px;"
                  type="date"
                  placeholder="选择日期"
                />
                <el-date-picker
                  v-model="value14"
                  class="datepick-small"
                  type="date"
                  placeholder="选择日期"
                />
              </div>
              <el-divider class="content-title" content-position="left">会议材料上传</el-divider>
              <div class="row-line bottom-length">
                <el-input disabled value="贵州省第 十五届 监督巡查第三轮 第一次监督整改工作通知.pdf" />
                <el-button style="margin-left: 10px" icon="el-icon-download">下载</el-button>
                <el-button icon="el-icon-view" plain type="primary">在线预览</el-button>
              </div>
              <div class="row-line bottom-length">
                <el-input disabled value="贵州省第 十五届 监督巡查第三轮 第一次监督整改工作通知.pdf" />
                <el-button style="margin-left: 10px" icon="el-icon-download">下载</el-button>
                <el-button icon="el-icon-view" plain type="primary">在线预览</el-button>
              </div>
            </div>
            <el-button style="margin-top: 24px;margin-bottom: 8px;" type="primary">确认并开始填报</el-button>
          </div>
          <div v-if="currentIndex===2" class="main-message-box">
            <step2 />
          </div>
          <div v-if="currentIndex===3" class="main-message-box">
            <step3 />
          </div>
          <div v-if="currentIndex===4" class="main-message-box">
            <step4 />
          </div>
          <div v-if="currentIndex===5" class="main-message-box">
            <step5 />
          </div>
          <div v-if="currentIndex===6" class="main-message-box">
            <step6 />
          </div>
        </div>
        <div class="right-container" :class="rightFold?'panel-toggle':''">
          <div class="title-container">
            <div class="text">被巡查对象</div>
            <img v-if="rightFold" src="@/assets/img/supervise/taskManage/fold.png" @click="rightFold=false">
            <img v-else src="@/assets/img/supervise/taskManage/unfold.png" @click="rightFold=true">
          </div>
          <template v-if="!rightFold">
            <el-divider class="divider" />
            <el-timeline class="timeline">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                class="timelineItem"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step2 from '@/views/supervise/taskManage/taskStep/step2'
import step3 from '@/views/supervise/taskManage/taskStep/step3'
import step4 from '@/views/supervise/taskManage/taskStep/step4'
import step5 from '@/views/supervise/taskManage/taskStep/step5'
import step6 from '@/views/supervise/taskManage/taskStep/step6'
export default {
  components: {
    step2,
    step3,
    step4,
    step5,
    step6
  },
  data() {
    return {
      leftFold: false,
      rightFold: false,
      input2: '',
      activities: [{
        content: '赵六：2021-04-24 10:00:00',
        timestamp: '检查报告：上报分析报表，确认报告类型（面上问题）',
        size: 'large'
      }, {
        content: '系统：2021-04-22 10:00:00',
        timestamp: '情况了解：自动完成分数合成',
        type: 'primary'
      }, {
        content: '李四：2021-04-21  10:00:00',
        timestamp: '情况了解：完成问题程度确认',
        size: 'large',
        type: 'primary'
      }, {
        content: '李四：2021-04-19  10:00:00',
        timestamp: '情况了解：完成上报材料',
        type: 'primary'
      }, {
        content: '李四：2021-04-18  10:00:00',
        timestamp: '检查准备：确认接收',
        type: 'primary'
      }],
      sessions: ['十三届', '十四届', '十五届'],
      session: '十五届',
      turns: ['第一轮', '第二轮', '第三轮轮'],
      turn: '第三轮',
      value1: '',
      value2: '',
      value3: '',
      value4: '共168页',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      value13: '',
      value14: '',
      times: ['第一次', '第二次', '第三次'],
      time: '第一次',
      currentIndex: 3
    }
  }
}
</script>

<style scoped lang="scss">
  .section-container {
    display: flex;
    height: 100%;
    padding: 16px;
    .left-container {
      flex-shrink: 0;
      width: 290px;
      background-color: white;
      border-radius: 4px;
      box-shadow: 0px 0px 8px 0px rgba(120, 121, 147, 0.2);
      .title-container {
        display: flex;
        padding: 16px;
        .text {
          font-size: 14px;
          font-weight: 500;
          color: #111111;
          flex: 1;
        }
        img {
          width: 16px;
          cursor: pointer;
        }
      }
      .divider {
        margin: 0 0 16px;
      }
      .left-search-container {
        padding: 0 16px;
        .input {
          margin-bottom: 24px;
        }
        .company {
          font-size: 12px;
          font-weight: 400;
          color: #111111;
          line-height: 16px;
          margin-left: 14px;
        }
      }
    }
    .content {
      flex: 1;
      margin-left: 10px;
      .handle-container {
        display: flex;
        align-items: center;
      }
      .procedure-container {
        display: flex;
        align-items: center;
        margin-top: 17px;
        margin-right: 100px;
        margin-bottom: 16px;
        .procedure-item {
          flex: 1;
          max-width: 217px;
          display: flex;
          align-items: center;
          .procedure-button {
            border-radius: 24px;
            width: 100%;
          }
          img {
            width: 20px;
            transform:rotate(-90deg);
            margin: 0 2px;
          }
        }
      }
      .main-box {
        display: flex;
        .main-left {
          flex: 1;
          padding: 10px 10px 0;
          .main-title {
            font-weight: 500;
            color: #111111;
            line-height: 28px;
            font-size: 20px;
            text-align: center;
            margin: 9px 0 20px;
            span {
              color: #1D65EE;
            }
          }
          .main-message-box {
            width: 100%;
            background: #FFFFFF;
            box-shadow: 0px 0px 8px 0px rgba(120, 121, 147, 0.2);
            border-radius: 4px;
            padding: 10px;
            display: flex;
            align-items: center;
            flex-direction: column;
            .main-inner-box {
              border: 1px solid #E7EBEF;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              flex-direction: column;
              padding: 18px 0 25px;
              .row-line {
                display: flex;
                align-items: center;
                font-size: 14px;
                color: #111111;
                font-weight: 500;
                line-height: 56px;
                &.max-length {
                  width: 733px;
                }
                &.bottom-length {
                  width: 660px;
                  margin-right: 70px;
                }
                label {
                  width: 122px;
                  text-align: right;
                  margin-right: 12px;
                }
                .large-input {
                  width: 599px
                }
                .small-select {
                  width: 189px;
                  margin-right: 16px;
                }
                .small-select:last-child {
                  margin-right: 0;
                }
                .datepick-small {
                  width: 257px;
                }
                .datepick-middle {
                  width: 288px;
                }
                .middle-input {
                  width: 305px;
                }
                .quote-tips {
                  display: flex;
                  align-items: center;
                  width: 294px;
                  padding-left: 14px;
                  .remind {
                    width: 18px;
                  }
                  .text {
                    font-weight: 400;
                    color: #999999;
                    font-size: 12px;
                    line-height: 17px;
                    margin-left: 2px;
                  }
                }
              }
              .content-title {
                width: 660px;
                margin-right: 100px;
              }
            }
          }
        }
        .right-container {
          flex-shrink: 0;
          width: 290px;
          background-color: white;
          border-radius: 4px;
          box-shadow: 0px 0px 8px 0px rgba(120, 121, 147, 0.2);
          .title-container {
            display: flex;
            padding: 16px;
            .text {
              font-size: 14px;
              font-weight: 500;
              color: #111111;
              flex: 1;
            }
            img {
              width: 16px;
              cursor: pointer;
            }
          }
          .divider {
            margin: 0 0 16px;
          }
          .timeline {
            padding-left: 24px;
            margin-top: 20px;
          }
          .timelineItem {
            padding-bottom: 32px;
            .el-timeline-item__timestamp{
              font-size: 12px;
              color: red;
            }
          }
        }
      }
    }
  }
  .panel-toggle {
    height: 48px;
  }
</style>
<style lang="scss">
.timelineItem {
  .el-timeline-item__content {
    font-weight: 500;
    color: #666666;
    line-height: 17px;
    font-size: 12px;
  }
  .el-timeline-item__timestamp{
    font-size: 12px;
    line-height: 17px;
    color: #999999;
  }
}
.content-title {
  .el-divider__text.is-left {
    left: 0px;
    font-weight: 500;
    color: #111111;
    line-height: 22px;
    font-size: 16px;
  }
}
</style>
