<template>
  <div id="app">
    <Nav></Nav>
    <Loading></Loading>
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Loading from "./components/Loading";

export default {
  name: "App",
  components: {
    Nav,
    Loading
  }
};
</script>

<style>
* {
  margin: 0;
}

body,
html {
  height: 100%;
}

#app {
  padding-top: 60px;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
