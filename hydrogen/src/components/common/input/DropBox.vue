<template>
  <div class="textbox">
    <div class="icon">
      <i :class="['pi', `pi-${icon}`]"></i>
    </div>
    <div class="select">
      <select v-model="selectedIDLocal">
        <option v-for="entry in entries" :key="entry" :value="entry.id">
          {{ entry.printed }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropBox',
  props: {
    icon: String,
    entries: Array,
    selectedID: String,
  },
  data() {
    return {
      selectedIDLocal: '',
    };
  },
  watch: {
    selectedIDLocal(newID) {
      this.$emit('update:selectedID', newID);
    },
    selectedID(newID) {
      this.selectedIDLocal = newID;
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
.select {
  width: 14rem;
  border: 3px solid var(--textbox-bg-color);
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
  background: var(--main-bg-color);
  border: none;
  font-family: 'Montserrat';
  color: #d5d5d5;
  font-size: 0.7rem;
  cursor: inherit;
  outline: none;
}
select option {
  background: var(--dropbox-bg-color);
}
</style>
