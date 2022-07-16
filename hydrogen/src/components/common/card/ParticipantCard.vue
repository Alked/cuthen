<template>
  <div class="card">
    <div class="user">
      <div class="icon">
        <i :class="['pi', `pi-user`]"></i>
      </div>
      <span class="name" :class="{crossed: !isShown}">{{ name }}</span>
    </div>
    <div class="buttons">
      <button :class="['button', 'view', {long: prohibitDelete}]" @click="onClickView">
        <i class="pi" :class="{ 'pi-eye': isShown, 'pi-eye-slash': !isShown }"></i>
      </button>
      <button class="button delete" v-if="!prohibitDelete">
        <i :class="['pi', `pi-trash`]"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParticipantCard',
  props: {
    name: String,
    prohibitDelete: Boolean,
  },
  data() {
    return {
      isShown: true,
    };
  },
  methods: {
    onClickView() {
      // TODO: Emit to Sched.vue the new state
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style scoped>
.card {
  width: 16rem;
  height: 2rem;
  background: var(--participant-card-bg);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 11rem;
}
.name {
  font-family: 'Montserrat';
  width: 8rem;
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  font-size: 0.8rem;
  color: var(--main-bg-color);
}
.name.crossed {
  text-decoration: line-through;
}
.icon {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--participant-card-user-icon-bg);
  border-radius: 5px 0 0 5px;
}
.buttons {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button {
  width: 2.5rem;
  height: 100%;
  border-radius: unset;
}
.button.long {
  width: 5rem;
}
.button:last-of-type {
  border-radius: 0 5px 5px 0;
}
.button.view {
  background: var(--participant-card-view-button-bg);
  color: var(--main-bg-color);
}
.button.view:hover {
  background: var(--participant-card-view-button-bg-hover);
}
.button.view:active {
  background: var(--participant-card-view-button-bg-active);
}
.button.delete {
  background: var(--participant-card-delete-button-bg);
  color: var(--main-bg-color);
}
.button.delete:hover {
  background: var(--participant-card-delete-button-bg-hover);
}
.button.delete:active {
  background: var(--participant-card-delete-button-bg-active);
}
</style>
