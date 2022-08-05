<template>
  <div :class="['main', `skin-${skin}`]">
    <div class="banner">
      <top-bar title="CUThen" :version="version"/>
      <nav-bar />
    </div>
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <v-footer
      :contributors="[
        { name: 'Alked &#128002;&#127866;', url: 'https://github.com/Alked' },
        { name: 'Xxl-Valeria &#129453;', url: 'https://github.com/Xxl-Valeria' }
      ]"
      :version="version"/>
  </div>
</template>

<script>
import TopBar from '@/components/common/topbar/TopBar.vue';
import NavBar from '@/components/common/navbar/NavBar.vue';
import VFooter from '@/components/common/footer/Footer.vue';

export default {
  components: {
    TopBar,
    NavBar,
    VFooter,
  },
  data() {
    return {
      skin: 'dark',
      transitionName: '',
      refreshed: false,
      version: 'v0.0.13 alpha',
    };
  },
  watch: {
    $route() {
      // To prevent animation when entering the page
      if (this.refreshed) {
        this.refreshed = false;
        return;
      }
      switch (this.$route.fullPath) {
        case '/edit':
          this.transitionName = 'slide-fade-left';
          break;
        case '/schedule':
          this.transitionName = 'slide-fade-right';
          break;
        default:
          break;
      }
    },
  },
  created() {
    this.refreshed = true;
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
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
.main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--main-bg-color);
}
.skin-dark {
  /* Global */
  --main-bg-color: #2d2d2d;
  --banner-text-color: #2d2d2d;
  --plain-text-color: #ddd;
  /* Banner */
  --top-bar-bg-color: #597081;
  --top-bar-text-color: #2d2d2d;
  --nav-button-active-color: #6c889c;
  --nav-button-inactive-color: #7ea0b7;
  /* Grid */
  --cell-bg-color: #4d4d4d;
  --cell-bg-color-uneditable: #3d3d3d;
  --cell-timespan-color: #bbb;
  --cell-timespan-active-color: #000;
  --cell-available-color: #4cb569;
  --cell-uncertain-color: #c9bd56;
  /* Switch */
  --switch-inactive-bg-color: #597081;
  --switch-active-bg-color: #4cb569;
  --switch-toggle-color: #91a2ae;
  --switch-toggle-on-color: #ddd;
  /* Input box */
  --textbox-bg-color: #5c5c5c;
  --textbox-error-bg-color: #aa4d5a;
  --textbox-error-msg-color: #ddd;
  --dropbox-bg-color:#464646;
  /* Button */
  --button-bg-color: #5c5c5c;
  --button-hover-color: #6d6d6d;
  --button-active-color: #5f5f5f;
  --button-disabled-color: #4cb569;
  --button-disabled-failed-color: #aa4d5a;
  /* Card holder*/
  --card-holder-header-color: #737373;
  --card-holder-body-color: #4c4c4c;
  --card-holder-scrollbar-thumb: #737373;
  /* Participant card */
  --participant-card-bg: #737373;
  --participant-card-user-icon-bg: #7ea0b7;
  --participant-card-view-button-bg: #7ea0b7;
  --participant-card-view-button-bg-hover: #94b6cc;
  --participant-card-view-button-bg-active: #84a7be;
  --participant-card-delete-button-bg: #a56270;
  --participant-card-delete-button-bg-hover: #c27f8c;
  --participant-card-delete-button-bg-active: #b46f7d;
  /* Suggestion card */
  --suggestion-card-bg: #2d2d2d;
  --suggestion-card-title-color: #ddd;
  --suggestion-card-detail-state-pass: #4cb569;
  --suggestion-card-detail-state-warn: #dbbc56;
  /* Footer */
  --footer-bg: #597081;
  --footer-title-border-color: #2d2d2d;
  --footer-font-color: #2d2d2d;
  --footer-contributor-bg: #2d2d2d;
  --footer-contributor-font-color: #ddd;
  --footer-version-stage-border-color: #2d2d2d;
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
.slide-fade-left-enter-active {
  transition: all 250ms ease-in;
  animation: slide-in-from-left 250ms;
}
.slide-fade-right-enter-active {
  transition: all 250ms ease-in;
  animation: slide-in-from-right 250ms;
}
.slide-fade-left-leave-active {
  transition: all 250ms ease-in;
  animation: slide-in-from-right 250ms reverse;
}
.slide-fade-right-leave-active {
  transition: all 250ms ease-in;
  animation: slide-in-from-left 250ms reverse;
}
@keyframes slide-in-from-left {
  0% {
    transform: translateX(-5rem);
    opacity: 0;
  }
  60% {
    transform: translateX(2rem);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-in-from-right {
  0% {
    transform: translateX(5rem);
    opacity: 0;
  }
  60% {
    transform: translateX(-2rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
