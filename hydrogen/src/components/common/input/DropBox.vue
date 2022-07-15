<template>
  <div class="textbox">
    <div class="icon">
      <i :class="['pi', `pi-${icon}`]"></i>
    </div>
    <div class="select">
      <select v-model="timezone">
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
        <option value="abc">Abc</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropBox',
  props: {
    icon: String,
  },
  data() {
    return {
      data: '',
      timezone: null,
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
.select {
  width: 14rem;
  border: 3px solid var(--dark-textbox-bg-color);
  border-left: none;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
  display: grid;
  align-items: center;
}
select {
  height: 100%;
  background: var(--dark-main-bg-color);
  border: none;
  font-family: 'Montserrat';
  color: #d5d5d5;
  font-size: inherit;
  cursor: inherit;
  outline: none;
}
select option {
  background: var(--dark-dropbox-bg-color);
}
</style>
