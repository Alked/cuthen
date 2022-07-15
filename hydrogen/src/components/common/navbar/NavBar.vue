<template>
  <div class="nav-bar">
    <div
      class="nav-button left"
      @click="$router.replace('/edit')"
      :class="{ active: isEditMode, inactive: !isEditMode }"
    >
      <i class="pi pi-pencil"></i> &NonBreakingSpace; Edit
    </div>
    <div
      class="nav-button right"
      @click="$router.replace('/schedule')"
      :class="{ active: !isEditMode, inactive: isEditMode }"
    >
      <i class="pi pi-calendar"></i> &NonBreakingSpace; Schedule
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
  color: var(--dark-banner-text-color);
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
  background: var(--dark-nav-button-active-color);
}
.inactive {
  width:25%;
  background: var(--dark-nav-button-inactive-color);
}
.inactive:hover {
  width: 28%;
  cursor: pointer;
}
</style>
