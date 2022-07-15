<template>
  <div class="top-bar">
    <span class="info">
      {{ title }}
      <span class="small">
        &blacktriangleright; {{ version }}
      </span>
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
  width: 1200px;
  height: 3rem;
  background: #597081;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  padding-left: 1rem;
  font-family: 'Montserrat';
  color: #2d2d2d;
  font-weight: bold;
  font-size: larger;
}
.small {
  font-size: small;
}
</style>
