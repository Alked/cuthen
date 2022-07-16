<template>
  <div class="edit-view">
    <div class="info-block">
      <div class="info-col">
        <text-box :icon="'user'" :placeholder="'Insert a nickname'" v-model:data="nickname"/>
        <drop-box :icon="'clock'" :entries="timezones" v-model:selectedID="timezone"/>
      </div>
      <div class="info-col">
        <text-box :icon="'code'" v-model:data="code" :selectAllOnClick="true"/>
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
    <grid :showSwitch="true" @gridChanged="onGridChanged"/>
  </div>
</template>

<script>
import { getTimeZones } from '@vvo/tzdb';
import forge from 'node-forge';
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
      timezones: [],
      timezone: '',
      nickname: '',
      gridCode: '0',
      code: '',
    };
  },
  computed: {
    loadLabel() {
      return this.loadDisabled ? '' : 'Load';
    },
    copyLabel() {
      return this.copyDisabled ? '' : 'Copy';
    },
    codeBuilder() {
      return `${this.nickname}$${this.gridCode}$${this.timezone}`;
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
      navigator.clipboard.writeText(this.code);
      this.copyDisabled = true;
      setTimeout(() => {
        this.copyDisabled = false;
      }, 2000);
    },
    onGridChanged(newCode) {
      this.gridCode = newCode;
    },
  },
  watch: {
    codeBuilder(newCode) {
      this.code = newCode;
    },
  },
  mounted() {
    let localTimezone = '';
    getTimeZones().forEach((zone) => {
      // Build offset string
      const offsetInHours = zone.rawOffsetInMinutes / 60;
      let offsetString = '';
      const offsetInHoursAbs = Math.abs(offsetInHours);
      if (offsetInHoursAbs < 10) {
        offsetString += '0';
      }
      offsetString += Math.floor(offsetInHoursAbs);
      if (offsetInHoursAbs !== Math.floor(offsetInHoursAbs)) {
        offsetString += ':30';
      } else {
        offsetString += ':00';
      }
      if (offsetInHours < 0) {
        offsetString = `-${offsetString}`;
      } else {
        offsetString = `+${offsetString}`;
      }
      // Build timezone short name
      let shortname = zone.name;
      shortname = shortname
        .replace('America', 'US')
        .replace('Pacific', 'PAC')
        .replace('Africa', 'AF')
        .replace('Europe', 'EU')
        .replace('Asia', 'AS')
        .replace('Australia', 'AU')
        .replace('Indian', 'IN')
        .replace('Argentina', 'AR')
        .replace('Antarctica', 'AN')
        .replace('Atlantic', 'ATL')
        .replace('Arctic', 'ARC');
      // Build timezone info
      const md5 = forge.md.md5.create();
      md5.update(`${shortname}:${offsetString}`);
      const id = md5.digest().toHex().slice(0, 6);
      this.timezones.push({
        printed: `(UTC${offsetString}) ${shortname}`,
        value: zone.rawOffsetInMinutes,
        id,
      });
      if (Intl.DateTimeFormat().resolvedOptions().timeZone === zone.name) {
        localTimezone = id;
      }
    });
    this.timezone = localTimezone;
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
