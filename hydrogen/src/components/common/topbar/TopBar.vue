<template>
  <div class="top-bar">
    <span class="info">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    title: String,
    version: String,
  },
};
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 3rem;
  background: var(--top-bar-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  padding-left: 1rem;
  font-family: 'Montserrat';
  color: var(--main-bg-color);
  font-weight: bold;
  font-size: larger;
}
</style>
