<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="rotationChart">
    <div class="carouselBox">
      <Carousel
        :height="setting.height"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow"
        loop>
        <CarouselItem v-for="i in charts" class="aaa">
          <div class="chartBox">
            <img v-bind:src="i" class="chart" @click="openNewPage">
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    data() {
      return {
        charts: [
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018939532,1617516463&fm=26&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3608155120,1630233151&fm=26&gp=0.jpg",
          "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1857931629,3664337888&fm=202&mola=new&crop=v1",
          "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1857931629,3664337888&fm=202&mola=new&crop=v1",
          "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1857931629,3664337888&fm=202&mola=new&crop=v1",
          "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1857931629,3664337888&fm=202&mola=new&crop=v1",
          "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1857931629,3664337888&fm=202&mola=new&crop=v1",
          "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1857931629,3664337888&fm=202&mola=new&crop=v1",
          "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1857931629,3664337888&fm=202&mola=new&crop=v1",
          "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1857931629,3664337888&fm=202&mola=new&crop=v1",
          "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1857931629,3664337888&fm=202&mola=new&crop=v1",
        ],
        setting: {
          //轮播图高度，默认 auto，单位px
          height: 158,
          //自动切换
          autoplay: true,
          //切换速度
          autoplaySpeed: 5000,
          //指示器位置 可选值为 inside（内部），outside（外部），none（不显示）
          dots: 'inside',
          //是否圆形指示器
          radiusDot: true,
          //指示器的触发方式，可选值为 click（点击），hover（悬停）
          trigger: 'hover',
          //切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）
          arrow: 'hover'
        }
      }
    },
    methods: {
      openNewPage:function () {
        const {href} = this.$router.resolve({
          path:`/chart`
        });
        window.open(href,'_blank');
      }
    }
  }
</script>

<style scoped>
  .rotationChart {
    height: 100%;
  }

  .carouselBox {
    height: 100%;
  }

  .chart {
    width: 100%;
  }
</style>
