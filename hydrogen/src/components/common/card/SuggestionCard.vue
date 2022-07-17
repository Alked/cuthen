<template>
  <div class="card">
    <span class="title">
      {{ title }}
    </span>
    <span
      class="detail"
      :class="{green: state === 0, yellow: state === 1}"
      v-for="detail in details" :key="detail">
      {{ detail }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SuggestionCard',
  props: {
    title: String,
    details: Array,
    state: Number,
  },
};
</script>

<style scoped>
.card {
  width: 16rem;
  background: var(--suggestion-card-bg);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  font-family: 'Montserrat';
}
.title {
  color: var(--suggestion-card-title-color);
  font-size: 1.15rem;
}
.detail {
  font-size: 0.8rem;
}
.green {
  color: var(--suggestion-card-detail-state-pass);
}
.yellow {
  color: var(--suggestion-card-detail-state-warn);
}
</style>
