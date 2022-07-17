<template>
  <div class="footer">
    <div class="col">
      <span class="title bold">CUThen</span>
      <span class="bold small">
        {{ version }}
      </span>
      <span class="bold small">
        <a href="https://github.com/Alked/cuthen" target="_blank">
          <i class="pi pi-github"></i>
          github.com/Alked/cuthen
        </a>
      </span>
    </div>
    <div class="col">
      <span class="bold">Developed by</span>
      <span
        class="contributor"
        v-for="contributor in contributors" :key="contributor.name">
        <a :href="contributor.url" target="_blank">
          <i class="pi pi-github"></i>
          {{ contributor.name }}
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VFooter',
  props: {
    contributors: Array,
    version: String,
  },
};
</script>
<style scoped>
 a, a:hover, a:focus, a:active {
  text-decoration: none;
  color: inherit;
 }
.footer {
  width: 1200px;
  border-radius: 1rem 1rem 0 0;
  background: var(--footer-bg);
  color: var(--footer-font-color);
  font-family: 'Montserrat';
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.col {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: flex-start;
}
.bold {
  font-weight: bold;
}
.small {
  font-size: 0.8rem;
}
.title {
  font-size: 2rem;
  border: 5px solid var(--footer-title-border-color);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}
.contributor {
  background: var(--footer-contributor-bg);
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  color: var(--footer-contributor-font-color);
}
</style>
