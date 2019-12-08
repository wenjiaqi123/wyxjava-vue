<template>
    <div class="ThridPartyLinks">
      <!--其他登录-->
      <div class="otherLoginTypeBox">
        <img @click="intoWechat" class="wechat" src="@/assets/login/wechat.png">
        <img @click="intoQQ" class="qq" src="@/assets/login/qq.png">
        <img @click="intoAlipay" class="alipay" src="@/assets/login/alipay.png">
        <img @click="intoGithub" class="github" src="@/assets/login/github.png">
        <img @click="intoGitee" class="gitee" src="@/assets/login/gitee.png">
      </div>
    </div>
</template>

<script>
    export default {
        name: "",
        components: {},
        data() {
            return {}
        },
        methods: {
          intoWechat:function(){
            this.$router.push("weChatLogin")
          },
          intoQQ:function (){
          this.$router.push("QQLogin")
          },
          intoAlipay:function(){
          this.$router.push("aliPayLogin")
          },
          intoGithub:function(){
          this.$router.push("githubLogin")
          },
          intoGitee:function (){
          this.$router.push("giteeLogin")
          }
        },
        mounted() {
        }
    }
</script>

<style scoped>
  /*其他登录*/
  .otherLoginTypeBox {
    width: calc(100% - 16px);
    height: 50px;
    margin: 0px auto;
  }

  .otherLoginTypeBox div {
    float: left;
    width: 34px;
    height: 34px;
    margin-top: 6px;
    margin-left: 20px;
  }
  .wechat {
    cursor: pointer;
    height: 34px;
    width: 34px;
  }
  .qq {
    cursor: pointer;
    height: 34px;
    width: 30px;
  }
  .alipay {
    cursor: pointer;
    height: 36px;
    width: 36px;
  }
  .github {
    cursor: pointer;
    height: 34px;
    width: 34px;
  }

  .gitee {
    cursor: pointer;
    height: 32px;
    width: 40px;
  }

  .wechat,
  .qq,
  .alipay,
  .github,
  .gitee{
    margin-top: 6px;
    margin-left: 18px;
  }
</style>
