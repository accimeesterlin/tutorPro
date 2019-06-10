/* eslint-disable import/no-extraneous-dependencies */
import { number } from '@storybook/addon-knobs';
import ResultsComponent from '../../src/components/molecules/Results.vue';

const Results = () => ({
  components: { ResultsComponent },
  props: {
    number: {
      type: Number,
      default: number('Number', 200),
    },
  },
  template: '<ResultsComponent :number="number"/>',
});

export default Results;
