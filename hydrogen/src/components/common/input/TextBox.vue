<template>
  <div>
    <div class="error" :class="{show: showError}">
      <span class="error-msg">
        <i :class="['pi', `pi-exclamation-triangle`]"></i>
        &nbsp; {{ errorMessageLocal }}
      </span>
    </div>
    <div class="textbox">
      <div class="icon">
        <i :class="['pi', `pi-${icon}`]"></i>
      </div>
      <input type="text" v-model="dataLocal" :placeholder="placeholder" @click="onClick">
    </div>
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
    errorMessage: String,
    errorNotifier: Number,
  },
  data() {
    return {
      dataLocal: '',
      showError: false,
      errorMessageLocal: '',
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
    errorNotifier() {
      this.showError = this.errorMessage.length !== 0;
      if (this.errorMessage.length !== 0) {
        this.errorMessageLocal = this.errorMessage;
      }
    },
  },
};
</script>

<style scoped>
.error {
  background: var(--textbox-error-bg-color);
  height: 2.1rem;
  width: 15rem;
  border-radius: 0.5rem 0.5rem 0 0;
  position: absolute;
  z-index: 1;
  transition: all ease-in-out 150ms;
}
.error.show {
  transform: translateY(-1.5rem);
}
.error-msg {
  font-family: 'Montserrat';
  font-size: small;
  padding: 0.3rem 0 0 1rem;
  color: var(--textbox-error-msg-color);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.textbox {
  display: flex;
  width: 18rem;
  height: 3rem;
  color: var(--plain-text-color);
  position: relative;
  z-index: 2;
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
  background: var(--main-bg-color);
  padding-left: 5px;
  padding-right: 5px;
  text-overflow: ellipsis;
}
</style>
