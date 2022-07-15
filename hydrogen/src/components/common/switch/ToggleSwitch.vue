<template>
  <div class="switch"
    @click="onClick"
    :style="{
      background:
        isOn ? 'var(--dark-switch-active-bg-color)'
          : 'var(--dark-switch-inactive-bg-color)'
    }">
    <div
      class="toggle"
      :style="{
        'margin-left': isOn ? '1.7rem' : '0',
        background:
          isOn ? 'var(--dark-plain-text-color)'
            : 'var(--dark-switch-toggle-color)'
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ToggleSwitch',
  props: {
    switchOverride: Boolean,
  },
  data() {
    return {
      isOn: false,
    };
  },
  methods: {
    onClick() {
      this.isOn = !this.isOn;
      this.$emit(this.isOn ? 'on' : 'off');
    },
  },
  watch: {
    switchOverride(newState) {
      this.isOn = newState;
    },
  },
};
</script>

<style scoped>
.switch {
  width: 3.4rem;
  height: 1.7rem;
  background: var(--dark-switch-inactive-bg-color);
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
  background: var(--dark-switch-toggle-color);
  transition: all ease-in-out 100ms;
}
.on {
  float: right;
}
</style>
