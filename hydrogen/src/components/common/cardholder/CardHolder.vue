<template>
  <div class="card-holder">
    <div class="heading">
      <div class="icon">
        <i :class="['pi', `pi-${icon}`]"></i>
      </div>
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="body-wrapper">
      <div class="body-scrollable">
        <div class="body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardHolder',
  props: {
    title: String,
    icon: String,
  },
};
</script>

<style scoped>
.heading {
  width: 15rem;
  height: 2.5rem;
  background: var(--card-holder-header-color);
  border-radius: 10px 10px 0 0;
  display: flex;
  color: var(--main-bg-color);
}
.icon {
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  padding-left: 0.5rem;
  font-weight: bold;
}
.body-wrapper {
  width: 20rem;
  height: 13rem;
  background: var(--card-holder-body-color);
  border-radius: 0 10px 10px 10px;
  padding: 6px;
}
.body-scrollable {
  height: 13rem;
  overflow-y: auto;
  overflow-x: hidden;
}
.body-scrollable::-webkit-scrollbar {
  background: transparent;
  width: 0.5rem;
  margin-right: 1rem;
}
.body-scrollable::-webkit-scrollbar-thumb {
  border-radius: 5rem;
  background: var(--card-holder-scrollbar-thumb);
}
.body {
  gap: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0 1rem 0;
}
</style>
