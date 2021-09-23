<template>
  <div class="navbar">
    <!--    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />-->
    <div class="toggle-icon" :is-active="sidebar.opened" @click="toggleSideBar(sidebar.opened)">
      <img src="@/assets/img/more@3x.png">
    </div>
    <!--    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />-->
    <img src="@/assets/img/logo@3x.jpg" style="height: 60px;">
    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <div class="right-menu-item margin-10">
          <el-link>巡查任务</el-link>
        </div>
        <div class="right-menu-item margin-10">
          <el-link>督查督办</el-link>
        </div>
        <div class="right-menu-item margin-10">
          <el-link>报表上报</el-link>
        </div>

        <div class="right-menu-item">
          <i class="el-icon-edit" style="cursor: pointer" @click="edit_navi" />
        </div>
        <el-divider class="top-divider" direction="vertical" />
        <search id="header-search" class="right-menu-item" />
        <div class="right-menu-item" style="font-size: 12px;">
          juan你好，欢迎登录
        </div>
        <div class="right-menu-item">
          <el-badge :value="3" class="item" style="height: 24px;line-height: 24px;">
            <i class="el-icon-message" style="cursor: pointer" />
          </el-badge>
        </div>
        <div class="right-menu-item" @click="showLockItem">
          <i class="el-icon-lock" style="cursor: pointer" />
        </div>
        <el-divider class="top-divider" direction="vertical" />
        <div class="right-menu-item" style="margin-right: 10px;cursor: pointer" @click="showLogOutDialog">
          <i class="el-icon-switch-button" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    Search
  },
  data() {
    return {
      drawer6: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  methods: {
    toggleSideBar(status) {
      this.$store.dispatch('app/toggleSideBar')
      status && this.$store.commit('menu/CLEAR_SECOND_MENU')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    edit_navi() {
      this.$store.commit('menu/SETTING_NAV')
    },
    showLockItem() {
      this.$store.commit('menu/PSD_DIALOG', true)
    },
    showLogOutDialog() {
      this.$store.commit('menu/LOG_OUT_DIALOG', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: fixed;
  z-index: 1002;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
.top-divider {
  vertical-align: super;
  height: 60%;
}
.margin-10 {
  margin: 0 10px;
}
.toggle-icon {
  background: #1D65EE;
  display: inline-block;
  padding: 22px;
  cursor: pointer;
  float: left;
  img {
    width: 16px;
  }
}
</style>
