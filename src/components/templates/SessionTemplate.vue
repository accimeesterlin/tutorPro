<template>
  <div class="session-template">
    <Header title="Tutor Pro"/>
    <div class="session-template_container">
      <Sidebar/>
      <sessions/>
    </div>
  </div>
</template>


<script>
import Sidebar from '../organism/Sidebar.vue';
import Sessions from '../organism/Sessions.vue';
import Header from '../molecules/Header.vue';

export default {
  name: 'SessionTemplate',
  components: { Sidebar, Sessions, Header },
};
</script>

<style scoped>
  .session-template_container {
    display: flex;
    justify-content: space-between;
  }
</style>
