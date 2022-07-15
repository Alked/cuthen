<template>
  <div class="column">
    <div class="day">{{day}}</div>
    <toggle-switch />
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
  </div>
</template>

<script>
import Cell from './Cell.vue';
import ToggleSwitch from '../switch/ToggleSwitch.vue';

export default {
  name: 'Column',
  components: {
    Cell,
    ToggleSwitch,
  },
  props: {
    day: String,
  },
  data() {
    return {
      mousePos: [0, 0],
    };
  },
  methods: {
    updateCellLabelOpacity(event) {
      this.mousePos = [event.clientX, event.clientY];
    },
    hideCellLabels() {
      this.mousePos = [-1];
    },
  },
};
</script>

<style scoped>
.column {
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 1rem;
}
.day {
  font-family: 'Montserrat';
  color: var(--dark-plain-text-color);
  font-size: 1.6rem;
}
</style>
