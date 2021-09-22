<template>
  <div class="xjbjjhxq">
    <el-drawer
      title="创建/编辑计划详情"
      :visible.sync="drawer2"
      direction="rtl"
      size="820px"
    >
      <div v-if="step == 1" class="">
        <div class="flex-bet pad_lr_20 fon_12">
          <div
            class="
              flex-1
              subjectbgcolor
              pad_10
              color_f
              lh25
              bor_rad5
              mar_r10
              rel
            "
          >
            <div>第一步：</div>
            <div>计划基础信息</div>
            <div class="sjx ab" />
          </div>
          <div class="flex-1 bor_rad5 pad_10 lh25 bor_dd">
            <div>第二步：</div>
            <div>选择被巡查单位负责人/被巡单位执行组</div>
          </div>
        </div>
        <div class="main-box">
          <div class="main-left">
            <div class="main-message-box">
              <div class="main-inner-box">
                <div class="row-line">
                  <label>计划名称：</label>
                  <el-input
                    v-model="value1"
                    placeholder="请输入计划名称（限20字符）"
                    class="large-input"
                  />
                </div>
                <div class="row-line">
                  <label>所属层次：</label>
                  <el-select
                    v-model="session"
                    class="small-select"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in sessions"
                      :key="item"
                      :label="item"
                      :value="item"
                    />
                  </el-select>
                  <el-select
                    v-model="turn"
                    class="small-select"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in turns"
                      :key="item"
                      :label="item"
                      :value="item"
                    />
                  </el-select>
                  <el-select
                    v-model="time"
                    class="small-select"
                    placeholder="请选择"
                  >
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
                    style="margin-right: 23px"
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
                    <img
                      class="remind"
                      src="@/assets/img/supervise/taskManage/remind@3x.png"
                    >
                    <p class="text">计划创建完成后可前往计划指标进行增删</p>
                  </div>
                </div>
                <div class="row-line max-length">
                  <label>报告类型：</label>
                  <el-button type="primary" round plain>是</el-button>
                  <el-button round plain>否</el-button>
                  <div class="quote-tips">
                    <img
                      class="remind"
                      src="@/assets/img/supervise/taskManage/remind@3x.png"
                    >
                    <p class="text">计划创建完成后可前往计划指标进行增删</p>
                  </div>
                </div>
                <el-divider
                  class="content-title"
                  content-position="left"
                >已添加重点</el-divider>
                <div class="row-line bottom-length">
                  <label>检查准备周期：</label>
                  <el-date-picker
                    v-model="value5"
                    class="datepick-small"
                    style="margin-right: 12px"
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
                    style="margin-right: 12px"
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
                    style="margin-right: 12px"
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
                    style="margin-right: 12px"
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
                    style="margin-right: 12px"
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
                <el-divider
                  class="content-title"
                  content-position="left"
                >会议材料上传</el-divider>
                <div class="row-line bottom-length flex-bet">
                  <div class="color_r fon_12">
                    提示：文件格式支持doc/docx、xls//xlsx、jpg/jpeg/png/swf、pdf，单个文件大小限100mb以内。
                  </div>
                  <div>
                    <el-button icon="el-icon-plus">添加</el-button>
                  </div>
                </div>
                <div class="row-line bottom-length">
                  <el-input
                    disabled
                    value="https://9v7l7o.axshare.com/323.png"
                  />
                  <el-button
                    icon="el-icon-upload2"
                    style="margin-left: 10px"
                  >上传</el-button>
                  <el-button
                    type="danger"
                    icon="el-icon-minus"
                    circle
                    size="mini"
                  />
                  <el-button
                    type="primary"
                    icon="el-icon-plus"
                    circle
                    size="mini"
                  />
                </div>
                <div class="row-line bottom-length">
                  <el-input
                    disabled
                    value="文件名称自动同步，支持修改后立即保存"
                  />
                  <el-button
                    icon="el-icon-upload2"
                    style="margin-left: 10px"
                  >上传</el-button>
                  <el-button
                    type="danger"
                    icon="el-icon-minus"
                    circle
                    size="mini"
                  />
                  <el-button
                    type="primary"
                    icon="el-icon-plus"
                    circle
                    size="mini"
                  />
                </div>
              </div>
              <div class="flex">
                <el-button class="mar_r20" @click="close">取消</el-button>
                <el-button
                  type="primary"
                  @click="xiayibu"
                >保存并下一步</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="step == 2" class="">
        <div class="flex-bet pad_lr_20 fon_12">
          <div class="flex-1 pad_10 lh25 bor_rad5 mar_r10 rel bor_dd">
            <div>第一步：</div>
            <div>计划基础信息</div>
          </div>
          <div class="flex-1 bor_rad5 pad_10 lh25 rel subjectbgcolor color_f">
            <div>第二步：</div>
            <div>选择被巡查单位负责人/被巡单位执行组</div>
            <div class="sjx ab" />
          </div>
        </div>
        <div class="main-box">
          <div class="main-left">
            <div class="main-message-box">
              <div class="main-inner-box">
                <div class="pad_10 ba_f5 wid">
                  <div class="row-line">
                    <label>选择被督查单位</label>
                    <el-input
                      v-model="value1"
                      placeholder="贵阳宏图科技有限公司（集团）, 创新发展事业部, 风控中心"
                      class="large-input2"
                    />
                    <el-button type="primary" class="mar_l20">选择</el-button>
                  </div>
                  <div class="flex-x-bottom">
                    <el-button class="" plain>确认添加</el-button>
                    <el-button class="" plain>重置所选</el-button>
                  </div>
                </div>
                <div class="bor_dd pad_10 wid mar_t20">
                  <div class="flex wid mar_l30">
                    <div>
                      <el-checkbox
                        v-model="checked"
                      >贵州省萨股份有限公司
                      </el-checkbox>
                    </div>
                    <div>
                      <el-button
                        type="text"
                        class="color_r mar_l10"
                      >删除</el-button>
                    </div>
                  </div>
                  <div class="row-line">
                    <label>选择检查组：</label>
                    <el-select
                      v-model="session"
                      class="small-select"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in sessions"
                        :key="item"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                    <el-select
                      v-model="turn"
                      class="small-select"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in turns"
                        :key="item"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                  </div>
                  <div class="row-line rel">
                    <label style="width: 330px">被巡单位负责人：</label>
                    <el-input value="张三，李四，王五" />
                    <el-button
                      class="mar_l20"
                      plain
                      @click="xzddfzr = true"
                    >选择</el-button>
                    <div v-show="xzddfzr" class="ab xzzxz">
                      <div class="title flex">
                        <div class="fon_14 wei">选择人员</div>
                        <div class="mar_l20">
                          <el-input
                            placeholder="请输人员姓名后查询"
                            style="width: 260px"
                          />
                        </div>
                        <div class="mar_l20">
                          <el-button type="primary">查询</el-button>
                        </div>
                      </div>
                      <div class="xzcon pad_20">
                        <div class="mar_l20" style="line-height: 30px">
                          <div>
                            <el-checkbox
                              v-model="checked"
                              style="width: 50px"
                            >张三
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                              style="width: 50px"
                            >李四
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                              style="width: 50px"
                            >王五
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                              style="width: 50px"
                            >张三
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                              style="width: 50px"
                            >李四
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                              style="width: 50px"
                            >王五
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                              style="width: 50px"
                            >王五
                            </el-checkbox>
                          </div>
                        </div>
                      </div>
                      <div class="flex-x-bottom xxfoot">
                        <el-button
                          class=""
                          plain
                          size="small"
                          @click="xzddfzr = false"
                        >确认添加</el-button>
                        <el-button
                          class=""
                          plain
                          size="small"
                          @click="xzddfzr = false"
                        >重置所选</el-button>
                      </div>
                    </div>
                  </div>
                  <div class="row-line rel">
                    <label style="width: 330px">被巡单位执行组：</label>
                    <el-input value="投资发展事业部，网络安全事业部" />
                    <el-button
                      class="mar_l20"
                      plain
                      @click="xzzxz = true"
                    >选择</el-button>
                    <div v-show="xzzxz" class="ab xzzxz">
                      <div class="title flex">
                        <div class="fon_14 wei">选择被巡单位</div>
                        <div class="mar_l20">
                          <el-input
                            placeholder="请输入单位名称后查询"
                            style="width: 260px"
                          />
                        </div>
                        <div class="mar_l20">
                          <el-button type="primary">查询</el-button>
                        </div>
                      </div>
                      <div class="xzcon pad_20">
                        <div style="line-height: 30px">
                          <el-checkbox
                            v-model="checked"
                          >贵阳火炬软件园管理有限公司
                          </el-checkbox>
                        </div>
                        <div class="mar_l20" style="line-height: 30px">
                          <div>
                            <el-checkbox
                              v-model="checked"
                            >创新发展事业部
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                            >网格安全事业部
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                            >融合发展事业部
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                            >投资发展事业部
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                            >云和基础服务事业部
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                              style="width: 100px"
                            >人力资源中心
                            </el-checkbox>
                          </div>
                          <div>
                            <el-checkbox
                              v-model="checked"
                              style="width: 80px"
                            >风控中心
                            </el-checkbox>
                          </div>
                        </div>
                      </div>
                      <div class="flex-x-bottom xxfoot">
                        <el-button
                          class=""
                          plain
                          size="small"
                          @click="xzzxz = false"
                        >确认添加</el-button>
                        <el-button
                          class=""
                          plain
                          size="small"
                          @click="xzzxz = false"
                        >重置所选</el-button>
                      </div>
                    </div>
                  </div>
                  <el-divider class="content-title" content-position="left" />
                  <div class="flex wid mar_l30">
                    <div>
                      <el-checkbox
                        v-model="checked"
                      >贵阳火炬软件园管理有限公司
                      </el-checkbox>
                    </div>
                    <div>
                      <el-button
                        type="text"
                        class="color_r mar_l10"
                      >删除</el-button>
                    </div>
                  </div>
                  <div class="row-line">
                    <label>选择检查组：</label>
                    <el-select
                      v-model="session"
                      class="small-select"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in sessions"
                        :key="item"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                    <el-select
                      v-model="turn"
                      class="small-select"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in turns"
                        :key="item"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                  </div>
                  <div class="row-line">
                    <label style="width: 330px">被巡单位负责人：</label>
                    <el-input value="张三，李四，王五" />
                    <el-button class="mar_l20" plain>选择</el-button>
                  </div>
                  <div class="row-line">
                    <label style="width: 330px">被巡单位执行组：</label>
                    <el-input value="投资发展事业部，网络安全事业部" />
                    <el-button class="mar_l20" plain>选择</el-button>
                  </div>
                  <div class="pad_10 ba_f5 wid flex-bet mar_t40">
                    <div class="flex">
                      <div>
                        已选择对象（已选<span class="subjectcolor">2</span>人）
                      </div>
                      <div class="mar_l10">
                        <el-checkbox v-model="checked">全选 </el-checkbox>
                      </div>
                    </div>
                    <div class="flex-x-bottom">
                      <el-button class="" plain>删除所有</el-button>
                      <el-button class="" plain>删除所选</el-button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex">
                <el-button class="mar_r20" @click="close">关闭</el-button>
                <el-button
                  type="primary"
                  @click="shangyibu"
                >返回上一步</el-button>
                <el-button type="primary">完成配置</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer2: false,
      title: '',
      dialogFormVisible: false,
      dialogVisible: false,
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
      step: 1,
      checked: true,
      xzzxz: false,
      xzddfzr: false,
      session: '',
      turn: '',
      sessions: [],
      turns: []
    }
  },
  // name: "edit",
  created() {},
  methods: {
    showEdit(row) {
      if (!row) {
        this.title = '添加'
        this.drawer = true
      } else {
        this.title = '编辑'
        this.drawer2 = true
        // this.form = Object.assign({}, row);
      }
      this.dialogFormVisible = true
    },
    close() {
      this.drawer2 = false
      // this.$refs['form'].resetFields()
      // this.form = this.$options.data().form
    },
    xiayibu() {
      this.step = 2
    },
    shangyibu() {
      this.step = 1
    },
    // close() {
    //   this.drawer2 = false
    // },
    handleSeeEdit() {
      this.dialogVisible = true
    }
  }
}
</script>
<style scoped lang="scss">
.sjx {
  left: 49%;
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-top: 18px solid #1d65ee;
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
        color: #1d65ee;
      }
    }
    .main-message-box {
      width: 100%;
      background: #ffffff;
      // box-shadow: 0px 0px 8px 0px rgba(120, 121, 147, 0.2);
      // border-radius: 4px;
      padding: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .main-inner-box {
        // border: 1px solid #E7EBEF;
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
            width: 599px;
          }
          .large-input2 {
            width: 479px;
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
}
.xzzxz {
  top: 0px;
  right: 0px;
  width: 550px;
  height: 384px;
  background: #ffffff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  border: 1px solid #cccccc;
  z-index: 1000;
  .title {
    background: #f7f8fa;
    height: 54px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 2px 2px 0px 0px;
    padding: 0 20px;
  }
  .xxfoot {
    padding: 10px;
    background: #f7f8fa;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 2px 2px 0px 0px;
  }
}
</style>
