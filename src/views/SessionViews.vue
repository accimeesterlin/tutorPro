<template>
    <div class="session-view">
      <SessionTemplate />
    </div>
</template>


<script>
import SessionTemplate from '../components/templates/SessionTemplate.vue';

export default {
  name: 'SessionViews',
  components: { SessionTemplate },
};
</script>

<style scoped>
  .session-view {
    width: 907px;
  }

</style>
