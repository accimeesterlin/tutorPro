<template>
  <div class="sessions">
    <h2>Filter Search</h2>
    <Results :number="resultNumber"/>
    <div class="session-section">
      <SectionBox
        v-for="item in 10"
        v-bind:key="item"
        name="John Staylor"
        time="8:00 pm EST"
        date="Monday, June 08th 2019"/>
    </div>
  </div>
</template>


<script>
import SectionBox from '../molecules/SectionBox.vue';
import Results from '../molecules/Results.vue';

export default {
  name: 'Sessions',
  data() {
    return {
      resultNumber: 10,
      data: [],
    };
  },
  components: { SectionBox, Results },
};
</script>


<style>
    .sessions {
        /* display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center; */
        width: 860px;
        border: 1px solid lightgrey;
        /* margin: 0 auto; */
    }

    .session-section {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .session-section .section-box {
        margin-top: 10px;
    }

</style>
