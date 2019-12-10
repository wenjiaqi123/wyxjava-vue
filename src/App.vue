<template>
  <div class="app">
    <!--页面导航栏-->
    <Header></Header>

    <!--主界面-->
    <div class="homeScreen">
      <router-view/>
    </div>

    <!--页脚-->
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/header/Header"
  import Footer from "@/components/footer/Footer"

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    mounted() {
      this.axios.interceptors.request.use((config) => {
        if (config.method === "post") {
          config.data = this.qs.stringify(config.data);
        }
        return config;
        return config;
      })
    }
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    text-decoration: none; /*下划线*/
    list-style: none; /* ul li 的小圆点*/
    font-family: Arial; /*字体*/
    font-size: 16px; /*文字大小*/
  }

  .homeScreen {
    /*限定各个路由的宽度*/
    width: 1190px;
    height: calc(100vh - 50px);
    margin: 0 auto;
    /*border: 3px solid #2d8cf0;*/
  }
</style>
