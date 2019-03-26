<template>
  <div class="container">
    <div class="nav">{{ navText }}</div>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  components: {
    Menu
  },
  computed: {
    navText() {
      switch (this.$route.name) {
        case "welfare":
          return "福利";
        case "daily":
          return "每日推荐";
        case "ios":
          return "ios";
        case "android":
          return "android";
      }
    }
  }
};
</script>

<style lang='less' scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  .nav {
    height: 60px;
    color: @color-white;
    background: @color-normal;
    font-size: 30px;
    line-height: 60px;
    box-sizing: border-box;
  }
}
</style>