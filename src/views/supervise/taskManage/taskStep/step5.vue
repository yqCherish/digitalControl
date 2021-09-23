<template>
  <div class="step-container">
    <div class="display_row_center margin-l-6">
      <label class="step4-label">督查巡查对象：</label>
      <el-input v-model="value1" class="step4-input-1" style="margin-left: 12px" disabled />
    </div>
    <div class="display_row_center margin-l-6">
      <label class="step4-label">整改对象：</label>
      <el-input v-model="value2" class="step4-input-1" style="margin-left: 12px" disabled />
    </div>
    <div class="display_row_center margin-l-6">
      <label class="step4-label">督查巡查任务状态：</label>
      <el-input v-model="value3" class="step4-input-1" style="margin-left: 12px" disabled />
    </div>
    <div class="display_row_center margin-l-6">
      <label class="step4-label">整改问题清单：</label>
      <el-button style="margin-left: 12px" icon="el-icon-view" plain type="primary">查看详情</el-button>
      <el-button icon="el-icon-download" plain type="primary">下载问题清单</el-button>
    </div>
    <div class="tab-container">
      <div class="tab-line display_row_center">
        <a v-for="(ite, index) in tabList" class="line-item" :class="{'active': tabIndex===index}" @click="tabIndex = index">{{ ite }}</a>
      </div>
      <div class="tab-content">
        <template v-if="tabIndex===0">
          <div class="display_row_center meeting-container">
            <div class="font-title">会议类型</div>
            <div class="font-title">会议时间</div>
            <div class="font-title">参会人员</div>
            <div class="font-title">审阅情况</div>
            <div class="font-title">操作</div>
          </div>
          <div v-for="(item, index) in meetingList" class="display_row_center meeting-container border-bottom" style="background-color: white;height: 76px;">
            <div class="font-text">{{ item.category }}</div>
            <div class="font-text">{{ item.date }}</div>
            <div class="font-text">{{ item.persons }}</div>
            <div class="font-text">
              <div v-for="(ite, index) in item.condition" class="display_row_center">
                <span>{{ ite }}</span>
                <span v-if="index===0" class="condition-state">已审阅</span></div>
            </div>
            <div class="handle font-title display_row_center">
              <el-button icon="el-icon-tickets" type="primary" size="mini" plain round @click="drawer2=true">详情</el-button>
              <el-button icon="el-icon-view" type="primary" size="mini" plain round @click="drawer1=true">审阅</el-button>
            </div>
          </div>
        </template>
        <template v-if="tabIndex===1">
          <div class="display_row_center meeting-container">
            <div class="font-title">整改方案</div>
            <div class="font-title">上传时间</div>
            <div class="font-title">备注</div>
            <div class="font-title">审阅情况</div>
            <div class="font-title">操作</div>
          </div>
          <div v-for="(item, index) in editList" class="display_row_center meeting-container border-bottom" style="background-color: white;height: 76px;">
            <div class="font-text">{{ item.category }}</div>
            <div class="font-text">{{ item.date }}</div>
            <div class="font-text">{{ item.persons }}</div>
            <div class="font-text">
              <div v-for="(ite, index) in item.condition" class="display_row_center">
                <span>{{ ite }}</span>
                <span v-if="index===0" class="condition-state">已审阅</span></div>
            </div>
            <div class="handle font-title display_row_center">
              <el-button icon="el-icon-tickets" type="primary" size="mini" plain round @click="drawer3=true">详情</el-button>
              <el-button icon="el-icon-view" type="primary" size="mini" plain round @click="drawer1=true">审阅</el-button>
            </div>
          </div>
        </template>
        <template v-if="tabIndex===2">
          <div class="display_row_center meeting-container">
            <div class="font-title">整改方案</div>
            <div class="font-title">上传时间</div>
            <div class="font-title">报告类型</div>
            <div class="font-title">审阅情况</div>
            <div class="font-title">操作</div>
          </div>
          <div v-for="(item, index) in categoryList" class="display_row_center meeting-container border-bottom" style="background-color: white;height: 76px;">
            <div class="font-text">{{ item.category }}</div>
            <div class="font-text">{{ item.date }}</div>
            <div class="font-text">{{ item.persons }}</div>
            <div class="font-text">
              <div v-for="(ite, index) in item.condition" class="display_row_center">
                <span>{{ ite }}</span>
                <span v-if="index===0" class="condition-state">已审阅</span></div>
            </div>
            <div class="handle font-title display_row_center">
              <el-button icon="el-icon-tickets" type="primary" size="mini" plain round @click="drawer4=true">详情</el-button>
              <el-button icon="el-icon-view" type="primary" size="mini" plain round @click="drawer1=true">审阅</el-button>
            </div>
          </div>
        </template>
        <template v-if="tabIndex===3">
          <div class="display_row_center" style="margin-bottom: 16px;">
            <label class="text-label" style="font-weight: 400;">问题清单类型:</label>
            <a v-for="(item, index1) in chooseButtonList" class="choose-pro-button" :class="{'active': index1===choose_pro}" @click="choose_pro=index1">{{ item }}</a>
          </div>
          <div class="display_row_center meeting-container">
            <div v-for="(item, ind) in choose_pro === 0 ? titleList : titleList2" class="font-title-2" :class="'font-title-width-' + ind">{{ item }}</div>
          </div>
          <div v-for="(item, index) in choose_pro === 0 ? resultList1 : resultList2" class="display_row_center meeting-container border-bottom" style="background-color: white;height: 76px;">
            <div class="font-text-2 font-title-width-0">{{ index + 1 }}</div>
            <div class="font-text-2 font-title-width-1">{{ item.name1 }}</div>
            <div class="font-text-2 font-title-width-2">{{ item.name2 }}</div>
            <div class="font-text-2 font-title-width-3">{{ item.name3 }}</div>
            <div class="font-text-2 font-title-width-4">{{ item.name4 }}</div>
            <div class="font-text-2 font-title-width-5">{{ item.name5 }}</div>
            <div class="font-text-2 font-title-width-6">{{ item.name6 }}</div>
            <div class="font-text-2 font-title-width-7">{{ item.name7 }}</div>
            <div class="font-text-2 font-title-width-8">{{ item.name8 }}</div>
            <div class="font-text-2 font-title-width-9">{{ item.name9 }}</div>
            <div class="font-text-2 font-title-width-10">{{ item.name10 }}</div>
            <div class="font-text-2 font-title-width-11">
              <div v-for="(ite, index) in item.condition" class="display_row_center">
                <span>{{ ite }}</span>
                <span v-if="index===0" class="condition-state">已审阅</span></div>
            </div>
            <div class="handle font-text-2 font-title-width-12">
              <el-button icon="el-icon-tickets" type="primary" size="mini" plain round @click="drawer4=true">详情</el-button>
              <el-button style="margin-left: 0;margin-top: 5px" icon="el-icon-view" type="primary" size="mini" plain round @click="choose_pro === 0 ? drawer5=true : drawer6=true">审阅</el-button>
            </div>
          </div>
        </template>
      </div>
    </div>
<!--    <div class="display_row_center margin-l-6" style="margin-top: 24px;">-->
<!--      <el-checkbox v-model="all_check" label="全选" @change="changeAll" />-->
<!--      <el-button style="margin-left: 16px;" size="medium" type="primary" @click="reset">重置</el-button>-->
<!--    </div>-->
<!--    <div class="tab5-title" style="margin-top: 11px;">编号</div>-->
<!--    <div class="display_row_center margin-l-6" style="margin-bottom: 16px;">-->
<!--      <el-checkbox v-model="checkbox.c1" label="序号" />-->
<!--    </div>-->
<!--    <div class="display_row_center margin-l-6">-->
<!--      <el-checkbox v-model="checkbox.c2" class="flex-1" label="机构形状区划" />-->
<!--      <el-checkbox v-model="checkbox.c3" class="flex-1" label="台账编号" />-->
<!--      <el-checkbox v-model="checkbox.c4" class="flex-1" label="问题线索编号" />-->
<!--      <el-checkbox v-model="checkbox.c5" class="flex-1" label="线索来源" />-->
<!--    </div>-->
<!--    <div class="tab5-title">问题线索信号</div>-->
<!--    <div class="display_row_center margin-l-6">-->
<!--      <el-checkbox v-model="checkbox.c6" class="flex-1" label="面上问好单位" />-->
<!--      <el-checkbox v-model="checkbox.c7" class="flex-1" label="内容摘要" />-->
<!--      <el-checkbox v-model="checkbox.c8" class="flex-1" label="发生时间" />-->
<!--      <el-checkbox v-model="checkbox.c9" class="flex-1" label="移交时间" />-->
<!--    </div>-->
<!--    <div class="tab5-title">问题线索分类</div>-->
<!--    <div class="display_row_center margin-l-6">-->
<!--      <el-checkbox v-model="checkbox.c10" class="flex-1" label="问题线索类别" />-->
<!--      <el-checkbox v-model="checkbox.c11" class="flex-1" label="问题线索子类" />-->
<!--      <el-checkbox v-model="checkbox.c12" class="flex-1" label="六个围绕类别" />-->
<!--      <el-checkbox v-model="checkbox.c13" class="flex-1" label="线索涉及辖区" />-->
<!--    </div>-->
<!--    <div class="display_row_center margin-l-6 margin-t-16">-->
<!--      <el-checkbox v-model="checkbox.c14" class="flex-1" label="八项规定类别" />-->
<!--      <el-checkbox v-model="checkbox.c15" class="flex-1" label="线索涉及领域" />-->
<!--      <el-checkbox v-model="checkbox.c16" class="flex-1" label="线索涉及详细领域" />-->
<!--      <el-checkbox v-model="checkbox.c17" class="flex-1" label="自定义类别" />-->
<!--    </div>-->
<!--    <div class="display_row_center margin-l-6 margin-t-16">-->
<!--      <el-checkbox v-model="checkbox.c18" class="flex-1" label="自定义子类" />-->
<!--    </div>-->
<!--    <div class="tab5-title">办理信息</div>-->
<!--    <div class="display_row_center margin-l-6">-->
<!--      <el-checkbox v-model="checkbox.c19" class="flex-1" label="自定义子类" />-->
<!--      <el-checkbox v-model="checkbox.c20" class="flex-1" label="深入了解情况说明" />-->
<!--      <el-checkbox v-model="checkbox.c21" class="flex-1" label="分类处理意见" />-->
<!--      <el-checkbox v-model="checkbox.c22" class="flex-1" label="移交单位" />-->
<!--    </div>-->
<!--    <div class="display_row_center margin-l-6 margin-t-16">-->
<!--      <el-checkbox v-model="checkbox.c23" class="flex-1" label="具体反馈意见" />-->
<!--      <el-checkbox v-model="checkbox.c24" class="flex-1" label="处理方式" />-->
<!--      <el-checkbox v-model="checkbox.c25" class="flex-1" label="处理结果" />-->
<!--      <el-checkbox v-model="checkbox.c26" class="flex-1" label="移交人" />-->
<!--    </div>-->
<!--    <div class="display_row_center margin-l-6 margin-t-16">-->
<!--      <el-checkbox v-model="checkbox.c27" class="flex-1" label="问题类型" />-->
<!--      <el-checkbox v-model="checkbox.c28" class="flex-1" label="问题概述" />-->
<!--      <el-checkbox style="visibility: hidden" class="flex-1" label="问题概述" />-->
<!--      <el-checkbox style="visibility: hidden" class="flex-1" label="问题概述" />-->
<!--    </div>-->
<!--    <div class="tab5-title">督办信息</div>-->
<!--    <div class="display_row_center margin-l-6">-->
<!--      <el-checkbox v-model="checkbox.c29" class="flex-1" label="办理回告限时（天）" />-->
<!--      <el-checkbox v-model="checkbox.c30" class="flex-1" label="是否办结" />-->
<!--      <el-checkbox v-model="checkbox.c31" class="flex-1" label="具体办理情况" />-->
<!--      <el-checkbox v-model="checkbox.c32" class="flex-1" label="涉密等级" />-->
<!--    </div>-->
<!--    <div class="display_row_center margin-l-6 margin-t-16">-->
<!--      <el-checkbox v-model="checkbox.c33" class="flex-1" label="备注" />-->
<!--    </div>-->
<!--    <div class="tab5-title">整改情况</div>-->
<!--    <div class="display_row_center margin-l-6">-->
<!--      <el-checkbox v-model="checkbox.c34" class="flex-1" label="具体整改措施（项）" />-->
<!--      <el-checkbox v-model="checkbox.c35" class="flex-1" label="完善制度（项）" />-->
<!--      <el-checkbox v-model="checkbox.c36" class="flex-1" label="挽回损失（万）" />-->
<!--      <el-checkbox v-model="checkbox.c37" class="flex-1" label="完成情况" />-->
<!--    </div>-->
<!--    <div class="display_row_center margin-l-6 margin-t-16">-->
<!--      <el-checkbox v-model="checkbox.c38" class="flex-1" label="追责问责（人）" />-->
<!--      <el-checkbox v-model="checkbox.c39" class="flex-1" label="追责问责（单位）" />-->
<!--      <el-checkbox v-model="checkbox.c40" class="flex-1" label="其他" />-->
<!--      <el-checkbox v-model="checkbox.c41" class="flex-1" label="说明" />-->
<!--    </div>-->
<!--    <div class="display_row_center margin-l-6 margin-t-16">-->
<!--      <el-checkbox v-model="checkbox.c42" class="flex-1" label="其他成果" />-->
<!--    </div>-->
    <el-drawer
      title="审阅意见"
      :visible.sync="drawer1"
      direction="rtl"
    >
      <div style="padding: 10px 24px 10px 23px;">
        <div class="display_row">
          <label class="panel-label" style="width: 142px;text-align: right">审阅意见：</label>
          <el-input
            v-model="textarea2"
            style="width: 100%;margin-left: 10px;"
            type="textarea"
            class="textarea"
            :autosize="{ minRows: 6, maxRows: 8}"
            placeholder="限制500字符"
          />
        </div>
      </div>
    </el-drawer>
    <el-drawer
      title="详情"
      :visible.sync="drawer2"
      direction="rtl"
    >
      <div style="padding: 10px 24px 10px 23px;">
        <div class="display_row">
          <label class="panel-label" style="width: 142px;text-align: right">会议类型：</label>
          <el-input
            v-model="input_value_1"
            style="width: 100%;margin-left: 10px;"
            readonly
          />
        </div>
        <div class="display_row m_t_24">
          <label class="panel-label" style="width: 142px;text-align: right">会议时间：</label>
          <el-input
            v-model="date_value_1"
            style="width: 100%;margin-left: 10px;"
            readonly
          />
        </div>
        <div class="display_row m_t_24">
          <label class="panel-label" style="width: 142px;text-align: right">参会人员：</label>
          <el-input
            v-model="input_value_2"
            style="width: 100%;margin-left: 10px;"
            readonly
          />
        </div>
        <div class="display_row m_t_24">
          <label class="panel-label" style="width: 142px;text-align: right">会议摘要：</label>
          <el-input
            v-model="textarea3"
            style="width: 100%;margin-left: 10px;"
            type="textarea"
            class="textarea"
            :autosize="{ minRows: 6, maxRows: 8}"
            readonly
          />
        </div>
        <div class="display_row" style="margin-top: 20px;">
          <label class="panel-label" style="width: 142px;text-align: right">审阅详情：</label>
          <el-input
            v-model="textarea4"
            style="width: 100%;margin-left: 10px;"
            type="textarea"
            class="textarea"
            :autosize="{ minRows: 6, maxRows: 8}"
            placeholder="限制500字符"
            readonly
          />
        </div>
      </div>
    </el-drawer>
    <el-drawer
      title="详情"
      :visible.sync="drawer3"
      direction="rtl"
      size="40%"
    >
      <div style="padding: 10px 24px 10px 23px;">
        <div class="display_row">
          <label class="panel-label" style="width: 142px;text-align: right">会议类型：</label>
          <el-input
            v-model="input_value_3"
            style="width: 433px;margin-left: 10px;"
            readonly
          />
        </div>
        <div class="display_row m_t_24">
          <label class="panel-label" style="width: 142px;text-align: right">会议时间：</label>
          <el-input
            v-model="date_value_1"
            style="width: 433px;margin-left: 10px;"
            readonly
          />
        </div>
        <div class="display_row m_t_24">
          <label class="panel-label" style="width: 142px;text-align: right">参会人员：</label>
          <el-input
            v-model="input_value_4"
            style="width: 433px;margin-left: 10px;"
            readonly
          />
        </div>
        <div class="display_row m_t_24">
          <label class="panel-label" style="width: 142px;text-align: right;height: 30px;line-height: 30px;">附件：</label>
          <div style="flex: 1;margin-left: 10px;width: 433px">
            <el-button icon="el-icon-upload2" size="mini" type="primary" plain>上传</el-button>
            <div class="display_row_center" style="margin-top: 18px;">
              <div class="panel-desc">贵阳大数据产业集团人力资源部问题整改方案</div>
              <el-button type="primary" plain size="small">下载</el-button>
              <el-button type="danger" plain size="small">删除</el-button>
            </div>
          </div>
        </div>
        <div class="display_row" style="margin-top: 29px;">
          <label class="panel-label" style="width: 142px;text-align: right">审阅详情：</label>
          <el-input
            v-model="textarea4"
            style="width: 433px;margin-left: 10px;"
            type="textarea"
            class="textarea"
            :autosize="{ minRows: 6, maxRows: 8}"
            placeholder="限制500字符"
            readonly
          />
        </div>
      </div>
      <el-button style="position: absolute;right: 18px;bottom: 16px;" type="primary" size="medium" @click="drawer3=false">保存</el-button>
    </el-drawer>
    <el-drawer
      title="文件预览"
      :visible.sync="drawer4"
      direction="rtl"
    >
      <div style="padding: 10px 24px 10px 23px;height: 100%;flex-direction: column" class="display_row">
        <div style="text-align: right">
          <el-button type="primary" size="medium">下载</el-button>
        </div>
        <div class="preview-area">
          <div class="text">预览区域</div>
        </div>
      </div>
    </el-drawer>
    <el-drawer
      title="面上问题整改情况填报"
      :visible.sync="drawer5"
      direction="rtl"
      size="40%"
      style="height: 100%;"
    >
      <div style="padding: 10px 24px 10px 23px;">
        <div class="display_row_center" style="margin-bottom: 27px;">
          <div v-for="(item, index) in topTabList" class="top-tab-item" :class="{'active': current_pro_index === index}" @click="current_pro_index=index">
            <div class="time">{{ timeList[index] }}</div>
            <div class="desc">{{ item }}</div>
          </div>
        </div>
        <div style="height: 1000px;overflow: scroll">
          <div v-if="current_pro_index===0" style="height: 1320px">
            <div class="display_row_center">
              <label class="panel-label bold" style="width: 142px;text-align: right">面上问题单位：</label>
              <el-input
                v-model="draw5_value1"
                style="width: 100%;margin-left: 10px;"
                readonly
              />
            </div>
            <div class="display_row_center m_t_24">
              <label class="panel-label bold" style="width: 142px;text-align: right">线索来源：</label>
              <el-input
                v-model="draw5_value2"
                style="width: 100%;margin-left: 10px;"
                readonly
              />
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">内容摘要：</label>
              <el-input
                v-model="draw5_value3"
                style="width: 100%;margin-left: 10px;"
                type="textarea"
                class="textarea"
                :autosize="{ minRows: 6, maxRows: 8}"
                placeholder="细则内容/填报内容(限1000字符）"
              />
            </div>
            <div class="display_row_center m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">问题线索类别：</label>
              <el-select v-model="draw5_value9" style="margin-left: 10px;" placeholder="选择" />
              <el-select v-model="draw5_value9" style="margin-left: 10px;" placeholder="选择" />
              <el-select v-model="draw5_value9" style="margin-left: 10px;" placeholder="选择" />
            </div>
            <div class="display_row_center m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">六个围绕类别：</label>
              <el-select v-model="draw5_value9" style="margin-left: 10px;width: 100%;" placeholder="选择" />
            </div>
            <div class="display_row_center m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">八项规定类别：</label>
              <el-select v-model="draw5_value9" style="margin-left: 10px;width: 100%;" placeholder="选择" />
            </div>
            <div class="display_row_center m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">线索涉及领域：</label>
              <el-select v-model="draw5_value9" style="margin-left: 10px;width: 100%;" placeholder="选择" />
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">线索涉及详情：</label>
              <el-input
                v-model="draw5_value4"
                style="width: 100%;margin-left: 10px;"
                type="textarea"
                class="textarea"
                :autosize="{ minRows: 6, maxRows: 8}"
                placeholder="细则内容/填报内容(限1000字符）"
              />
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">线索涉及范围：</label>
              <el-input
                v-model="draw5_value5"
                style="width: 100%;margin-left: 10px;"
                type="textarea"
                class="textarea"
                :autosize="{ minRows: 4, maxRows: 6}"
                placeholder="细则内容/填报内容(限50字符）"
              />
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">深入了解情况：</label>
              <el-input
                v-model="draw5_value6"
                style="width: 100%;margin-left: 10px;"
                type="textarea"
                class="textarea"
                :autosize="{ minRows: 4, maxRows: 6}"
                placeholder="细则内容/填报内容(限50字符）"
              />
            </div>
            <div class="display_row_center m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">分类处理意见：</label>
              <el-select v-model="draw5_value9" style="margin-left: 10px;width: 100%;" placeholder="选择" />
            </div>
          </div>
          <div v-if="current_pro_index===1" style="height: 1260px">
            <div class="display_row_center m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">问题类型：</label>
              <el-select v-model="draw5_value9" style="margin-left: 10px;width: 100%;" placeholder="选择" />
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">问题概述：</label>
              <el-input
                v-model="draw5_2_value1"
                style="width: 100%;margin-left: 10px;"
                type="textarea"
                class="textarea"
                :autosize="{ minRows: 6, maxRows: 8}"
                placeholder="请输入（限500字符）"
              />
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">具体反馈意见：</label>
              <el-input
                v-model="draw5_value3"
                style="width: 100%;margin-left: 10px;"
                type="textarea"
                class="textarea"
                :autosize="{ minRows: 6, maxRows: 8}"
                placeholder="请输入（限500字符）"
              />
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">具体办理情况：</label>
              <el-input
                v-model="draw5_value3"
                style="width: 100%;margin-left: 10px;"
                type="textarea"
                class="textarea"
                :autosize="{ minRows: 6, maxRows: 8}"
                placeholder="对应阶段性整改情况报告内填报的整改情况请输入（限500字符）"
              />
            </div>
            <div class="display_row_center m_t_24">
              <label class="panel-label bold" style="width: 142px;text-align: right">挽回损失（万元）：</label>
              <el-input
                v-model="draw5_2_value2"
                style="width: 100%;margin-left: 10px;"
                readonly
                placeholder="请输入（整数11位，保留小数点后两位）"
              />
            </div>

            <div class="display_row_center m_t_24">
              <label class="panel-label bold" style="width: 142px;text-align: right">具体整改措施（项）：</label>
              <el-input
                v-model="draw5_2_value3"
                style="width: 100%;margin-left: 10px;"
                readonly
                placeholder="措施条数(1~99999）"
              />
            </div>
            <div class="display_row_center m_t_24">
              <label class="panel-label bold" style="width: 142px;text-align: right">具体整改措施详情（项）：</label>
              <el-input
                v-model="draw5_2_value4"
                style="width: 100%;margin-left: 10px;"
                readonly
                placeholder="已添加 2 项"
              />
            </div>
            <el-divider />
            <el-table
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                width="180"
              >
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="整改措施内容"
                width="280"
              >
                <template slot-scope="scope">
                  <el-input v-model="scope.row.name" />
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    icon="el-icon-download"
                    type="primary"
                  >下载</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div v-if="current_pro_index===2" style="height: 1440px;">
            <div class="main-inner-box" style="height: auto;">
              <div class="display_row_center">
                <label class="panel-label bold" style="width: 142px;text-align: right">
                  追责问责（人）：
                </label>
                <el-input v-model="drawer5_3_1" />
              </div>
              <div class="zz_desc">提示：输入名称后自动将人员相关信息带过来，不在系统内的需要手动填写</div>
              <el-table
                :data="tableData"
                style="width: 100%"
              >
                <el-table-column
                  label="序号"
                  width="50"
                >
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="人员追责信息"
                  width="720"
                >
                  <template slot-scope="scope">
                    <el-input v-model="drawer5_3_2" style="width:98px" placeholder="请输入姓名" />
                    <el-select v-model="drawer5_3_3" style="width:80px;margin-left: 9px;" placeholder="级别" />
                    <el-select v-model="drawer5_3_4" style="width:105px;margin-left: 9px;" placeholder="单位职务" />
                    <el-select v-model="drawer5_3_5" style="width:105px;margin-left: 9px;" placeholder="职务类别" />
                    <el-select v-model="drawer5_3_6" style="width:105px;margin-left: 9px;" placeholder="追责问责方" />
                    <div class="down-text" style="margin-left: 9px;">张三同志追责.doc</div>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      icon="el-icon-download"
                      type="primary"
                      plain
                    >下载</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="main-inner-box" style="margin-top: 24px; height: auto;">
              <div class="display_row_center">
                <label class="panel-label bold" style="width: 142px;text-align: right">
                  追责问责（人）：
                </label>
                <el-input v-model="drawer5_3_1" />
              </div>
              <el-table
                :data="tableData"
                style="width: 100%;margin-top: 24px;"
              >
                <el-table-column
                  label="序号"
                  width="50"
                >
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="人员追责信息"
                  width="420"
                >
                  <template slot-scope="scope">
                    <el-select v-model="drawer5_3_3" style="width:80px;margin-left: 9px;" placeholder="选择单位" />
                    <el-select v-model="drawer5_3_4" style="width:105px;margin-left: 9px;" placeholder="追责问责方式" />
                    <div class="down-text" style="margin-left: 9px;">张三同志追责.doc</div>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      icon="el-icon-download"
                      type="primary"
                      plain
                    >下载</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">具体办理情况：</label>
              <el-input
                v-model="draw5_value10"
                style="width: 100%;margin-left: 10px;"
                type="textarea"
                class="textarea"
                :autosize="{ minRows: 6, maxRows: 8}"
                placeholder="请输入（限500字符）"
              />
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">完成情况：</label>
              <el-select v-model="draw5_value9" style="margin-left: 10px;" placeholder="选择" />
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">说明：</label>
              <el-input
                v-model="draw5_value11"
                style="width: 100%;margin-left: 10px;"
                type="textarea"
                class="textarea"
                :autosize="{ minRows: 6, maxRows: 8}"
                placeholder="说明"
              />
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right;margin-right: 6px;">是否办结：</label>
              <div v-for="(item, index) in sfList" class="choose-button m-r-16" :class="{'active': sfIndex===index}" @click="sfIndex=index">{{ item }}</div>
            </div>
            <div class="display_row m_t_24">
              <label class="panel-label bold textarea-label" style="width: 142px;text-align: right;margin-right: 6px;">涉密等级：</label>
              <div v-for="(item, index) in smList" class="choose-button m-r-16" :class="{'active': smIndex===index}" @click="smIndex=index">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
    <el-drawer
      title="详情"
      :visible.sync="drawer6"
      direction="rtl"
      size="40%"
    >
      <div style="height: 1000px;overflow: scroll;">
        <div style="padding: 10px 24px 10px 23px;height: 1200px;">
          <div class="display_row">
            <label class="panel-label bold" style="width: 142px;text-align: right">移交编号：</label>
            <el-input
              v-model="drawer6_1"
              style="width: 100%;margin-left: 10px;"
              placeholder="请输入限30字符"
            />
          </div>
          <div class="display_row m_t_24">
            <label class="panel-label bold" style="width: 142px;text-align: right">被巡单位：</label>
            <el-select v-model="draw5_value9" style="margin-left: 10px;width: 100%;" placeholder="选择" />
          </div>
          <div class="display_row m_t_24">
            <label class="panel-label bold" style="width: 142px;text-align: right">分类处理意见：</label>
            <el-select v-model="draw5_value9" style="margin-left: 10px;;width: 100%;" placeholder="选择" />
          </div>
          <div class="display_row m_t_24">
            <label class="panel-label bold" style="width: 142px;text-align: right">被反映人级别：</label>
            <el-select v-model="draw5_value9" style="margin-left: 10px;;width: 100%;" placeholder="选择" />
          </div>
          <div class="display_row m_t_24">
            <label class="panel-label bold" style="width: 142px;text-align: right">挽回损失（万元）：</label>
            <el-input
              v-model="drawer6_2"
              style="width: 100%;margin-left: 10px;"
              placeholder="请输入（整数11位，保留小数点后两位）"
            />
          </div>
          <div class="display_row m_t_24">
            <label class="panel-label bold textarea-label" style="width: 142px;text-align: right;margin-right: 6px;">是否办结：</label>
            <div v-for="(item, index) in sfList" class="choose-button m-r-16" :class="{'active': sfIndex===index}" @click="sfIndex=index">{{ item }}</div>
          </div>
          <div class="display_row m_t_24">
            <label class="panel-label bold" style="width: 142px;text-align: right">处理方式：</label>
            <el-select v-model="draw5_value9" style="margin-left: 10px;width: 100%;" placeholder="选择" />
          </div>
          <div class="display_row m_t_24">
            <label class="panel-label bold" style="width: 142px;text-align: right">处理结果：</label>
            <el-select v-model="draw5_value9" style="margin-left: 10px;width: 100%;" placeholder="选择" />
          </div>
          <div class="display_row m_t_24">
            <label class="panel-label bold textarea-label" style="width: 142px;text-align: right">备注：</label>
            <el-input
              v-model="drawer6_3"
              style="width: 100%;margin-left: 10px;"
              type="textarea"
              class="textarea"
              :autosize="{ minRows: 6, maxRows: 8}"
              placeholder="细则内容/填报内容(限1000字符）"
            />
          </div>
          <div class="display_row m_t_24">
            <label class="panel-label bold" style="width: 142px;text-align: right">同案处理人员： ：</label>
            <el-input
              v-model="drawer6_4"
              style="width: 100%;margin-left: 10px;"
              readonly
            />
          </div>
          <div class="zz_desc">提示：输入名称后自动将人员相关信息带过来，不在系统内的需要手动填写</div>
          <el-table
            :data="tableData"
            style="width: 100%;margin-top: 24px;"
          >
            <el-table-column
              label="序号"
              width="50"
            >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="人员追责信息"
              width="420"
            >
              <template slot-scope="scope">
                <el-input v-model="draw5_value14" placeholder="请输入姓名" style="width: 124px;" />
                <el-select v-model="drawer5_3_3" style="width:102px;margin-left: 9px;" placeholder="级别" />
                <el-select v-model="drawer5_3_4" style="width:134px;margin-left: 9px;" placeholder="单位职务" />
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  icon="el-icon-download"
                  type="primary"
                  plain
                >下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Step5',
  data() {
    return {
      value1: '集团第一巡查组',
      value2: 'xxxx企业/部门',
      value3: '已确认',
      value4: '',
      activeName: 'first',
      meetingList: [{
        category: '党委（党组）研究整改工作会议(第一次)',
        date: '2020-01-01 10:00:00',
        persons: '张三，李四，王五',
        condition: ['检查领导组', '执行领导组']
      }, {
        category: '召开整改专题民主生活会(第一次)',
        date: '2020-01-01 10:00:00',
        persons: '赵六，王五，李四',
        condition: ['检查领导组', '执行领导组']
      }],
      editList: [{
        category: '贵阳大数据产业集团人力资源部问题整改报告',
        date: '2020-01-01 10:00:00',
        persons: '整改方案2020010100112233',
        condition: ['检查领导组', '执行领导组']
      }, {
        category: '贵阳大数据产业集团人力资源部问题整改报2',
        date: '2020-01-01 10:00:00',
        persons: '整改方案2020020200113322',
        condition: ['检查领导组', '执行领导组']
      }],
      categoryList: [{
        category: '贵阳大数据产业集团人力资源部问题整改报告',
        date: '2020-01-01 10:00:00',
        persons: '单位情况报告',
        condition: ['检查领导组', '执行领导组']
      }, {
        category: '贵阳大数据产业集团人力资源部问题整改报2',
        date: '2020-01-01 10:00:00',
        persons: '主要负责人落实情况报告',
        condition: ['检查领导组', '执行领导组']
      }],
      resultList1: [{
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        name5: '',
        name6: '',
        name7: '',
        name8: '',
        name9: '',
        name10: '',
        condition: ['检查领导组', '执行领导组']
      }, {
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        name5: '',
        name6: '',
        name7: '',
        name8: '',
        name9: '',
        name10: '',
        condition: ['检查领导组', '执行领导组']
      }],
      resultList2: [{
        name1: '第三巡查组',
        name2: '大数据保障部',
        name3: '张三',
        name4: '正科',
        name5: '386631947446995',
        name6: '建议进一步了解',
        name7: '0',
        name8: '否',
        name9: '初核',
        name10: '诫勉',
        condition: ['检查领导组', '执行领导组']
      }, {
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        name5: '',
        name6: '',
        name7: '',
        name8: '',
        name9: '',
        name10: '',
        condition: ['检查领导组', '执行领导组']
      }],
      tabList: ['研究整改工作', '整改方案', '整改报告', '整改问题清单情况填报'],
      tabIndex: 0,
      drawer6_1: '',
      drawer6_2: '',
      drawer6_3: '',
      drawer6_4: '已添加 2 人',
      sfList: ['是', '否'],
      smList: ['普通', '秘密', '机密', '绝密'],
      checkbox: {
        c1: false,
        c2: true,
        c3: true,
        c4: false,
        c5: false,
        c6: false,
        c7: true,
        c8: false,
        c9: false,
        c10: false,
        c11: true,
        c12: false,
        c13: false,
        c14: true,
        c15: true,
        c16: false,
        c17: false,
        c18: true,
        c19: false,
        c20: true,
        c21: false,
        c22: false,
        c23: true,
        c24: true,
        c25: false,
        c26: false,
        c27: true,
        c28: true,
        c29: false,
        c30: true,
        c31: false,
        c32: false,
        c33: false,
        c34: false,
        c35: true,
        c36: false,
        c37: false,
        c38: true,
        c39: true,
        c40: false,
        c41: false,
        c42: true
      },
      all_check: false,
      sfIndex: 0,
      smIndex: 0,
      choose_pro: 0,
      chooseButtonList: ['面上问题清单', '个人问题清单'],
      titleList: [
        '序号',
        '问题类型',
        '问题概述',
        '具体反馈意见',
        '具体办理情况',
        '完善指端（项）',
        '损失挽回（万元）',
        '追责问责人',
        '罪责问责单位数量',
        '追责问责单位数量',
        '完成情况',
        '审阅情况',
        '操作'
      ],
      titleList2: [
        '序号',
        '巡查组',
        '被巡单位',
        '被反映人',
        '被反应人级别',
        '移交单标号',
        '分类处理意见',
        '损失挽回（万元）',
        '是否办结',
        '处理方式',
        '处理结果',
        '审阅情况',
        '操作'
      ],
      drawer1: false,
      drawer2: false,
      drawer3: false,
      drawer4: false,
      drawer5: false,
      drawer6: false,
      draw5_value1: '人资资源部门',
      draw5_value2: '督查巡查整改',
      draw5_value3: '',
      draw5_value4: '',
      draw5_value5: '',
      draw5_value6: '',
      draw5_value7: '',
      draw5_value8: '',
      draw5_value9: '',
      draw5_value10: '',
      draw5_value11: '',
      draw5_value12: '',
      draw5_value13: '',
      draw5_value14: '',
      draw5_2_value1: '',
      draw5_2_value2: '',
      draw5_2_value3: '',
      draw5_2_value4: '',
      drawer5_3_1: '已添加 2 人',
      drawer5_3_2: '',
      drawer5_3_3: '',
      drawer5_3_4: '',
      drawer5_3_5: '',
      drawer5_3_6: '',
      drawer5_3_7: '张三同志追责.doc',
      input_value_1: '党委（党组）研究整改工作会议(第一次)',
      input_value_3: '人力资源关于张三xx问题整改方案',
      input_value_4: '整改方案2020010100112233',
      input_value_2: '张三，李四，王五',
      date_value_1: '2021-01-01 10:00:00',
      textarea2: '',
      current_pro_index: 0,
      topTabList: ['问题基础信息', '整改情况', '督办信息'],
      timeList: ['第一次', '第二次', '第三次'],
      tableData: [{
        date: '1',
        name: '巡查报告.doc'
      }, {
        date: '2',
        name: '个人领导报告.doc'
      }],
      textarea3: '会议摘要会议摘要会议摘要会议摘要会议摘要会议摘要会议摘会议摘要会议摘要会议摘要会议摘要会议摘要会议摘要会议摘会议摘要会议摘要会议摘要会议摘要会议摘要会议摘要会议摘会议摘要会议摘要会议摘要会议摘要会议摘要会议摘要会议摘',
      textarea4: '检查领导组 张三 2021-04-24 10:00:00 （已审阅） 整改报告符合整改要求，整改通过 执行领导组 李四 -- （待审阅）'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    changeAll(val) {
      console.log('changeAll val', val)
      Object.keys(this.checkbox).forEach((key) => {
        this.checkbox[key] = val
      })
    },
    reset() {
      this.changeAll(false)
      this.all_check = false
    }
  }
}
</script>

<style scoped lang="scss" src="./taskStep.scss">

</style>
