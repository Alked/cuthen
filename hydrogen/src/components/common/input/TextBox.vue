<template>
  <div class="textbox">
    <div class="icon">
      <i :class="['pi', `pi-${icon}`]"></i>
    </div>
    <input type="text" v-model="dataLocal" :placeholder="placeholder" @click="onClick">
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    icon: String,
    placeholder: String,
    data: String,
    selectAllOnClick: Boolean,
  },
  data() {
    return {
      dataLocal: '',
    };
  },
  methods: {
    onClick(event) {
      if (this.selectAllOnClick) event.target.select();
    },
  },
  watch: {
    dataLocal(newData) {
      this.$emit('update:data', newData);
    },
    data(newData) {
      this.dataLocal = newData;
    },
  },
};
</script>

<style scoped>
.textbox {
  display: flex;
  width: 18rem;
  height: 3rem;
  color: var(--plain-text-color);
}
.icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--textbox-bg-color);
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
input {
  width: 14rem;
  outline: none;
  border: 3px solid var(--textbox-bg-color);
  border-left: none;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: var(--plain-text-color);
  font-family: 'Montserrat';
  background: transparent;
  padding-left: 5px;
  padding-right: 5px;
  text-overflow: ellipsis;
}
</style>
