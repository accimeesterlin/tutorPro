/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import Sidebar from './Sidebar';
import Sessions from './Sessions';

const stories = storiesOf('Organisms', module);

// Add stories
stories.add('Sidebar', Sidebar);
stories.add('Sessions', Sessions);
