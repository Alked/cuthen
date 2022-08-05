<template>
  <div class="switch"
    @click="onClick"
    :style="{
      background:
        isOn ? 'var(--switch-active-bg-color)'
          : 'var(--switch-inactive-bg-color)'
    }">
    <div
      class="toggle"
      :style="{
        'margin-left': isOn ? '1.7rem' : '0',
        background:
          isOn ? 'var(--switch-toggle-on-color)'
            : 'var(--switch-toggle-color)'
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ToggleSwitch',
  props: {
    isOn: Boolean,
  },
  methods: {
    onClick() {
      this.$emit('update:isOn', !this.isOn);
      this.$emit('switched', !this.isOn);
    },
  },
};
</script>

<style scoped>
.switch {
  width: 3.4rem;
  height: 1.7rem;
  background: var(--switch-inactive-bg-color);
  border-radius: 5rem;
  transition: all ease-in-out 100ms;
}
.switch:hover {
  cursor: pointer;
}
.toggle {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 5rem;
  background: var(--switch-toggle-color);
  transition: all ease-in-out 100ms;
}
.on {
  float: right;
}
</style>
