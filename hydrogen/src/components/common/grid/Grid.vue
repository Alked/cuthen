<template>
  <div class='grid'>
      <!-- <div class='ticks'>
        <span class='tick' v-for='end in 11' :key='end'>{{end}} AM</span>
        <span class='tick'>12 PM</span>
        <span class='tick' v-for='end in 11' :key='end'>{{end}} PM</span>
        <span class='tick'>0 AM</span>
      </div> -->
      <div class='columns'>
        <column v-for='idx in 7' :key='idx' :day="weeks[idx - 1]" />
      </div>
  </div>

</template>

<script>
import Column from './Column.vue';

export default {
  name: 'Grid',
  data() {
    return {
      weeks: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    };
  },
  components: {
    Column,
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  padding-top: 5rem;
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
.ticks {
  display: flex;
  flex-flow: column;
  gap: 1.175rem;
  margin-right: 1rem;
  padding-top: 2rem;
}
.tick {
  display: flex;
  justify-content: right;
  font-family: 'Montserrat';
  font-size: small;
}
</style>
