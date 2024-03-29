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
        <drop-box :icon="'clock'" :entries="timezones" v-model:selectedID="timezone"/>
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
          <suggestion-card v-for="entry in suggestionsVisualised" :key="entry"
            :title="entry.title"
            :details="entry.details"
            :state="entry.state"/>
        </card-holder>
      </div>
    </div>
    <grid :isEditable="false" v-model:gridcode="gridcode"/>
  </div>
</template>

<script>
import decomposeCode from '@/model/code/code';
import {
  gridAggregate,
  gridGroup,
  findUncertain,
  shiftTimezone,
} from '@/model/grid/gridcode';
import { days, times } from '@/model/data/data';
import { timezones, localtz } from '@/model/data/timezones';
import makeSuggestions from '@/model/schedule/schedule';
import Grid from '@/components/common/grid/Grid.vue';
import TextBox from '@/components/common/input/TextBox.vue';
import DropBox from '@/components/common/input/DropBox.vue';
import CardHolder from '@/components/common/cardholder/CardHolder.vue';
import ParticipantCard from '@/components/common/card/ParticipantCard.vue';
import SuggestionCard from '@/components/common/card/SuggestionCard.vue';

export default {
  name: 'Sched',
  components: {
    Grid,
    TextBox,
    DropBox,
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
      suggestions: [],
      timezones: [],
      timezone: '', // Timezone the scheduling result should be displayed by
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
    suggestionsVisualised() {
      const visualised = [];
      this.suggestions.forEach((suggestion) => {
        const details = [];
        if (suggestion.state === 1) {
          details.push('Everyone is available');
        } else {
          // Find who is not compatible with this suggestion
          Object.keys(this.participants).forEach((id) => {
            const uncertainGroups = findUncertain(
              this.participants[id].gridcode,
              suggestion,
            );
            if (uncertainGroups.length !== 0) {
              let detail;
              if (id === 'main-user') {
                detail = 'You are uncertain for';
              } else {
                detail = `${this.participants[id].name} is uncertain for`;
              }
              // Build uncertain time slot string
              let slotsVisualised = '';
              uncertainGroups.forEach((group, idx) => {
                const groupStart = times[group.start];
                const groupEnd = times[group.end];
                slotsVisualised = slotsVisualised.concat(`${groupStart} - ${groupEnd}`);
                if (uncertainGroups.length === 2 && idx === 0) {
                  slotsVisualised = slotsVisualised.concat(' and ');
                } else if (idx < uncertainGroups.length - 2) {
                  slotsVisualised = slotsVisualised.concat(', ');
                } else if (uncertainGroups.length > 2 && idx === uncertainGroups.length - 2) {
                  slotsVisualised = slotsVisualised.concat(' and ');
                }
              });
              details.push(`${detail} ${slotsVisualised}`);
            }
          });
        }
        visualised.push({
          title: `${days[suggestion.day]} ${times[suggestion.start]} - ${times[suggestion.end]}`,
          details,
          state: suggestion.state,
        });
      });
      return visualised;
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
    // For watchers
    refreshGridcode() {
      const gridcodes = [];
      Object.keys(this.participants).forEach((id) => {
        if (this.participants[id].isInvolved) {
          // Shift gridcode to selected timezone
          const shiftedCode = shiftTimezone(
            this.participants[id].gridcode,
            this.participants[id].timezone,
            this.timezone,
          );
          // Include the gridcode
          gridcodes.push(shiftedCode);
        }
      });
      // Calculate common availabilities
      this.gridcode = gridAggregate(gridcodes);
      // Grouping results
      this.suggestions = makeSuggestions(gridGroup(this.gridcode));
    },
  },
  watch: {
    participants: {
      handler() {
        // Update scheduling results
        this.refreshGridcode();
      },
      deep: true,
    },
    timezone() {
      this.refreshGridcode();
    },
  },
  mounted() {
    this.timezones = timezones;
    this.timezone = localtz;
    // Create main user's participant entry
    const [name, gridcode, timezone] = localStorage.getItem('code').split('$');
    this.participants['main-user'] = {
      name: `${name} (You)`,
      gridcode,
      timezone,
      isInvolved: true,
      insertedAt: Date.now(),
    };
  },
  activated() {
    // Load/reload main user's code when this view is visited(activated)
    const [name, gridcode, timezone] = localStorage.getItem('code').split('$');
    this.participants['main-user'].name = `${name} (You)`;
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
