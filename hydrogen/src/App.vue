<template>
  <div class="banner">
    <top-bar title="CUThen" version="v0.0.1"/>
    <nav-bar />
  </div>
  <router-view/>
</template>

<script>
import TopBar from './components/common/topbar/TopBar.vue';
import NavBar from './components/common/navbar/NavBar.vue';

export default {
  components: {
    TopBar,
    NavBar,
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

  /* Skin configs */

  /* Dark */
  /* Banner */
  --dark-main-bg-color: #2d2d2d;
  --dark-plain-text-color: #2d2d2d;
  --dark-top-bar-bg-color: #597081;
  --dark-nav-button-active-color: #6c889c;
  --dark-nav-button-inactive-color: #7ea0b7;
  /* Grid */
  --dark-cell-bg-color: #4d4d4d;
  --dark-cell-timespan-color: #888888;
}

.banner {
  width: 1200px;
}
</style>
