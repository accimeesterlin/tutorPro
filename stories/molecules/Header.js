/* eslint-disable import/no-extraneous-dependencies */
import { text } from '@storybook/addon-knobs';

import HeaderComponent from '../../src/components/molecules/Header.vue';


const Header = () => ({
  components: { HeaderComponent },
  props: {
    title: {
      type: String,
      default: text('Title', 'Tutor Pro'),
    },
  },
  template: '<HeaderComponent :title="title" />',
});

export default Header;
