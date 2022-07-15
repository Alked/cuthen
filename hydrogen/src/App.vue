<template>
  <top-bar title="CUThen" version="v0.0.1"/>
  <router-view/>
</template>

<script>
import TopBar from './components/common/topbar/TopBar.vue';

export default {
  components: {
    TopBar,
  },
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Regular.ttf")
      format("truetype");
}

body {
  margin: 0;
  background: #2d2d2d;
  display: flex;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
