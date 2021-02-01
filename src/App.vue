<template>
  <div id="app">
    <div id="nav">
      <nav-header />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavHeader from "./components/global/navHeader.vue";

export default {
  components: {
    NavHeader
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #f0f8ff;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
