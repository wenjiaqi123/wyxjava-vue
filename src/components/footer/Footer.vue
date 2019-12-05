<template>
    <div class="footer">
        <div class="footerBox">
          <div class="footerBody">
            我是页脚
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        components: {},
        data() {
            return{
            }
        },
        methods: {}
    }
</script>

<style scoped>

  .footerBox{
    background-color: #ddd;
  }
  .footerBody{
    /*垂直上下居中*/
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 50px;
    width: 1190px;
    margin: 0 auto;
    border: 1px solid red;
  }
</style>
