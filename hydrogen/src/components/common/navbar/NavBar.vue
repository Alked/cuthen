<template>
  <div class="nav-bar">
    <div
      class="nav-button left"
      @click="$router.replace('/edit')"
      :class="{ active: isEditMode, inactive: !isEditMode }"
    >
      Edit
    </div>
    <div
      class="nav-button right"
      @click="$router.replace('/schedule')"
      :class="{ active: !isEditMode, inactive: isEditMode }"
    >
      Schedule
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isEditMode() {
      return this.$route.fullPath === '/edit';
    },
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
}
.nav-button {
  height: 5rem;
  font-family: "Montserrat";
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease-in-out;
}
.left {
  border-bottom-left-radius: 1rem;
}
.right {
  border-bottom-right-radius: 1rem;
}
.active {
  width: 75%;
  background: #6c889c;
}
.inactive {
  width:25%;
  background: #7ea0b7;
}
.inactive:hover {
  width: 30%;
  cursor: pointer;
}
</style>
