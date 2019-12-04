<template>
  <div class="Login">
    <div v-if="true" class="loginBox">
      <input type="text" v-model="iphoneNo" placeholder="手机号" @blur="checkIphoneNo">
      <span style="color: red;font-size:14px">{{iphoneNoMsg}}</span>
      <br>
      <!--滑块验证-->
      <SlideVerification></SlideVerification>
      <br>
      <input type="text" v-model="smsCode" placeholder="手机验证码">
      <br>
      <Checkbox v-model="agreement"></Checkbox>

      我已认真阅读且同意<a>《注册协议》</a> & <a>《隐式政策》</a>
      <br>
      <Checkbox v-model="keepPwd">记住密码</Checkbox>
      <button @click="userLogin">登录</button>
    </div>

    <div v-if="false" class="jsHackers">
      <JsHacker></JsHacker>
    </div>
  </div>
</template>

<script>
  import SlideVerification from "@/components/login/SlideVerification"
  import JsHacker from "@/components/login/JsHacker"
  import Bus from "@/tools/bus"
  import {
    setCookie
  } from "../../tools/cookie";

  export default {
    name: "",
    components: {
      SlideVerification,
      JsHacker
    },
    data() {
      return {
        //手机号
        iphoneNo: "",
        //手机号提示
        iphoneNoMsg: "",
        //手机短信验证码
        smsCode: "",
        //是否阅读且同意协议
        agreement: false,
        //是否记住密码，默认记住
        keepPwd: true,
        //是否登录，用于给【Header】组件传值
        isLogin: false,
      }
    },
    methods: {
      //onblur 验证手机号
      checkIphoneNo: function () {
        if (!(/^1[3456789]\d{9}$/.test(this.iphoneNo))) {
          this.iphoneNoMsg = "请输入正确的手机号"
        } else {
          this.iphoneNoMsg = ""
          Bus.$emit("myEvent-iphoneNo", this.iphoneNo);
        }
        return false;
      },
      userLogin: function () {
        let data = {
          "iphoneNo": this.iphoneNo,
          "smsCode": this.smsCode
        }
        // this.axios.post("/smsCode/checkSmsCode", this.qs.stringify(data))
        this.axios.post("/smsCode/checkSmsCode", data)
          .then(resp => {
            //登录成功
            let data = resp.data;
            let msg = data.msg;
            let userInfo = data.userInfo;
            //登录成功，跳转主页
            if (msg === "success") {
              this.$router.push("/")
            }
            //设置 sessionStorage
            window.sessionStorage.setItem("isLogin", true);
            window.sessionStorage.setItem("userInfo", userInfo);
            //如果记住密码，设置cookie
            if (this.keepPwd) {
              setCookie("isLogin", true);
              setCookie("userInfo", userInfo);
            }
            //传值给【Header】组件，让【Header】组件内刷新【登录/个人中心】
            this.isLogin = true;
            Bus.$emit("myEvent-isLogin", this.isLogin);
          })
          .catch(resp => {
            let data = resp.data;
            console.log(`响应500 ${data}`);
          });
      }
    }
  }
</script>

<style scoped>
  .loginBox input {
    float: left;
  }
  .jsHackers{
    float: left;
  }
</style>
