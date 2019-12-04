<template>
  <div class="header">
    <!--导航栏背景-->
    <div class="navigationBox">
      <!--导航栏-->
      <div class="navigation">
        <!--导航栏左-->
        <div class="nav-left">
          <ul>
            <li @click="intoHome">
              <span class="bg-pic home"></span>
              <span>主页</span>
            </li>
            <li @click="intoMall">
              <span class="bg-pic mall"></span>
              <span>商城</span>
            </li>
            <li @click="intoSoftware">
              <span class="bg-pic software"></span>
              <span>软件</span>
            </li>
            <li @click="intoCourse">
              <span class="bg-pic course"></span>
              <span>教程</span>
            </li>
          </ul>
        </div>
        <!--导航栏右-->
        <div class="nav-right">
          <ul>
            <!---->
            <li v-if="!isLogin" @click="intoLogin">
              <span class="bg-pic login"></span>
              <span>登录</span>
            </li>
            <li v-else="isLogin" @click="intoUserCenter">
              <span class="bg-pic login"></span>
              <span>个人中心</span>
            </li>
            <li @click="intoNews">
              <span class="bg-pic news"></span>
              <span>消息</span>
            </li>
            <li @click="intoAboutUs">
              <span class="bg-pic aboutUs"></span>
              <span>导航</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bus from "@/tools/bus"
  import {
    getCookie
  } from "../../tools/cookie";

  export default {
    name: "",
    components: {},
    data() {
      return {
        //是否登录，默认false
        isLogin: false
      }
    },
    methods: {
      intoHome: function () {
        this.$router.push("/")
      },
      intoMall: function () {
        this.$router.push("mall")
      },
      intoSoftware: function () {
        this.$router.push("software")
      },
      intoCourse: function () {
        this.$router.push("course")
      },
      intoLogin: function () {
        this.$router.push("login")
      },
      intoUserCenter: function () {
        this.$router.push("userCenter")
      },
      intoNews: function () {
        this.$router.push("news")
      },
      intoAboutUs: function () {
        this.$router.push("aboutUs")
      }
    },
    mounted() {
      // sessionStorage 是否登录
      let isLogin = window.sessionStorage.getItem("isLogin");
      // cookie 是否登录
      let isLoginCookie = getCookie("isLogin");
      if (isLoginCookie || isLogin) {
        this.isLogin = true;
      }
      //监听【Login】组件,如果登录，修改isLogin值，刷新组件
      Bus.$on("myEvent-isLogin",(data)=>{
        this.isLogin = data;
      });
    }
  }
</script>

<style scoped>
  .navigationBox {
    background-color: #ddd;
  }

  .navigation {
    /*垂直上下居中*/
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 50px;
    width: 1190px;
    margin: 0 auto;
    color: #2d8cf0;
  }

  .nav-left li {
    float: left;
    margin-left: 8px;
  }

  .nav-right li {
    float: left;
    margin-left: 8px;
  }

  .navigation .bg-pic {
    display: inline-block;
    width: 14px;
    height: 14px;
    background-size: 100% 100%;
    vertical-align: middle;
  }

  .navigation .home {
    background-image: url(../../assets/header/home.png);
  }

  .navigation .mall {
    background-image: url(../../assets/header/mall.png);
  }

  .navigation .login {
    background-image: url(../../assets/header/login.png);
  }

  .navigation .news {
    background-image: url(../../assets/header/news.png);
  }

  .navigation .aboutUs {
    background-image: url(../../assets/header/aboutUs.png);
  }
</style>
