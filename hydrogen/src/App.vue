<template>
  <div :class="['main', `skin-${skin}`]">
    <div class="banner">
      <top-bar title="CUThen" version="v0.0.1"/>
      <nav-bar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import TopBar from './components/common/topbar/TopBar.vue';
import NavBar from './components/common/navbar/NavBar.vue';

export default {
  components: {
    TopBar,
    NavBar,
  },
  data() {
    return {
      skin: 'dark',
    };
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.skin-dark {
  /* Dark */
  /* Global */
  --main-bg-color: #2d2d2d;
  --banner-text-color: #2d2d2d;
  --plain-text-color: #ddd;
  /* Banner */
  --top-bar-bg-color: #597081;
  --nav-button-active-color: #6c889c;
  --nav-button-inactive-color: #7ea0b7;
  /* Grid */
  --cell-bg-color: #4d4d4d;
  --cell-timespan-color: #bbb;
  --cell-timespan-active-color: #000;
  --cell-available-color: #4cb569;
  --cell-uncertain-color: #c9bd56;
  /* Switch */
  --switch-inactive-bg-color: #597081;
  --switch-active-bg-color: #4cb569;
  --switch-toggle-color: #91a2ae;
  /* Text box */
  --textbox-bg-color: #5c5c5c;
  --dropbox-bg-color:#464646;
  /* Button */
  --button-bg-color: #5c5c5c;
  --button-hover-color: #6d6d6d;
  --button-active-color: #5f5f5f;
  --button-disabled-color: #4cb569;
}
.banner {
  width: 1200px;
}
button {
  border-radius: 5rem;
  font-family: 'Montserrat';
  background: var(--button-bg-color);
  border: none;
  color: var(--plain-text-color);
  transition: all ease-in-out 150ms;
}
button:hover {
  cursor: pointer;
  background: var(--button-hover-color);
}
button:active {
  background: var(--button-active-color);
}
</style>
