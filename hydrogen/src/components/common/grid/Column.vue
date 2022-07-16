<template>
  <div class="column">
    <div class="day">{{day}}</div>
    <toggle-switch
      v-show="isEdittable"
      :switch-override="switchOverride"
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
        :cellID="idx - 1"
        :mouse-pos="mousePos"
        :unified-state-override="unifiedStateOverride"
        :unified-state-override-notifier="unifiedStateOverrideNotifier"
        :state-override="stateOverride"
        :state-override-notifier="stateOverrideNotifier"
        @stateChange="onStateChange"
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
    isEdittable: Boolean,
    dayID: Number,
    gridStateOverride: Array,
    gridStateOverrideNotifier: Number,
  },
  data() {
    return {
      mousePos: [0, 0],
      unifiedStateOverride: 0,
      unifiedStateOverrideNotifier: 0,
      stateOverride: [],
      stateOverrideNotifier: 0,
      states: [...new Array(24)].map(() => 0),
      switchOverride: false,
    };
  },
  watch: {
    gridStateOverrideNotifier() {
      // Notify cells to update themselves
      this.stateOverride = this.gridStateOverride[this.dayID];
      this.stateOverrideNotifier += 1;
    },
  },
  methods: {
    updateCellLabelOpacity(event) {
      this.mousePos = [event.clientX, event.clientY];
    },
    hideCellLabels() {
      this.mousePos = [-1];
    },
    allCellAvailable() {
      this.switchOverride = true;
      this.unifiedStateOverride = 1;
      this.unifiedStateOverrideNotifier += 1;
    },
    allCellUnavailable() {
      this.switchOverride = false;
      this.unifiedStateOverride = 0;
      this.unifiedStateOverrideNotifier += 1;
    },
    onStateChange(cellID, newState) {
      this.states[cellID] = newState;
      if (this.states.every((elem) => elem > 0)) {
        this.switchOverride = true;
      } else {
        this.switchOverride = false;
      }
      // Notify grid
      this.$emit('weeklyStatesChanged', this.day, this.states);
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
