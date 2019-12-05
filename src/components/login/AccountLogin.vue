<template>
  <div class="accountLoginBox">
    <div class="accountLoginBody">
      <!--登录-->
      <LoginPanel></LoginPanel>
      <!--第三方登录-->
      <ThridPartyLinks></ThridPartyLinks>
    </div>
  </div>
</template>

<script>
  import LoginPanel from "@/components/login/LoginPanel"
  import ThridPartyLinks from "@/components/login/ThridPartyLinks"

  export default {
    name: "AccountLogin",
    components: {
      LoginPanel,
      ThridPartyLinks
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped>
  .accountLoginBody {
    width: calc(100% - 16px);
    margin: 0px auto;
  }
</style>
