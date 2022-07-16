<template>
  <div class="edit-view">
    <div class="info-block">
      <div class="info-col">
        <text-box :icon="'user'" :placeholder="'Insert a nickname'"/>
        <drop-box :icon="'clock'"/>
      </div>
      <div class="info-col">
        <text-box :icon="'code'"/>
        <div class="buttons">
          <button class="button" @click="onClickLoad" :disabled="loadDisabled">
            <i class="pi pi-check" v-show="loadDisabled"></i>
            {{ loadLabel }}
          </button>
          <button class="button" @click="onClickCopy" :disabled="copyDisabled">
          <i class="pi pi-check" v-show="copyDisabled"></i>
            {{ copyLabel }}
          </button>
        </div>
      </div>
      <div class="info-col help">
        <div class="help-entry">
          <div class="icon-wrapper">
            <i class="pi pi-user"></i>
          </div>
          <p class="description">
            A nickname to help identify yourself when scheduling.
          </p>
        </div>
        <div class="help-entry">
          <div class="icon-wrapper">
            <i class="pi pi-clock"></i>
          </div>
          <p class="description">
            The timezone your availability corresponds to.
          </p>
        </div>
        <div class="help-entry">
          <div class="icon-wrapper">
            <i class="pi pi-code"></i>
          </div>
          <p class="description">
            A unique code that encodes your availability,
            your nickname and your timeozne.
          </p>
        </div>
      </div>
      <div class="info-col help">
        <div class="help-entry">
          <div class="slot-sample available">
          </div>
          <p class="description wide">
            Available: I'm happy to CUThen.
            <br/>
            &blacktriangleright;
            Left click or drag on
            <span class="slot-inline unavailable">unavailable</span>
            slots.
          </p>
        </div>
        <div class="help-entry">
          <div class="slot-sample uncertain">
          </div>
          <p class="description wide">
            Uncertain: I might be able to meet.
            <br/>
            &blacktriangleright;
            Right click or drag on
            <span class="slot-inline available">available</span>
            or
            <span class="slot-inline unavailable">unavailable</span>
            slots.
          </p>
        </div>
        <div class="help-entry">
          <div class="slot-sample unavailable">
          </div>
          <p class="description wide">
            Unavailable: I can't meet at this time.
            <br/>
            &blacktriangleright;
            Left click or drag on
            <span class="slot-inline available">available</span>
            or
            <span class="slot-inline uncertain">uncertain</span>
            slots.
          </p>
        </div>
      </div>
    </div>
    <grid :showSwitch="true"/>
  </div>
</template>

<script>
import Grid from '@/components/common/grid/Grid.vue';
import TextBox from '@/components/common/input/TextBox.vue';
import DropBox from '@/components/common/input/DropBox.vue';

export default {
  name: 'Edit',
  components: {
    Grid,
    TextBox,
    DropBox,
  },
  data() {
    return {
      loadDisabled: false,
      copyDisabled: false,
    };
  },
  computed: {
    loadLabel() {
      return this.loadDisabled ? '' : 'Load';
    },
    copyLabel() {
      return this.copyDisabled ? '' : 'Copy';
    },
  },
  methods: {
    onClickLoad() {
      // TODO: Load code to grid
      this.loadDisabled = true;
      setTimeout(() => {
        this.loadDisabled = false;
      }, 2000);
    },
    onClickCopy() {
      // TODO: Copy to clipboard
      this.copyDisabled = true;
      setTimeout(() => {
        this.copyDisabled = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.edit-view {
  display: flex;
  flex-flow: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
}
.info-block {
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
}
.info-col {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}
.buttons {
  display: flex;
  height: 3rem;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
}
.button {
  width: 8rem;
  height: 2.3rem;
}
.button:disabled {
  background: var(--button-disabled-color);
  cursor: default;
}
.help {
  color: var(--plain-text-color);
}
.help-entry {
  display: flex;
  font-family: 'Montserrat';
  align-items: flex-start;
}
.icon-wrapper {
  width: 1.7rem;
  height: 1.7rem;
  background: var(--textbox-bg-color);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.description {
  text-align: left;
  margin: 0;
  margin-left: 1rem;
  font-size: 12px;
  width: 8rem;
}
.wide {
  width: 15rem;
}
.slot-sample {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 5px;
}
.slot-inline {
  border-radius: 5px;
  padding: 0 3px 0 3px;
}
.slot-inline.uncertain, .slot-inline.available {
  color: var(--main-bg-color);
}
.available {
  background: var(--cell-available-color);
}
.uncertain {
  background: var(--cell-uncertain-color);
}
.unavailable {
  background: var(--cell-bg-color);
}
</style>
