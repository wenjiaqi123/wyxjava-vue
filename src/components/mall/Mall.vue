<template>
  <div class="Mall">
    <!--左侧导航栏-->
    <div class="nav">
      <MallNav v-bind:flag="flag"></MallNav>
    </div>

    <!--右侧内容-->
    <div class="content">
      <div v-if="flag==1">
        <MallBook></MallBook>
      </div>
      <div v-else-if="flag==2">
        <MallYinJian></MallYinJian>
      </div>

    </div>
  </div>
</template>

<script>
  import MallNav from "@/components/mall/MallNav"
  import MallBook from "@/components/mall/MallBook"
  import MallYinJian from "@/components/mall/MallYinJian"

  export default {
    name: "",
    components: {
      MallNav,
      MallBook,
      MallYinJian
    },
    data() {
      return {
        flag: 1
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .nav {
    float: left;
    border: 1px solid black;
    height: 300px;
    width: 250px;
  }

  .content {
    float: right;
    border: 1px solid red;
    height: 300px;
    width: calc(100% - 250px);
  }
</style>
