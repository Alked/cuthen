<template>
  <div
    class="cell"
    oncontextmenu="return false;"
    @mousedown="onMouseDown"
    @mouseenter="onMouseEnter"
    :style="{ background: [
      'var(--dark-cell-bg-color)',
      'var(--dark-cell-available-color)',
      'var(--dark-cell-uncertain-color)'
    ][state] }">
    <span
      class="timespan"
      ref="timespan"
      :style="{
        opacity: `${opacity}%`,
        color: state === 0 ? 'var(--dark-cell-timespan-color)'
          : 'var(--dark-cell-timespan-active-color)'
      }">
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
    stateOverride: Number,
    stateOverrideNotifier: Number,
  },
  data() {
    return {
      state: 0,
      opacity: 0,
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
      if (this.state !== 0) {
        this.opacity = 100;
        return;
      }
      if (newPos[0] === -1) {
        this.opacity = 0;
        return;
      }
      const maxDistance = 400;
      const mouseX = newPos[0];
      const mouseY = newPos[1];
      const posLabel = this.$refs.timespan.getBoundingClientRect();
      let distance = Math.sqrt((mouseX - posLabel.x) ** 2 + (mouseY - posLabel.y) ** 2);
      if (distance > maxDistance) distance = maxDistance;
      this.opacity = (1 - distance / maxDistance) * 100;
    },
    stateOverrideNotifier() {
      this.state = this.stateOverride;
      this.opacity = this.state === 0 ? 0 : 100;
      console.log(123);
    },
    state(newState) {
      this.$emit('stateChange', this.end, newState);
    },
  },
  methods: {
    onMouseDown(event) {
      switch (event.button) {
        case 0:
          // Left mouse down
          if (this.state > 0) {
            this.state = 0;
          } else {
            this.state = 1;
          }
          break;
        case 2:
          // Right mouse down
          if (this.state > 1) {
            this.state = 0;
          } else {
            this.state = 2;
          }
          break;
        default:
          break;
      }
    },
    onMouseEnter(event) {
      if (event.buttons === 0) return;
      switch (event.buttons) {
        case 1:
          // Left mouse down
          if (this.state > 0) {
            this.state = 0;
          } else {
            this.state = 1;
          }
          break;
        case 2:
          // Right mouse down
          if (this.state > 1) {
            this.state = 0;
          } else {
            this.state = 2;
          }
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.cell {
  width: 6rem;
  height: 2rem;
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.timespan {
  font-size: 12px;
  font-family: 'Montserrat';
}
.timespan:hover {
  cursor: default;
}
.cell:first-of-type {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.cell:last-of-type {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
