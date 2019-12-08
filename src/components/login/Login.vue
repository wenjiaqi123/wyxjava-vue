<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="Login">
    <div class="loginBox">
      <!--背景-->
      <div class="backgroundPic">

        <!--盒子-->
        <div class="loginOrRegister">
          <!--登录方式-->
          <div class="loginType">
            <div @click="accountLogin" v-bind:class="accountLoginClazz">账号</div>
            <div @click="verifyCodeLogin" v-bind:class="verifyCodeLoginClazz">免密码</div>
          </div>

          <!--根据登录方式不同，展示不同面板-->
          <div class="loginPanel">
            <div v-if="flag">
              <!--账号登录-->
              <AccountLogin></AccountLogin>
            </div>
            <div v-else="!flag">
              <!--验证码登录-->
              <VerifyCodeLogin></VerifyCodeLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountLogin from "@/components/login/AccountLogin"
  import VerifyCodeLogin from "@/components/login/VerifyCodeLogin"
  export default {
    name: "Login",
    components: {
      AccountLogin,
      VerifyCodeLogin
    },
    data() {
      return {
        //登录方式 字体设置
        accountLoginStyleFlag: false,
        verifyCodeLoginStyleFlag: false,
        //选择 【账号登录true】【免密码登录false】
        flag: true
      }
    },
    methods: {
      //点击账号事件
      accountLogin: function () {
        //账号/验证码 样式
        this.accountLoginStyleFlag = true;
        this.verifyCodeLoginStyleFlag = false
        this.flag = true;
      },
      //点击验证码事件
      verifyCodeLogin: function () {
        //账号/验证码 样式
        this.verifyCodeLoginStyleFlag = true;
        this.accountLoginStyleFlag = false
        this.flag = false;
      }
    },
    computed: {
      accountLoginClazz: function () {
        return {
          accountLogin: true,
          accountLoginStyle: this.accountLoginStyleFlag
        }
      },
      verifyCodeLoginClazz: function () {
        return {
          verifyCodeLogin: true,
          verifyCodeLoginStyle: this.verifyCodeLoginStyleFlag
        }
      }
    },
    mounted() {
      this.accountLoginStyleFlag = true;
    }
  }
</script>

<style scoped>
  /*背景图设置*/
  .backgroundPic {
    /*高度自适应*/
    height: calc(100vh - 50px);
    width: 100%;
    background-color: #000;

    /*相对自身定位*/
    position: relative;
  }

  .loginOrRegister {
    width: 320px;
    height: 360px;
    /*border: 1px solid black;*/
    background-color: #F0F0F0;
    border-radius: 4px;

    /*相对父盒子定位*/
    position: absolute;
    top: calc(20%);
    right: calc(12%);
  }


  /*登录方式*/
  .loginType {
    width: calc(100% - 4px);
    height: 60px;
    margin: 2px auto;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }

  /*登录方式字体设置*/
  .accountLogin,
  .verifyCodeLogin {
    font-size: 18px;
    color: #888;
    width: 50%;
    float: left;
    line-height: 60px;
  }

  /*登录方式点击改变样式*/
  .accountLoginStyle,
  .verifyCodeLoginStyle {
    color: #F00;
    font-weight: bolder;
    border-bottom-color: #F00;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
</style>
