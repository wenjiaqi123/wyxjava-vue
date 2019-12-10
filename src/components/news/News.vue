<template>
  <div class="News">
    News
    <button @click="aaa">点我</button>
  </div>
</template>

<script>
  import domain from "@/tools/domain";

  export default {
    name: "",
    components: {},
    data() {
      return {}
    },
    methods: {
      aaa: function () {
        this.axios.get(`${domain.Login}/aa`).then()
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
</style>
