<template>
  <img v-lazy="url" lazy="loading" class="img">
</template>

<script>
export default {
  props: {
    url: String
  }
};
</script>

<style lang='less' scoped>
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.img {
  margin: 5px;
  width: 45%;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;
}

.img[lazy="loaded"] {
  animation: fadeIn 1s;
  -webkit-animation: myfirst 5s;
}
</style>