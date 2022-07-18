<template>
  <div
    class="cell"
    oncontextmenu="return false;"
    @mousedown="onMouseDown"
    @mouseenter="onMouseEnter"
    :style="{ background: [
      isEditable ? 'var(--cell-bg-color)' : 'var(--cell-bg-color-uneditable)',
      'var(--cell-available-color)',
      'var(--cell-uncertain-color)'
    ][cellState] }">
    <span
      class="timespan"
      ref="timespan"
      :style="{
        opacity: `${opacity}%`,
        color: cellState === 0 ? 'var(--cell-timespan-color)'
          : 'var(--cell-timespan-active-color)'
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
    cellState: Number,
    isEditable: Boolean,
  },
  data() {
    return {
      cellPos: [0, 0],
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
    opacity() {
      if (this.cellState !== 0) {
        return 100;
      }
      if (this.mousePos[0] === -1) {
        return 0;
      }
      const maxDistance = 400;
      const mouseX = this.mousePos[0];
      const mouseY = this.mousePos[1];
      let distance = Math.sqrt((mouseX - this.cellPos.x) ** 2 + (mouseY - this.cellPos.y) ** 2);
      if (distance > maxDistance) distance = maxDistance;
      return (1 - distance / maxDistance) * 100;
    },
  },
  methods: {
    onMouseDown(event) {
      if (!this.isEditable) return;
      switch (event.button) {
        case 0:
          // Left mouse down
          if (this.cellState > 0) {
            this.$emit('update:cellState', 0);
          } else {
            this.$emit('update:cellState', 1);
          }
          break;
        case 2:
          // Right mouse down
          if (this.cellState > 1) {
            this.$emit('update:cellState', 0);
          } else {
            this.$emit('update:cellState', 2);
          }
          break;
        default:
          break;
      }
    },
    onMouseEnter(event) {
      if (!this.isEditable) return;
      if (event.buttons === 0) return;
      switch (event.buttons) {
        case 1:
          // Left mouse down
          if (this.cellState > 0) {
            this.$emit('update:cellState', 0);
          } else {
            this.$emit('update:cellState', 1);
          }
          break;
        case 2:
          // Right mouse down
          if (this.cellState > 1) {
            this.$emit('update:cellState', 0);
          } else {
            this.$emit('update:cellState', 2);
          }
          break;
        default:
          break;
      }
    },
    updateCellPos() {
      this.cellPos = this.$refs.timespan.getBoundingClientRect();
    },
  },
  created() {
    // Listen to window resize
    window.addEventListener('resize', this.updateCellPos);
  },
  mounted() {
    this.updateCellPos();
  },
  unmounted() {
    window.removeEventListener('resize', this.updateCellPos);
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
