<template>
    <div class="iphoneCheck">
        IphoneCheck
      <button @click="aaa">点我</button>
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
          aaa:function () {
            //给【Register传值，控制显示Tab】
            this.$emit("my-event",3)
          }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
