<template>
  <div class="column">
    <div class="day">{{day}}</div>
    <toggle-switch
      v-show="showSwitch"
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
        :mouse-pos="mousePos"
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
    showSwitch: Boolean,
  },
  data() {
    return {
      mousePos: [0, 0],
      stateOverride: 0,
      stateOverrideNotifier: 0,
      states: [...new Array(24)].map(() => 0),
      switchOverride: false,
    };
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
      this.stateOverride = 1;
      this.stateOverrideNotifier += 1;
    },
    allCellUnavailable() {
      this.switchOverride = false;
      this.stateOverride = 0;
      this.stateOverrideNotifier += 1;
    },
    onStateChange(idx, newState) {
      this.states[idx - 1] = newState;
      if (this.states.every((elem) => elem > 0)) {
        this.switchOverride = true;
      } else {
        this.switchOverride = false;
      }
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
