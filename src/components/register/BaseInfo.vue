<template>
  <div class="baseInfo">
    <div class="box">
      <!--中间盒子-->
      <div class="panelBox">
        <!--手机号码 昵称 邮箱 密码-->
        <div class="leftPanel">
          <div class="textIphone">
            手机: &nbsp;&nbsp;
          </div>
          <div class="textNickName">
            昵称: &nbsp;&nbsp;
          </div>
          <div class="textEmail">
            邮箱: &nbsp;&nbsp;
          </div>
          <div class="textPassword">
            密码: &nbsp;&nbsp;
          </div>
        </div>
        <!--输入框-->
        <div class="rightPanel">
          <!--手机号-->
          <div class="box">
            {{iphoneNo}}
          </div>
          <!--昵称输入框-->
          <div class="box">
            <Tooltip
              placement="right"
              theme="light">
              <div slot="content">
                <p style="font-size: 14px">1-20个字符</p>
              </div>
              <Input
                type="text"
                v-model="nickName"
                placeholder="请输入昵称"
                size="large"
                clearable
                prefix="ios-contact-outline"
                @on-blur="checkNickName"/>
            </Tooltip>
          </div>
          <!--邮箱输入框-->
          <div class="box">
            <Tooltip
              placement="right"
              theme="light">
              <div slot="content">
                <p style="font-size: 14px">绑定以后可以用邮箱登录哦！</p>
              </div>
              <Input
                type="text"
                v-model="email"
                placeholder="请输入邮箱"
                size="large"
                clearable
                prefix="ios-contact-outline"
                @on-blur="checkEmail"/>
            </Tooltip>
          </div>
          <!--密码输入框-->
          <div class="box">
            <Tooltip
              placement="right"
              theme="light">
              <div slot="content">
                <p style="font-size: 14px">6~14个字符，区分大小写</p>
                <p style="font-size: 14px">字母，数字，标点符号(除空格)</p>
              </div>
              <Input
                type="text"
                v-model="password"
                placeholder="请输入密码"
                size="large"
                clearable
                prefix="ios-contact-outline"
                @on-blur="checkPassword"/>
            </Tooltip>
          </div>
        </div>
      </div>

      <!--下一步-->
      <div class="bottomBox">
        <div class="nextStep">
          <Button
            type="error"
            html-type="button"
            style="background-color: #F00;width: 150px;height: 50px"
            @click="nextStep">
            下一步
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    checkEmail
  } from "@/tools/checkAccount";

  export default {
    name: "",
    components: {},
    props: {
      //手机号
      iphoneNum: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        //手机号
        iphoneNo: this.iphoneNum,
        //昵称
        nickName: "",
        //邮箱
        email: "",
        //密码
        password: ""
      }
    },
    methods: {
      //校验昵称
      checkNickName: function () {
        let length = this.nickName.trim().length;
        if (length > 20) {
          this.$Notice.error({
            title: "昵称名称不能超过20个字符"
          })
        }
      },
      //校验邮箱
      checkEmail: function () {
        let bool = checkEmail(this.email);
        if (this.email != "" && !bool) {
          this.$Notice.error({
            title: "邮箱格式错误"
          })
        }
      },
      //校验密码
      checkPassword: function () {
        let length = this.password.trim().length;
        if (length < 6 || length > 14) {
          this.$Notice.error({
            title: "密码设置不符合要求"
          })
          return false;
        }
        return true;
      },
      //下一步
      nextStep: function () {
        let bool = this.checkPassword();
        if (bool) {
          let data = {
            //手机号
            iphoneNo: this.iphoneNo,
            userPwdPlaintext: Base64.encode(this.password),
            userPwdCiphertext: this.Md5(this.password),
            //非必须
            //昵称
            nickName: this.nickName,
            //邮箱
            userEmail: this.email
          }
          this.axios.post(`/${this.domain.Login}/register/registerByBaseInfo`, data)
            .then(resp => {
              let code = resp.data.code;
              let data = resp.data.data;
              if (code == 500) {
                this.$Notice.error({
                  title: "注册失败"
                })
              }
              if (code == 200) {
                //控制注册面板，跳转【注册成功】
                this.$emit("my-event", {
                  panel: 4
                });
              }
            })
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

  /*中间面板*/
  .box {
    width: 800px;
    height: calc(100vh - 50px - 180px);
    margin: 0px auto;
  }

  /*中间的盒子*/
  .box .panelBox {
    width: 540px;
    height: 232px;
    margin-top: 40px;
    margin-left: 130px;
  }

  /*左侧面板盒子*/
  .box .panelBox .leftPanel {
    float: left;
    width: 130px;
  }

  /*右侧面板盒子*/
  .box .panelBox .rightPanel {
    float: left;
    width: calc(100% - 180px);
    margin-left: 10px;
  }

  /*左侧 文本*/
  .leftPanel div {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: lighter;
    text-align: right;
    margin-top: 12px;
  }

  /*右侧 输入框*/
  .rightPanel .box {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: lighter;
    text-align: left;
    margin-top: 12px;
  }

  /*下方盒子*/
  .bottomBox {
    width: 540px;
    height: 180px;
    margin-top: 0px;
    margin-left: 130px;
  }

  /*下一步*/
  .bottomBox .nextStep {
    margin-top: 4px;
    margin-left: 140px;
  }
</style>
