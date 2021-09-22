<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />

    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <sidebar class="sidebar-container" />
      <sideSecondBar v-if="secondMenus && sidebar.opened" class="sidebar-second-container" />
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>

    <el-drawer
      title="自定义快捷导航"
      :visible.sync="settingNavState"
      direction="rtl"
      size="25%"
      class="drawer-navi"
      @close="closeDraw"
    >
      <div class="navigation-container display_flex_column">
        <div class="new-navi-container">
          <div class="display_flex_center" style="margin-bottom: 14px;">
            <img class="icon" src="@/assets/img/supervise/taskManage/add.png">
            <div class="navi-title">新增快捷导航</div>
            <div class="navi-desc">
              提示：最多可添加8个
            </div>
          </div>
          <el-input v-model="value1" class="m-b-16" placeholder="请输入自定义导航名称（限制8个字符）" />
          <el-input v-model="value2" class="m-b-16" placeholder="请输入跳转链接（仅支持系统内容跳转）" />
        </div>
        <el-divider />
        <div class="exist-navi-text">
          已添加自定义导航
        </div>
        <div v-for="item in naviList" class="exist-navi-container m-b-16">
          <div class="display_flex_center">
            <img class="icon" src="@/assets/img/supervise/taskManage/icon.png">
            <div class="title">{{ item }}</div>
            <div class="del" style="margin-right: 16px;" @click="_edit(item)">编辑</div>
            <div class="del" @click="_del">删除</div>
          </div>
          <template v-if="editList.includes(item)">
            <el-input class="input-1" :value="item" readonly />
            <el-input v-model="value4" class="input-2" />
            <div class="bottom-button">
              <el-button type="primary">保存</el-button>
            </div>
          </template>
        </div>
      </div>
    </el-drawer>
    <el-dialog
      title="确认删除吗？"
      :visible.sync="del_dialog_show"
      width="20%"
      center
    >
      <span>删除数据后不可恢复，请谨慎操作</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn" @click="del_dialog_show = false">取消</el-button>
        <el-button class="btn" type="danger" @click="del_dialog_show = false">确认删除</el-button>
      </span>
    </el-dialog>
    <el-dialog class="psd-dialog" title="密码重置" :visible.sync="psdState" width="543px" @close="showPsdDialog">
      <div class="display_flex_center m-b-22">
        <label class="psd-label">原始密码：</label>
        <el-input v-model="value11" class="psd-input" placeholder="请输入原始密码" />
      </div>
      <div class="display_flex_center m-b-22">
        <label class="psd-label">新密码：</label>
        <el-input v-model="value12" class="psd-input" placeholder="请输入新密码" />
      </div>
      <div class="display_flex_center">
        <label class="psd-label">新密码确认：</label>
        <el-input v-model="value13" class="psd-input" placeholder="请再次输入新密码" />
      </div>
      <el-divider class="psd-divider" />
      <div class="display_flex_center" style="flex-direction: row-reverse">
        <el-button type="primary" @click="showPsdDialog">保存</el-button>
        <el-button style="margin-right: 20px;" @click="showPsdDialog">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="确定要退出登录吗？"
      :visible.sync="logoutState"
      width="20%"
      center
    >
      <span>一旦退出账号许重新进行账号登录</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn" @click="hideLogoutDialog">取消</el-button>
        <el-button class="btn" type="primary" @click="logoutConfirm">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { AppMain, Navbar, Settings, Sidebar, TagsView, SideSecondBar } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Settings,
    Sidebar,
    TagsView,
    SideSecondBar
  },
  mixins: [ResizeMixin],
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value13: '',
      value12: '',
      value11: '',
      value4: 'http://meter.hooss.cn:9090/power2/hooss/i',
      naviList: ['巡查任务', '督查督办', '报表上报'],
      editList: [],
      del_dialog_show: false,
      psd_show: true
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    ...mapGetters([
      'secondMenus',
      'settingNavState',
      'psdState',
      'logoutState'
    ]),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    closeDraw() {
      this.$store.commit('menu/SETTING_NAV')
    },
    _edit(item) {
      if (this.editList.includes(item)) {
        this.editList.splice(this.editList.findIndex(ite => item === ite), 1)
      } else {
        this.editList.push(item)
      }
    },
    _del() {
      this.del_dialog_show = true
    },
    showPsdDialog() {
      this.$store.commit('menu/PSD_DIALOG', false)
    },
    async logoutConfirm() {
      await this.logout()
      this.$store.commit('menu/LOG_OUT_DIALOG', false)
      this.$store.commit('menu/CLEAR_SECOND_MENU', false)
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    hideLogoutDialog() {
      this.$store.commit('menu/LOG_OUT_DIALOG', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
  .navigation-container {
    padding: 20px 24px;
    .new-navi-container {
      border: 1px dashed #999999;
      background: #F7F8FA;
      border-radius: 4px;
      padding: 12px 18px 8px 15px;
      .icon {
        width: 16px;
      }
      .navi-title {
        color: #111111;
        font-size: 16px;
        margin: 0 6px 0 4px;
      }
      .navi-desc {
        font-weight: 400;
        color: #CCCCCC;
        font-size: 10px;
        margin-top: 6px;
      }
    }
    .exist-navi-text {
      color: #111111;
      line-height: 17px;
      font-size: 14px;
      margin-bottom: 16px;
    }
    .exist-navi-container {
      background: #F7F8FA;
      border-radius: 4px;
      padding: 12px 18px 12px 8px;
      margin-bottom: 15px;
      .icon {
        width: 16px;
      }
      .title {
        flex: 1;
        color: #111111;
        font-size: 16px;
        margin-left: 3px;
      }
      .del {
        color: #999999;
        font-size: 14px;
        cursor: pointer;
      }
      .input-1 {
        margin: 15px 0 16px;
        padding-left: 7px;
      }
      .input-2 {
        padding-left: 7px;
        margin-bottom: 16px;
      }
      .bottom-button {
        width: 100%;
        text-align: right;
        margin-bottom: 12px;
      }
    }
  }
  .display_flex {
    display: flex;
  }
  .display_flex_center {
    display: flex;
    align-items: center;
  }
  .display_flex_column {
    display: flex;
    flex-direction: column;
  }
  .m-b-16 {
    margin-bottom: 16px;
  }
  .dialog-footer {
    width: 100%;
    display: flex;
    .btn {
      flex: 1;
    }
  }
  .psd-label {
    width: 128px;
    text-align: right;
  }
  .psd-input {
    width: 319px;
  }
  .m-b-22 {
    margin-bottom: 22px;
  }
</style>
<style lang="scss">
.drawer-navi .el-drawer__header {
  margin-bottom: 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #F0F0F0;
}
.drawer-navi .el-drawer__header span {
  border: none
}
.psd-dialog {
  .el-dialog__header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }
  .el-dialog__body {
    padding-bottom: 10px;
  }
}
.psd-divider {
  margin-bottom: 10px;
}
</style>
