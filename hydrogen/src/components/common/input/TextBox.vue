<template>
  <div class="textbox">
    <div class="icon">
      <i :class="['pi', `pi-${icon}`]"></i>
    </div>
    <input type="text" v-model="data" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    icon: String,
    placeholder: String,
  },
  data() {
    return {
      data: '',
    };
  },
};
</script>

<style scoped>
.textbox {
  display: flex;
  width: 18rem;
  height: 3rem;
  color: var(--dark-plain-text-color);
}
.icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-textbox-bg-color);
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
input {
  width: 14rem;
  outline: none;
  border: 3px solid var(--dark-textbox-bg-color);
  border-left: none;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: var(--dark-plain-text-color);
  font-family: 'Montserrat';
  background: transparent;
  padding-left: 5px;
  padding-right: 5px;
  text-overflow: ellipsis;
}
</style>
