<template>
  <div class="jsHacker">
    <canvas id="c"></canvas>
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    data() {
      return {}
    },
    methods: {},
    mounted() {
      let c = document.getElementById("c");
      let ctx = c.getContext("2d");
      let chinese = "a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9";
      chinese = chinese.split("");
      let font_size = 10;

      c.height = document.documentElement.clientHeight-100;
      c.width = 1190;

      let columns = c.width / font_size;
      let drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }

      window.onresize = function () {
        c.height = document.documentElement.clientHeight-100;
        c.width = 1190;
        columns = c.width / font_size;
        drops = [];
        for (let i = 0; i < columns; i++) {
          drops[i] = 1;
        }
      }

      function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "#0F0";
        ctx.font = font_size + "px arial";

        for (let i = 0; i < drops.length; i++) {
          let text = chinese[Math.floor(Math.random() * chinese.length)]
          ctx.fillText(text, i * font_size, drops[i] * font_size);
          if (drops[i] * font_size > c.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      setInterval(draw, 50);
    }
  }
</script>

<style scoped>

</style>
