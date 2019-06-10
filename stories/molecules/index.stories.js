/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import HeaderMolecules from './Header';
import MenuItems from './MenuItems';
import SectionBox from './SectionBox';
import HelpfulLinks from './HelpfulLinks';
import Results from './Results';
import TutorSidebarNavigationButtons from './TutorSidebarNavigationButtons';

const stories = storiesOf('Molecules', module);

// Add stories
stories.add('Header', HeaderMolecules);
stories.add('MenuItems', MenuItems);
stories.add('SectionBox', SectionBox);
stories.add('HelpfulLinks', HelpfulLinks);
stories.add('Results', Results);
stories.add('TutorSidebarNavigationButtons', TutorSidebarNavigationButtons);
