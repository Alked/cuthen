<template>
  <div class='grid'>
      <div class='columns'>
        <column
          v-for='idx in 7' :key='idx'
          :day="weeks[idx - 1]"
          :dayID="idx - 1"
          :isEditable="isEditable"
          :gridStateOverride="statesOverride"
          :gridStateOverrideNotifier="statesOverrideNotifier"
          @weeklyStatesChanged="onWeeklyStatesChanged"/>
      </div>
  </div>

</template>

<script>
import { gridEncode, gridDecode } from '@/model/grid/gridcode';
import Column from './Column.vue';

export default {
  name: 'Grid',
  props: {
    isEditable: Boolean,
    codeOverride: String,
    codeOverrideNotifier: Number,
  },
  data() {
    return {
      weeks: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      states: [...new Array(7)].map(() => [...new Array(24)].map(() => 0)),
      statesOverride: [],
      statesOverrideNotifier: 0,
    };
  },
  components: {
    Column,
  },
  methods: {
    onWeeklyStatesChanged(day, newState) {
      // Update states upwards
      const dayIdx = this.weeks.indexOf(day);
      this.states[dayIdx] = newState;
      const codeStr36 = gridEncode(this.states);
      this.$emit('gridChanged', codeStr36);
    },
  },
  watch: {
    codeOverrideNotifier() {
      // Update states downwards
      this.statesOverride = gridDecode(this.codeOverride);
      this.statesOverrideNotifier += 1;
    },
  },
};
</script>

<style scoped>
.grid {
  display: flex;
}
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
.tick {
  display: flex;
  justify-content: right;
  font-family: 'Montserrat';
  font-size: small;
}
</style>
