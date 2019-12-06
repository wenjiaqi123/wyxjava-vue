<template>
  <div class="News">
    News
    <Input
      v-model="account"
      placeholder="请输入手机号/邮箱/身份证"
      size="large"
      clearable=true />
    {{str}}
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    data() {
      return {
        str: ""
      }
    },
    methods: {},
    mounted() {
          this.str = this.Md5("111");
    }
  }
</script>

<style scoped>

</style>
