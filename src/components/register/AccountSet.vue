<template>
  <div class="accountSet">
    <div class="box">
      <!--中间盒子-->
      <div class="panelBox">
        <!--手机号码 人机验证-->
        <div class="leftPanel">
          <div class="textTop">
            手机号码: &nbsp;&nbsp;
          </div>
          <div class="textBottom">
            人机验证: &nbsp;&nbsp;
          </div>
        </div>
        <!--输入框 滑块-->
        <div class="rightPanel">
          <!--手机号输入框-->
          <div class="iphoneNoBox">
            <Input
              type="text"
              v-model="iphoneNo"
              placeholder="请输入手机号"
              size="large"
              clearable
              prefix="ios-contact-outline"
              @on-focus="clearIphoneNoTip"
              @on-blur="checkIphoneNum"/>
          </div>
          <!--手机号输入框提示-->
          <div class="iphoneTip">
            {{iphoneNoTip}}
          </div>
          <!--滑块-->
          <div class="robotBox">
            <Slider v-model="robotNum" @on-change="getSliderNum"></Slider>
          </div>
          <!--滑块提示-->
          <div class="robotTip">
            {{robotTip}}
          </div>
        </div>
      </div>


      <!--同意注册 下一步-->
      <div class="bottomBox">
        <div class="readBox">
          <Checkbox v-model="alreadyRead" border size="large">
            我已阅读并同意 <a href="AccountSet.vue">《注册协议》</a><span>&</span><a href="AccountSet.vue">《隐私政策》</a>
          </Checkbox>
        </div>
        <div class="nextStep">
          <Button
            type="error"
            html-type="button"
            style="background-color: #F00;width: 150px;height: 50px"
            @click="netStep">
            下一步
          </Button>
        </div>
      </div>
    </div>
    <div v-if="isRegister" class="spinBox">
      <SpinRegisterPanel></SpinRegisterPanel>
    </div>
    <Icon
      custom="iconfont icon-shouji"
    />
  </div>
</template>

<script>
  import {
    checkIphoneNo
  } from "../../tools/checkAccount";
  import SpinRegisterPanel from "@/components/spin/SpinRegisterPanel"
  import Bus from "@/tools/bus"

  export default {
    name: "",
    components: {
      SpinRegisterPanel
    },
    data() {
      return {
        //手机号
        iphoneNo: "",
        //手机号码提示
        iphoneNoTip: "",
        //手机号是否注册过
        iphoneNoIsRegister: false,
        //人机初始以及model数值
        robotNum: 5,
        //robotNum目标值
        robotTargetNum: 0,
        //验证标志位
        robotFlag: false,
        //人机提示
        robotTip: "",
        //已经阅读，同意
        alreadyRead: false,
        //是否已经注册，控制显示 Spin
        isRegister: false
      }
    },
    methods: {
      //手机号输入框，失焦 清除提示
      clearIphoneNoTip: function () {
        this.iphoneNoTip = ""
      },
      //输入框失焦 校验手机号
      checkIphoneNum: function () {
        let bool = checkIphoneNo(this.iphoneNo);
        if (!bool) {
          this.iphoneNoTip = "手机号格式有误哦！"
        }
        this.sendIphoneNoIsRegister();
      },
      //滑块松开，
      getSliderNum: function () {
        if (this.robotNum == this.robotTargetNum) {
          this.robotTip = "验证成功"
          this.robotFlag = true;
        }
        this.sendIphoneNoIsRegister();
      },
      /**
       * 手机号不为空，人机验证成功，发送请求，查看是否已经注册
       */
      sendIphoneNoIsRegister: function () {
        if (this.iphoneNo != "" && this.robotFlag) {
          this.axios.get(`/Login/register/iphoneNoIsRegister/${this.iphoneNo}`)
            .then(resp => {
              let code = resp.data.code;
              let data = resp.data.data;
              if (code == 200) {
                //data.flag true 表示已经注册
                if (data.flag) {
                  this.isRegister = true
                }
              }
            })
        }
      },
      //下一步
      netStep: function () {
        //手机号没有输入
        if (this.iphoneNo == null || "" == this.iphoneNo) {
          this.iphoneNoTip = "请输入手机号"
          return false;
        }
        //人机验证
        if (!this.robotFlag) {
          this.$Notice.info({
            top: 800,
            title: "没有进行人机验证"
          });
          return false;
        }
        //如果没有勾选
        if (!this.alreadyRead) {
          this.$Notice.warning({
            title: "你还没有阅读《注册协议》"
          });
          return false;
        }
        this.$emit("my-event", 2);
      }
    },
    mounted() {
      let num = parseInt(Math.random() * (100 - 15 + 1) + 15, 10);
      this.robotTargetNum = num;
      this.robotTip = `滑动圆点到 ${num} 的位置`;
      //监听兄弟组件，关闭Span面板
      Bus.$on("my-event-closeSpinPanel", (data) => {
        this.isRegister = data;
      })
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

  /*左侧 手机号码*/
  .leftPanel .textTop {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: lighter;
    text-align: right;
    margin-top: 12px;
  }

  /*左侧 人机验证*/
  .leftPanel .textBottom {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: lighter;
    text-align: right;
    margin-top: 30px;
  }

  /*输入框*/
  .rightPanel .iphoneNoBox {
    margin-top: 12px;
    padding-right: 6px;
  }

  /*手机号码提示*/
  .rightPanel .iphoneTip {
    height: 16px;
    color: #F00;
    font-size: 14px;
    text-align: left;
    margin-top: 2px;
  }

  /*人机验证*/
  .rightPanel .robotBox {
    margin-top: 28px;
  }

  /*人机验证提示*/
  .rightPanel .robotTip {
    margin-top: 2px;
    height: 16px;
    color: #F00;
    font-size: 14px;
    text-align: left;
    margin-top: 2px;
  }

  /*下方盒子*/
  .bottomBox {
    width: 540px;
    height: 180px;
    margin-top: 10px;
    margin-left: 130px;
  }

  /*阅读勾选框*/
  .bottomBox .readBox {
    height: 40px;
    margin-top: 0px;
    margin-left: 36px;
  }

  /*下一步*/
  .bottomBox .nextStep {
    margin-top: 24px;
    margin-left: 152px;
  }
</style>
