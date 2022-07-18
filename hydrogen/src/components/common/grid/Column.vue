<template>
  <div class="column">
    <div class="day">{{ day }}</div>
    <toggle-switch
      v-show="isEditable"
      v-model:isOn="isAllAvailable"
      @on="allCellAvailable"
      @off="allCellUnavailable"/>
    <div
        @mousemove="updateCellLabelOpacity"
        @mouseleave="hideCellLabels"
      >
      <cell
        v-for="idx in 24"
        :key="idx"
        :end="idx"
        :mousePos="mousePos"
        :isEditable="isEditable"
        v-model:cellState="cellStates[idx - 1]"
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
    isEditable: Boolean,
    weeklyState: Array,
  },
  data() {
    return {
      mousePos: [0, 0],
      cellStates: [...new Array(24)].map(() => 0),
      isAllAvailable: false,
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
  watch: {
    weeklyState(newWeeklyState) {
      this.cellStates = newWeeklyState;
    },
    cellStates(newCellStates) {
      // Toggle switch automatically
      if (newCellStates.every((elem) => elem > 0)) {
        this.isAllAvailable = true;
      } else {
        this.isAllAvailable = false;
      }
      // Notify grid
      this.$emit('update:weeklyState', newCellStates);
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
  color: var(--plain-text-color);
  font-size: 1.6rem;
}
</style>
