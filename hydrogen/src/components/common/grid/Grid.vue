<template>
  <div class='grid' oncontextmenu="return false;">
      <div class='columns'>
        <column
          v-for='idx in 7' :key='idx'
          :day="daysAbbr[idx - 1]"
          :isEditable="isEditable"
          v-model:weeklyState="weeklyStates[idx - 1]"/>
      </div>
  </div>
</template>

<script>
import { gridEncode, gridDecode } from '@/model/grid/gridcode';
import { daysAbbr } from '@/model/data/data';
import Column from './Column.vue';

export default {
  name: 'Grid',
  props: {
    isEditable: Boolean,
    gridcode: String,
  },
  data() {
    return {
      daysAbbr,
      weeklyStates: [...new Array(7)].map(() => [...new Array(24)].map(() => 0)),
    };
  },
  components: {
    Column,
  },
  watch: {
    gridcode() {
      // Update states downwards
      this.weeklyStates = gridDecode(this.gridcode);
    },
    weeklyStates: {
      handler() {
        const codeStr36 = gridEncode(this.weeklyStates);
        this.$emit('update:gridcode', codeStr36);
      },
      deep: true,
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
