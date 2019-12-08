<template>
  <div class="spinRegisterPanel">
    <div class="spin">
      <!--右上角关闭图标-->
      <div class="closeBox" @click="closeSpanPanel">
        <img class="closePic" src="@/assets/close/closeRedNoBorder.png">
      </div>
      <!--主界面-->
      <div class="panelBody">
        <div class="rightPanelTip">
          <div class="titleTip">
            该手机号已注册！
          </div>
          <div class="jumpTip">
            {{countDown}}秒后，将跳转登录界面,
            也可以 <span class="aHref" @click="jumpLogin">点这里</span> 手动跳转
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bus from "@/tools/bus"
  import ClosePic from "@/assets/close/closeRed.png"

  export default {
    name: "",
    components: {},
    data() {
      return {
        //关闭图标
        closePic: ClosePic,
        //定时器名称
        c: null,
        //倒计时
        countDown: 9
      }
    },
    methods: {
      //关闭Spin 面板
      closeSpanPanel: function () {
        Bus.$emit("my-event-closeSpinPanel", false)
      },
      //跳转登录页
      jumpLogin: function () {
        this.$router.push("login")
      }
    },
    mounted() {
      //定时任务跳转
      this.c = setInterval(() => {
        this.countDown--;
        if (this.countDown == 0) {
          clearInterval(this.c);
          this.$router.push("login")
        }
      }, 1000)
    },
    beforeDestroy() {
      //离开页面清理定时器
      clearInterval(this.c);
    }
  }
</script>

<style scoped>
  /*span主界面设置*/
  .spin {
    border: 1px solid black;
    background-color: #F0F0F0;
    border-radius: 10px;
    width: 790px;
    height: calc(50vh);
    position: fixed;
    top: 230px;
    margin-left: 200px;
    opacity: 90%;
  }

  /*右上角关闭图标*/
  .closeBox {
    float: right;
    cursor: pointer;
  }

  /*关闭图标 X */
  .closeBox .closePic {
    width: 20px;
    height: 20px;
    margin-top: 4px;
    margin-right: 4px;
  }

  /*该手机号已经注册 div*/
  .panelBody .titleTip{
    font-size: 26px;
    line-height: 40px;
    text-align: center;
    color: #FF0000;
    margin-top: 78px;
  }

  /*跳转提示 div*/
  .panelBody .jumpTip{
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #000000;
    margin-top: 24px;
  }
  /*跳转登录页*/
  .panelBody .jumpTip .aHref {
    cursor: pointer;
    color: #2d8cf0;
    font-size: 18px;
    line-height: 32px;
  }
</style>
