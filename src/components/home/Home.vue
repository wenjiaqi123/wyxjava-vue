<template>
  <div class="home">
    <!--轮播图-->
    <div class="rotationChartBox">
      <RotationChart></RotationChart>
    </div>

    <!--待定-->
    <div class="aa">

    </div>
  </div>
</template>

<script>
  import RotationChart from "@/components/home/RotationChart"
  export default {
    name: "",
    components: {
      RotationChart
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .home{
    background-color: #dddddd;
  }
  .rotationChartBox {
    height: 160px;
    width: 80%;
    margin: 0 auto;
  }
  .aa{
    height: 400px;
    width: 100%;
    margin: 0 auto;
  }
</style>
