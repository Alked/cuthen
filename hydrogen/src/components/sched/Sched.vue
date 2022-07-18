<template>
  <div class="schedule-view">
    <div class="info-block">
      <div class="info-col">
        <text-box
          :icon="'code'"
          v-model:data="code"
          :selectAllOnClick="true"
          :errorMessage="codeErrorMessage"
          :errorNotifier="codeErrorNotifier"/>
        <button
          class="button"
          :class="{ failed: insertFailed }"
          @click="onClickInsert"
          :disabled="insertDisabled">
            <i class="pi pi-check" v-show="insertDisabled && !insertFailed"></i>
            <i class="pi pi-times" v-show="insertFailed"></i>
          {{ insertLabel }}
        </button>
      </div>
      <div class="info-col">
        <card-holder icon="users" title="Participants">
          <participant-card
            v-for="entry in orderedParticipants" :key="entry.id"
            :name="entry.details.name"
            :id="entry.id"
            :prohibitDelete="entry.id === 'main-user'"
            @deleteParticipant="onDeleteParticipant"
            v-model:involved="entry.details.isInvolved"/>
        </card-holder>
      </div>
      <div class="info-col">
        <card-holder icon="check-circle" title="Suggestions">
          <suggestion-card
            title="Wednesday 10AM - 12PM"
            :details="['Everyone is available']"
            :state="0"/>
          <suggestion-card
            title="Friday 8AM - 12PM"
            :details="['Everyone is available']"
            :state="0"/>
          <suggestion-card
            title="Saturday 12PM - 3PM"
            :details="[
              'Carton is uncertain at 12PM - 1PM and 2PM - 3PM',
              'Leslie is uncertain at 1PM-3PM',
            ]"
            :state="1"/>
        </card-holder>
      </div>
    </div>
    <grid :isEditable="false" v-model:gridcode="gridcode"/>
  </div>
</template>

<script>
import decomposeCode from '@/model/code/code';
import { gridAggregate } from '@/model/grid/gridcode';
import Grid from '@/components/common/grid/Grid.vue';
import TextBox from '@/components/common/input/TextBox.vue';
import CardHolder from '@/components/common/cardholder/CardHolder.vue';
import ParticipantCard from '@/components/common/card/ParticipantCard.vue';
import SuggestionCard from '@/components/common/card/SuggestionCard.vue';

export default {
  name: 'Sched',
  components: {
    Grid,
    TextBox,
    CardHolder,
    ParticipantCard,
    SuggestionCard,
  },
  data() {
    return {
      insertDisabled: false,
      insertFailed: false,
      code: '',
      codeErrorMessage: '',
      codeErrorNotifier: 0,
      participants: {},
      gridcode: '0',
    };
  },
  computed: {
    insertLabel() {
      return this.insertDisabled ? '' : 'Insert';
    },
    orderedParticipants() {
      const ordered = [];
      Object.keys(this.participants).forEach((id) => {
        ordered.push({
          id,
          details: this.participants[id],
        });
      });
      ordered.sort((a, b) => a.details.insertedAt - b.details.insertedAt);
      return ordered;
    },
  },
  methods: {
    onClickInsert() {
      // Validate code
      const [errorMessage, name, gridcode, timezone] = decomposeCode(this.code);
      if (errorMessage === '') {
        // Save participant
        this.participants[(Math.random() * 10000000000).toFixed(0)] = {
          name,
          gridcode,
          timezone,
          isInvolved: true,
          insertedAt: Date.now(),
        };
      } else {
        // Prompt error
        this.codeErrorNotifier += 1;
        this.insertFailed = true;
        this.codeErrorMessage = errorMessage;
      }
      this.insertDisabled = true;
      setTimeout(() => {
        this.insertDisabled = false;
        this.insertFailed = false;
      }, 800);
    },
    onDeleteParticipant(id) {
      delete this.participants[id];
    },
  },
  watch: {
    participants: {
      handler() {
        // Update scheduling results
        const gridcodes = [];
        Object.keys(this.participants).forEach((id) => {
          if (this.participants[id].isInvolved) {
            gridcodes.push(this.participants[id].gridcode);
          }
        });
        this.gridcode = gridAggregate(gridcodes);
      },
      deep: true,
    },
  },
  created() {
    // Create main user's participant entry
    const [gridcode, timezone] = localStorage.getItem('code').split('$').slice(1);
    this.participants['main-user'] = {
      name: 'You',
      gridcode,
      timezone,
      isInvolved: true,
      insertedAt: Date.now(),
    };
  },
  activated() {
    // Load/reload main user's code when this view is visited(activated)
    const [gridcode, timezone] = localStorage.getItem('code').split('$').slice(1);
    this.participants['main-user'].gridcode = gridcode;
    this.participants['main-user'].timezone = timezone;
  },
};
</script>

<style scoped>
.schedule-view {
  display: flex;
  flex-flow: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
}
.info-block {
  display: flex;
  gap: 2rem;
}
.info-col {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}
.button {
  width: 18rem;
  height: 2.3rem;
}
.button:disabled {
  background: var(--button-disabled-color);
  cursor: default;
}
.button.failed:disabled {
  background: var(--button-disabled-failed-color);
  cursor: default;
}
</style>
