<template>
  <div class="cell">
    <span
      class="timespan"
      ref="timespan"
      :style="{ opacity: opacity + '%' }"
    >
      {{ timespan }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    end: Number,
    mousePos: Array,
  },
  data() {
    return {
      state: 0,
      opacity: 0,
      scale: 1,
    };
  },
  computed: {
    timespan() {
      let { start, end } = { start: this.end - 1, end: this.end };
      let startTag = 'AM';
      let endTag = 'AM';
      if (start >= 12) startTag = 'PM';
      if (end >= 12) endTag = 'PM';
      if (start >= 13) start -= 12;
      if (end >= 13) end -= 12;
      if (end === 12 && endTag === 'PM') {
        end = 0;
        endTag = 'AM';
      }
      return `${start} ${startTag} - ${end} ${endTag}`;
    },
  },
  watch: {
    mousePos(newPos) {
      if (newPos[0] === -1) {
        this.opacity = 0;
        console.log('left');
        return;
      }
      const maxDistance = 200;
      const mouseX = newPos[0];
      const mouseY = newPos[1];
      const posLabel = this.$refs.timespan.getBoundingClientRect();
      const labelX = posLabel.x;
      const labelY = posLabel.y;
      let distance = Math.sqrt((mouseX - labelX) ** 2 + (mouseY - labelY) ** 2);
      if (distance > maxDistance) distance = maxDistance;
      this.opacity = (1 - distance / maxDistance) * 100;
    },
  },
};
</script>

<style scoped>
.cell {
  width: 5rem;
  height: 2rem;
  background: var(--dark-cell-bg-color);
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.timespan {
  font-size: 12px;
  font-family: 'Montserrat';
  color: var(--dark-cell-timespan-color);
  opacity: 0%;
}
.timespan:hover {
  cursor: default;
}
</style>
