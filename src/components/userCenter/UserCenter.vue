<template>
  <div class="userCenter">
    <div class="intoLogin">
      <Button type="info">去登录</Button>
    </div>
    <!--个人信息-->
    <div>
      <div>
        上传头像
        <br>
        编辑
      </div>
      <div>
        我关注的课程
        <br>
        编辑
      </div>
      <div>
        昵称
        <br>
        编辑
      </div>
      <div>
        个性签名
        <br>
        编辑
      </div>
      <div>
        密码
        <br>
        编辑
      </div>
      <div>
        手机
        <br>
        编辑
      </div>
      <div>
        邮箱
        <br>
        编辑
      </div>
      <div>
        第三方
        <br>
        编辑
      </div>
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
    methods: {}
  }
</script>

<style scoped>
  .userCenter {
    border: 1px solid black;
  }
  .intoLogin{
    float: right;
  }

  .userCenter div div{
    border: 1px solid black;
    margin-top: 20px;
  }
</style>
