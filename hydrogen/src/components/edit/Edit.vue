<template>
  <div class="edit-view">
    <grid />
  </div>
</template>

<script>
import Grid from '@/components/common/grid/Grid.vue';

export default {
  name: 'Edit',
  components: {
    Grid,
  },
};
</script>

<style scoped>
.edit-view {
  display: flex;
  justify-content: center;
}
</style>
