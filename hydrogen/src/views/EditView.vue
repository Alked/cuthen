<template>
  <div>
    <edit />
  </div>
</template>

<script>
// @ is an alias to /src
import Edit from '@/components/edit/Edit.vue';

export default {
  name: 'EditView',
  components: {
    Edit,
  },
};
</script>
