<template>
  <div class="schedule-view">
    <div class="info-block">
      <div class="info-col">
        <text-box :icon="'code'" v-model:data="code" :selectAllOnClick="true"/>
        <button class="button" @click="onClickInsert" :disabled="insertDisabled">
          <i class="pi pi-check" v-show="insertDisabled"></i>
          {{ insertLabel }}
        </button>
      </div>
      <div class="info-col">
        <card-holder icon="users" title="Participants">
          <participant-card name="You" :prohibitDelete="true" />
          <participant-card name="Super duper long name"/>
          <participant-card />
          <participant-card />
          <participant-card />
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
    <grid :isEditable="false"/>
  </div>
</template>

<script>
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
      code: '',
    };
  },
  computed: {
    insertLabel() {
      return this.insertDisabled ? '' : 'Insert';
    },
  },
  methods: {
    onClickInsert() {
      // TODO: insert the code into list
      // TODO: populate it to participants
      // TODO: include it into scheduling calculation
      this.insertDisabled = true;
      setTimeout(() => {
        this.insertDisabled = false;
      }, 800);
    },
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
</style>
