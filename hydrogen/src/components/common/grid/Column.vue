<template>
  <div
    @mousemove="updateCellLabelOpacity"
    @mouseleave="hideCellLabels"
  >
    <cell
      v-for="idx in 24"
      :key="idx"
      :end="idx"
      :mouse-pos="mousePos"
    />
  </div>
</template>

<script>
import Cell from './Cell.vue';

export default {
  name: 'Column',
  data() {
    return {
      mousePos: [0, 0],
    };
  },
  components: {
    Cell,
  },
  methods: {
    updateCellLabelOpacity(event) {
      this.mousePos = [event.clientX, event.clientY];
    },
    hideCellLabels() {
      console.log('leave');
      this.mousePos = [-1];
    },
  },
};
</script>

<style scoped>

</style>
