<template>
  <div class="registerSuccess">
    <div class="box">
      <!--左侧面板-->
      <div class="leftPanel">
        <div class="wyxTip">
          你还可以使用该账号登录
        </div>
        <div class="wyx">
          我要学C
        </div>
        <div class="wyx">
          我要学C++
        </div>
        <div class="wyx">
          我要学Python
        </div>
        <div class="wyx">
          我要学Web
        </div>
      </div>
      <!--右边面板-->
      <div class="rightPanel">
        <div class="jumpTip">
          {{countDown}}秒后，将跳转登录界面,
          也可以 <span class="aHref" @click="jumpLogin">点这里</span> 手动跳转
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    data() {
      return {
        //倒计时
        countDown: 9
      }
    },
    methods: {
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
  /*中间面板*/
  .box {
    width: 900px;
    height: calc(100vh - 50px - 180px);
    margin: 0px auto;
  }

  /*左侧面板*/
  .box .leftPanel {
    float: left;
    margin-left: 94px;
    margin-top: 50px;
  }

  /*右侧面板*/
  .box .rightPanel {
    float: left;
    width: 50%;
  }
  /*提示*/
  .leftPanel .wyxTip {
    width: 300px;
    height: 30px;
    line-height: 30px;
    color: #FF0000;
    margin-bottom: 20px;
  }

  /*网站*/
  .leftPanel .wyx{
    color: #2d8cf0;
    width: 300px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }

  /*跳转盒子*/
  .jumpTip{
    margin-top: 146px;
  }
  /*跳转登录页*/
  .jumpTip .aHref {
    cursor: pointer;
    color: #2d8cf0;
    font-size: 18px;
    line-height: 32px;
  }
</style>
