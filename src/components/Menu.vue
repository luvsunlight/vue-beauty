<template>
  <div class="menu">
    <Slide>
      <div class="avatar"></div>
      <router-link to="welfare" class="item">
        <v-icon name="gift" scale="1.5"></v-icon>
        <span class="text">福利</span>
      </router-link>
      <router-link to="daily" class="item">
        <v-icon name="compass" scale="1.5"></v-icon>
        <span class="text">每日推荐</span>
      </router-link>
      <router-link to="ios" class="item">
        <v-icon name="apple-alt" scale="1.5"></v-icon>
        <span class="text">ios</span>
      </router-link>
      <router-link to="android" class="item">
        <v-icon name="robot" scale="1.5"></v-icon>
        <span class="text">android</span>
      </router-link>
    </Slide>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide
  }
};
</script>

<style lang="css">
.bm-menu {
  z-index: 10001;
}
.bm-burger-button {
  /* position: fixed; */
  left: 15px;
  top: 15px;
  /* z-index: 10001; */
}
.bm-burger-bars {
  background: #fff;
}
.bm-item-list {
  margin-left: 0;
}
</style>
<style lang='less' scoped>
.menu {
  .item {
    border-bottom: 1px solid #aaa;
    color: @color-white;
  }

  .avatar {
    margin-left: 80px;
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url("../assets/avatar.png");
    background-size: 100% 100%;
  }

  .router-link-active > .text {
    color: @color-primary!important;
  }
}
</style>