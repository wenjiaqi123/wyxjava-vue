<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="loginPanel">
    <div class="loginPanelBox">

      <!--账号密码-->
      <div class="accountAndPwd">
        <div class="accountInput">
          <Input
            type="text"
            v-model="account"
            placeholder="请输入手机号/邮箱/身份证"
            size="large"
            clearable
            prefix="ios-contact-outline"
            @on-focus="clearAccountTip"
            @on-blur="checkAccount"/>
        </div>
        <div class="accountTip">
          {{accountTip}}
        </div>
        <div class="passwordInput">
          <Input
            type="password"
            v-model="password"
            placeholder="请输入密码"
            size="large"
            clearable
            password="true"
            prefix="ios-lock-outline"
            @on-focus="clearPwdTip"
            @on-blur="checkPwd"/>
        </div>
        <div class="passwordTip">
          {{passwordTip}}
        </div>
      </div>

      <!--记住登录，登录按钮，找回密码/注册-->
      <div class="loginButtonBox">
        <!--记住密码 找回密码 注册-->
        <div class="rememberPwdBox">
          <!--记住密码-->
          <div class="rememberPwd">
            <Checkbox v-model="keepPwd">记住密码</Checkbox>
          </div>
          <!--找回密码|去注册-->
          <div class="retrievePwdBox">
            <div @click="forgetPwd" class="forgetPwd">忘记密码?</div>
            <div @click="intoRegister" class="goRegister">注册</div>
          </div>
        </div>
        <!--登录按钮-->
        <div class="loginButton">
          <Button
            type="success"
            size="large"
            html-type="button"
            @click="login">
            登录
          </Button>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  import {
    checkIphoneNo,
    checkEmail,
    checkStrIsNull
  } from "../../tools/checkAccount";

  export default {
    name: "",
    components() {
    },
    data() {
      return {
        //账号
        account: "",
        //手机号
        iphoneNo: "",
        //邮箱
        userEmail: "",
        //账号提示
        accountTip: "",
        //密码
        password: "",
        //密码提示
        passwordTip: "",
        //记住密码
        keepPwd: true
      }
    },
    methods: {
      //账号输入框 失焦，校验账号
      checkAccount: function () {
        //校验是否是规范的手机号 邮箱号
        let isLoginNo = checkIphoneNo(this.account);
        let isEmail = checkEmail(this.account);
        //如果是手机号
        if (isLoginNo) {
          this.iphoneNo = this.account;
          this.userEmail = "";
        } else if (isEmail) {
          this.userEmail = this.account;
          this.iphoneNo = "";
        } else {
          this.accountTip = "请输入正确的手机号/邮箱";
        }
      },
      //账户输入框 聚焦，清掉 提示
      clearAccountTip: function () {
        this.accountTip = "";
      },
      //密码输入框，失焦，校验真好
      checkPwd: function () {
        let isNull = checkStrIsNull(this.password);
        if (isNull) {
          this.passwordTip = "请输入密码";
        }
      },
      //密码输入框 聚焦，清掉 提示
      clearPwdTip: function () {
        this.passwordTip = "";
      },
      //登录
      login: function () {
        //校验账号
        this.checkAccount();
        //校验密码
        this.checkPwd();
        let data = {
          iphoneNo: this.iphoneNo,
          userEmail: this.userEmail,
          /**
           * Base64.encode("需要加密字符串")
           * Base64.decode("需要解密字符串")
           * this.Md5("需要加密的字符串")   Md5 不能解密
           */
          userPwdPlaintext: Base64.encode(this.password),
          userPwdCiphertext: this.Md5(this.password)
        }
        this.axios.post("/Login/login/userLogin", data)
          .then(resp => {

          });
      },
      //忘记密码，跳转重置密码路由
      forgetPwd: function () {
        this.$router.push("/resetPwd");
      },
      //点击注册，跳转注册路由
      intoRegister: function () {
        this.$router.push("/register");
      }
    },
  }
</script>

}
<style scoped>

  /*账号密码*/
  .accountAndPwd {
    width: calc(100% - 4px);
    height: 134px;
    margin: 6px auto 0px;
  }

  /*账号和密码输入框*/
  .accountInput {
    margin-top: 16px;
    margin-left: 4px;
  }

  .passwordInput {
    margin-top: 8px;
    margin-left: 4px;
  }

  /*账号和密码提示*/
  .accountTip,
  .passwordTip {
    height: 16px;
    margin-top: 3px;
    margin-left: 4px;
    line-height: 16px;
    font-size: 12px;
    color: #FF0000;
  }

  /*密码提示*/
  .passwordTip {
    margin-top: 4px;
  }

  /*记住登录，登录按钮，找回密码/注册*/
  .loginButtonBox {
    width: calc(100% - 14px);
    height: 80px;
    margin: 0px auto;
  }

  .rememberPwdBox {
    height: 30px;
    margin: 0 auto;
  }

  /*记住密码*/
  .rememberPwd {
    float: left;
    font-size: 16px;
  }

  /*找回密码*/
  .retrievePwdBox {
    float: right;
  }

  /*忘记密码*/
  .retrievePwdBox div {
    float: left;
    font-size: 16px;
    color: #888888;
  }

  /*忘记密码 注册*/
  .retrievePwdBox .goRegister {
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 2px;
    color: #FF0000;
    margin-left: 10px;
  }

  .loginButton button {
    width: 100%;
    height: 40px;
    margin-top: 6px;
  }
</style>
