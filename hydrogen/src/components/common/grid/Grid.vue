<template>
  <div class="columns">
    <column v-for="idx in 7" :key="idx" />
  </div>
</template>

<script>
import Column from './Column.vue';

export default {
  name: 'Grid',
  components: {
    Column,
  },
};
</script>

<style scoped>
.columns {
  display: flex;
  gap: 5rem;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
