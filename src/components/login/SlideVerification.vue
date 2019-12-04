<template>
  <div class="slideVerification">
    <slide-verify :l="setting.l"
                  :r="setting.r"
                  :w="setting.w"
                  :h="setting.h"
                  @success="onSuccess"
                  @fail="onFail"
                  @refresh="onRefresh"
                  :slider-text="setting.sliderText">
    </slide-verify>
    <span style="color: red;font-size:14px">{{verifyMsg}}</span>
  </div>
</template>

<script>
  import Bus from "@/tools/bus"

  export default {
    name: "",
    components: {},
    data() {
      return {
        iphoneNo:"",
        verifyMsg: "",
        setting: {
          //滑块的边长 默认值:42
          l: 42,
          //滑块突出园的半径 默认值：10
          r: 10,
          //canvas 画布的宽 默认值：310
          w: 310,
          //canvas 画布的高 默认值：155
          h: 155,
          //滑块底纹文字 默认值：Slide filled right
          sliderText: "向右滑动，获取验证码"
        }
      }
    },
    methods: {
      //验证码匹配成功回调
      onSuccess: function () {
        if (!(/^1[3456789]\d{9}$/.test(this.iphoneNo))) {
          this.verifyMsg = "请输入正确的手机号"
        }else{
          let data = {
            iphoneNo: this.iphoneNo
          };
          this.axios.post("/smsCode/sendSmsCode", data);
          this.verifyMsg = "请注意接收手机验证码";
        }
      },
      //验证码未匹配回调
      onFail: function () {
        if (!(/^1[3456789]\d{9}$/.test(this.iphoneNo))) {
          this.verifyMsg = "请输入正确的手机号"
        }else{
          this.verifyMsg = "请再试一次哦";
        }
      },
      //刷新按钮的回调
      onRefresh: function () {

      }
    },
    mounted() {
      Bus.$on("myEvent-iphoneNo", (data) => {
        this.iphoneNo = data;
      });
    }
  }
</script>

<style scoped>

</style>
