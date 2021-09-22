<template>
  <div class="login-container">
    <div class="inner-container">
      <img class="left-img" src="@/assets/img/bg@3x.jpg"/>
      <div class="login-content">
        <div class="top-title">登录</div>
        <div class="user-container">
          <input ref="username" class="user-input" v-model="username" placeholder="请输入账号"/>
          <i class="el-icon-user left-icon"></i>
        </div>
        <div class="psd-container">
          <input ref="password" class="psd-input" type="password" v-model="password" placeholder="请输入密码"/>
          <i class="el-icon-lock left-icon"></i>
        </div>
        <div class="verify-container">
          <input class="verify-input" v-model="verify_code" placeholder="请输入验证码"/>
          <i class="el-icon-s-check left-icon"/>
          <identify :contentHeight="49" :fresh="flag" @makedCode="getMakedCode"></identify>
        </div>
        <a class="login-btn" @click="handleLogin">登 录</a>
        <a class="forget">忘记密码？ </a>
      </div>
    </div>
  </div>
</template>

<script>
import identify from "@/views/login/components/identify";
export default {
  components: {
    identify
  },
  data() {
    return {
      username: "",
      password: "",
      verify_code: "",
      flag: true,
      redirect: undefined,
      otherQuery: {},
      maked_code: ""
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },

  methods: {
    getMakedCode(code) {
      this.maked_code = code;
    },
    handleLogin() {
      if (!this.username) {
        this.$message.error('请输入用户名');
        return;
      }
      if (!this.password) {
        this.$message.error('请输入密码');
        return;
      }
      if (!this.verify_code) {
        this.$message.error('请输入验证码');
        return;
      }
      if (this.username === "admin") {
        this.$store.commit('user/SET_IDENTITY', 1)
      } else if (this.username === "leader") {
        this.$store.commit('user/SET_IDENTITY', 2)
      } else if(this.username === "user") {
        this.$store.commit('user/SET_IDENTITY', 3)
      }
      this.$router.push({path: "/"})
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  },
  mounted() {
    this.flag = !this.flag;
  },
}
</script>

<style scoped lang="scss">
  .login-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url(~@/assets/img/login_background@3x.jpg);
    background-size: cover;
    .inner-container {
      margin-top: 10%;
      display: flex;
      align-items: center;
      .left-img {
        height: 479px;
      }
      .login-content {
        height: 479px;
        width: 440px;
        border-radius: 0 8px 8px 0;
        background: white;
        padding: 32px 55px 64px;
        display: flex;
        align-items: center;
        flex-direction: column;
        .top-title {
          color: #2A3152;
          line-height: 29px;
          font-size: 24px;
          margin-bottom: 32px;
        }
        .user-input {
          border-radius: 4px;
          border: 1px solid #DEE0E9;
          width: 330px;
          height: 52px;
          background: rgba(255, 255, 255, 0.8);
        }
        .psd-input {
          border-radius: 4px;
          border: 1px solid #DEE0E9;
          width: 330px;
          height: 52px;
          background: rgba(255, 255, 255, 0.8);
        }
        .verify-input {
          height: 52px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 4px;
          border: 1px solid #DEE0E9;
          margin-right: 16px;
          flex: 1;
          width: 197px;
        }
        .verify-container {
          display: flex;
          align-items: center;
          margin-top: 16px;
          width: 330px;
          position: relative;
          .left-icon {
            position: absolute;
            left: 16px;
            top: 18px;
            color: #DEE0E9;
          }
        }
        .login-btn {
          width: 100%;
          line-height: 52px;
          height: 52px;
          color: #FFFFFF;
          font-size: 20px;
          background: #1D65EE;
          border-radius: 4px;
          text-align: center;
          margin-top: 32px;
          margin-bottom: 24px;
          &:active {
            opacity: .6;
          }
        }
        .forget {
          color: #2B3253;
          line-height: 19px;
          font-size: 16px;
          width: 100%;
          text-align: right;
        }
        input{
          background:none;
          outline:none;
          border:1px solid #ccc;
          padding-left: 45px;
        }
        .user-container {
          position: relative;
          .left-icon {
            position: absolute;
            left: 16px;
            top: 18px;
            color: #DEE0E9;
          }
        }
        .psd-container {
          position: relative;
          margin-top: 16px;
          .left-icon {
            position: absolute;
            left: 16px;
            top: 18px;
            color: #DEE0E9;
          }
        }
      }
    }
  }
</style>
