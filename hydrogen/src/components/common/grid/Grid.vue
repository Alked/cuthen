<template>
  <div class='grid'>
      <div class='columns'>
        <column
          v-for='idx in 7' :key='idx'
          :day="weeks[idx - 1]"
          :showSwitch="showSwitch"
          @weeklyStatesChanged="onWeeklyStatesChanged"/>
      </div>
  </div>

</template>

<script>
import Column from './Column.vue';

export default {
  name: 'Grid',
  props: {
    showSwitch: Boolean,
  },
  data() {
    return {
      weeks: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      states: [...new Array(7)].map(() => [...new Array(24)].map(() => 0)),
    };
  },
  components: {
    Column,
  },
  methods: {
    onWeeklyStatesChanged(day, newState) {
      // Update states
      const dayIdx = this.weeks.indexOf(day);
      this.states[dayIdx] = newState;
      // Emit to view the latest code snippet
      let code = '0b';
      this.states.forEach((week) => {
        week.forEach((slot) => {
          switch (slot) {
            case 0:
              code += '00';
              break;
            case 1:
              code += '11';
              break;
            case 2:
              code += '01';
              break;
            default:
              break;
          }
        });
      });
      const codeNum = BigInt(code);
      const codeStr36 = codeNum.toString(36);
      this.$emit('gridChanged', codeStr36);
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
