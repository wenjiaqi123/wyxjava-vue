<template>
  <div class="iphoneCheck">
    <div class="box">
      <!--中间盒子-->
      <div class="panelBox">
        <!--手机号码 验证码-->
        <div class="leftPanel">
          <div class="textTop">
            手机号: &nbsp;&nbsp;
          </div>
          <div class="textBottom">
            验证码: &nbsp;&nbsp;
          </div>
        </div>
        <!--输入框 按钮-->
        <div class="rightPanel">
          <!--手机号-->
          <div class="iphoneNoBox">
            {{iphoneNo}}
          </div>
          <div class="verifyCode">
            <!--验证码输入框-->
            <div class="verifyCodeInput">
              <Input
                type="text"
                v-model="verifyCode"
                placeholder="请输入验证码"
                size="large"
                clearable
                prefix="ios-contact-outline"/>
            </div>
            <!--验证码按钮-->
            <div class="verifyCodeButton">
              <!--获取验证码-->
              <div v-if="verifyCodeButtonFlag">
                <Button
                  html-type="button"
                  style="border:1px solid #49AF4F;width: 110px;height: 40px"
                  @click="getSmsCode">
                  {{verifyCodeTip}}
                </Button>
              </div>
              <!--重新获取验证码-->
              <div v-else="!verifyCodeButtonFlag">
                <Button
                  html-type="button"
                  style="border:1px solid #DDDDDD;
                          background-color: #FFFFFF;
                          color: #B1B1B1;
                          font-size: 16px;
                          width: 110px;
                          height: 40px;"
                  @click="getSmsCode">
                  {{countDown}}秒后重发
                </Button>
              </div>
            </div>
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
        //验证码
        verifyCode: "",
        //获取验证码提示
        verifyCodeTip: "获取验证码",
        //发送验证码按钮切换
        verifyCodeButtonFlag: true,
        //重新发送倒计时
        countDown: 30,
        //定时器
        c: null
      }
    },
    methods: {
      //获取短信验证码
      getSmsCode: function () {
        //发送短信验证码
        this.axios.get(`/${this.domain.Login}/smsCode/sendSmsCode/${this.iphoneNo}`)
          .then(resp => {
            let code = resp.data.code;
            let data = resp.data.data;
            if (code == 200) {
              if (data.flag) {
                this.$Notice.success({
                  title: data.msg
                });
              } else {
                this.$Notice.error({
                  title: data.msg
                });
              }
            }
          })
        //设置按钮提示
        this.verifyCodeButtonFlag = false;
        this.c = setInterval(() => {
          this.countDown--;
          if (this.countDown == 0) {
            this.verifyCodeButtonFlag = true;
          }
        }, 1000)
      },
      //下一步
      nextStep: function () {
        //验证手机号和手机验证码是否正确
        let data = {
          iphoneNo: this.iphoneNo,
          smsCode: this.verifyCode
        }
        this.axios.post(`/${this.domain.Login}/smsCode/selectSmsCodeByIphoneNo`, data)
          .then(resp => {
            let code = resp.data.code;
            let data = resp.data.data;
            if (code == 200) {
              if (data.flag) {
                //给【Register传值，控制显示Tab】
                this.$emit("my-event", {
                  panel: 3,
                  iphoneNo: this.iphoneNo
                })
              } else {
                this.$Notice.error({
                  title: data.msg
                });
              }
            }
          })
      }
    },
    beforeDestroy() {
      //离开页面清理定时器
      clearInterval(this.c);
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
    height: 160px;
    margin-top: 68px;
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

  /*左侧 手机号*/
  .leftPanel .textTop {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: lighter;
    text-align: right;
    margin-top: 12px;
  }

  /*左侧 验证码*/
  .leftPanel .textBottom {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: lighter;
    text-align: right;
    margin-top: 30px;
  }

  /*手机号*/
  .rightPanel .iphoneNoBox {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: lighter;
    text-align: left;
    margin-top: 12px;
  }

  .rightPanel .verifyCode {
    margin-top: 30px;
    height: 42px;
  }

  /*验证码输入框*/
  .rightPanel .verifyCodeInput {
    float: left;
  }

  /*验证码发送按钮*/
  .rightPanel .verifyCodeButton {
    float: right;
  }

  /*下方盒子*/
  .bottomBox {
    width: 540px;
    height: 180px;
    margin-top: 10px;
    margin-left: 130px;
  }

  /*下一步*/
  .bottomBox .nextStep {
    margin-top: 24px;
    margin-left: 152px;
  }
</style>
