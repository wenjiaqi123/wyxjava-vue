<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="register">
    <div class="registerBox">
      <div class="header">
        <div class="titleWhite">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="title">
          欢迎你成为本网站第 9527 位程序猿，以后我们携手并进，共赢未来
        </div>
        <div class="navBox">
          <div class="nav registerNav">
            <div class="fontBase fontBorderStrong">设置账户</div>
          </div>
          <div class="nav registerNav">
            <div v-bind:class="iphoneCheck">手机验证</div>
          </div>
          <div class="nav registerNav">
            <div v-bind:class="baseInfo">基本信息</div>
          </div>
          <div class="nav registerNav">
            <div v-bind:class="registerSuccess">注册成功</div>
          </div>
        </div>
      </div>
      <div class="body">
        <!--设置账户-->
        <div v-if="bodyPanel==1">
          <AccountSet @my-event="getData"></AccountSet>
        </div>
        <!--手机验证-->
        <div v-else-if="bodyPanel==2">
          <IphoneCheck @my-event="getData" v-bind:iphoneNum="iphoneNo"></IphoneCheck>
        </div>
        <!--基本信息-->
        <div v-else-if="bodyPanel==3">
          <BaseInfo @my-event="getData" v-bind:iphoneNum="iphoneNo"></BaseInfo>
        </div>
        <!--注册成功-->
        <div v-else="bodyPanel==4">
          <RegisterSuccess></RegisterSuccess>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountSet from "@/components/register/AccountSet"
  import IphoneCheck from "@/components/register/IphoneCheck"
  import BaseInfo from "@/components/register/BaseInfo"
  import RegisterSuccess from "@/components/register/RegisterSuccess"

  export default {
    name: "",
    components: {
      AccountSet,
      IphoneCheck,
      BaseInfo,
      RegisterSuccess
    },
    data() {
      return {
        //手机号
        iphoneNo:"",
        //手机验证颜色
        iphoneCheckStyle: false,
        //基本信息颜色
        baseInfoStyle: false,
        //注册成功颜色
        registerSuccessStyle: false,
        //主体面板展示
        bodyPanel: 1
      }
    },
    methods: {
      //手机验证颜色
      iphoneCheckFlag: function () {
        this.iphoneCheckStyle = true
      },
      //基本信息颜色
      baseInfoFlag: function () {
        this.baseInfoStyle = true
      },
      //注册成功颜色
      registerSuccessFlag: function () {
        this.registerSuccessStyle = true
      },
      //接收子组件传值
      getData:function (data) {
        this.bodyPanel = data.panel;
        this.iphoneNo = data.iphoneNo;
        switch (this.bodyPanel) {
          case 2:
            this.iphoneCheckFlag();
            break;
          case 3:
            this.baseInfoFlag();
            break;
          case 4:
            this.registerSuccessFlag();
            break;
        }
      }
    },
    computed: {
      //手机验证样式
      iphoneCheck: function () {
        return {
          fontBase: true,
          fontBorderStrong: this.iphoneCheckStyle
        }
      },
      //基本信息样式
      baseInfo: function () {
        return {
          fontBase: true,
          fontBorderStrong: this.baseInfoStyle
        }
      },
      //注册成功样式
      registerSuccess: function () {
        return {
          fontBase: true,
          fontBorderStrong: this.registerSuccessStyle
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  /*整个注册页面*/
  .registerBox {
    width: 100%;
    height: calc(100vh - 50px);
    position: relative;
  }

  /*注册页面上半部分*/
  .registerBox .header {
    height: 180px;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: #CCC;
    border-radius: 2px;
  }

  /*注册页面下半部分*/
  .registerBox .body {
    height: calc(100% - 180px);
  }
  .header .titleWhite{
    height: 20px;
    background-color: #ffb75a;
  }
  .header .titleWhite .left{
    float: left;
    height: 20px;
    width: 50%;
    background-color: #FFF;
    border-bottom-left-radius: 20px;
  }
  .header .titleWhite .right{
    float: right;
    height: 20px;
    width: 50%;
    background-color: #FFF;
    border-bottom-right-radius: 20px;
  }
  /*上半部分*/
  .header .title {
    height: 100px;
    background-color: #ffb75a;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: #434cc1;
    font-size: 30px;
    font-weight: bolder;
    line-height: 100px;
    text-align: center;
  }

  /*4个导航box*/
  .header .navBox {
    width: 800px;
    margin: 0 auto;
  }

  .navBox .nav {
    height: 60px;
    width: 140px;
    float: left;
    text-align: center;
    margin-left: 46px;
  }

  /*.registerNav {*/

  /*}*/

  .fontBase {
    line-height: 60px;
    font-size: 20px;
    color: #999;
  }

  .fontBorderStrong {
    width: 100%;
    height: 100%;
    color: #FF0000;
    font-weight: bolder;
    border-bottom-width: 5px;
    border-bottom-style: solid;
    border-bottom-color: #F00;
    border-radius: 4px;
  }
</style>
