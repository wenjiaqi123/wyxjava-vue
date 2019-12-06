<template>
  <div class="register">
    <Input
      type="text"
      v-model="iphoneNo"
      placeholder="请输入手机号"
      size="large"
      clearable=true
      prefix="ios-contact-outline"
      @on-focus="clearIphoneNoTip"
      @on-blur="checkIphoneNum"/>
    <br>
    {{iphoneNoTip}}
    <br>
    <button @click="getSmsCode">点我获取验证码</button>{{getSmsCodeTip}}
    <Input
      type="text"
      v-model="smsCode"
      placeholder="请输入手机验证码"
      size="large"
      clearable=true
      prefix="ios-contact-outline"/>
    {{smsCodeTip}}
    <button @click="registerAccount">注册</button>
  </div>
</template>

<script>
  import {
    checkIphoneNo
  } from "@/tools/checkAccount";

  export default {
    name: "",
    components() {
    },
    data() {
      return {
        //手机号
        iphoneNo: "",
        //手机号提示
        iphoneNoTip: "",
        //短信验证码
        smsCode: "",
        //短信验证码提示
        getSmsCodeTip: "",
        //注册提示
        smsCodeTip: ""
      }
    },
    methods: {
      //手机号输入框 聚焦，清楚手机号提示
      clearIphoneNoTip: function () {
        this.iphoneNoTip = ""
      },
      //手机号输入框 失焦，校验手机号
      checkIphoneNum: function () {
        let isIphoneNo = checkIphoneNo(this.iphoneNo);
        if (!isIphoneNo) {
          this.iphoneNoTip = "请输入正确的手机号";
        }
        //查询手机号是否已经注册
        this.axios.get(`/Login/register/iphoneNoIsRegister/${this.iphoneNo}`)
          .then(resp => {
            let code = resp.data.code;
            let data = resp.data.data;
            if (code == 200) {
              //如果flag 为 true，说明已经注册过了
              if (data.flag) {
                this.iphoneNoTip = data.msg;
              }
            }
            if (code == 500) {
              let msg = resp.data.msg;
              this.iphoneNoTip = msg;
            }
          })
      },
      //获取验证码
      getSmsCode: function () {
        //校验密码
        let isIphoneNo = checkIphoneNo(this.iphoneNo);
        if (!isIphoneNo) {
          this.iphoneNoTip = "请输入正确的手机号";
        }
        //发送短息验证码
        this.axios.get(`/Login/smsCode/sendSmsCode/${this.iphoneNo}`)
          .then(resp => {
            let code = resp.data.code;
            let data = resp.data.data;
            if (code == 200) {
              if (data.flag) {
                this.getSmsCodeTip = data.msg;
              }
            }
            if (code == 500) {
              let msg = resp.data.msg;
              this.getSmsCodeTip = "发送失败,请重试或者联系我们";
            }
          })
      },
      //注册
      registerAccount: function () {
        /**
         * 校验手机号和验证码
         */
        if (this.iphoneNo == null || this.iphoneNo.trim() == "") {
          this.iphoneNoTip = "请输入手机号"
        }else {
          this.iphoneNoTip = ""
        }
        if(this.smsCode == null || this.smsCode.trim() == ""){
          this.smsCodeTip = "请输入验证码"
        }else {
          this.smsCodeTip = ""
        }
        /**
         * 发送请求
         */

      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
