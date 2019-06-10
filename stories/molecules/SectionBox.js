/* eslint-disable import/no-extraneous-dependencies */
import { text } from '@storybook/addon-knobs';
import SectionBoxComponent from '../../src/components/molecules/SectionBox.vue';

const SectionBox = () => ({
  components: { SectionBoxComponent },
  props: {
    date: {
      type: String,
      default: text('Date', 'Monday, June 08th 2019'),
    },
    name: {
      type: String,
      default: text('Name', 'John Slay'),
    },
    time: {
      type: String,
      default: text('Time', '8:00 pm EST'),
    },
    imageUrl: {
      type: String,
      default: text('Image URL', 'https://via.placeholder.com/150'),
    },
  },
  template: '<SectionBoxComponent :name="name" :time="time" :date="date" :imageUrl="imageUrl"/>',
});

export default SectionBox;
