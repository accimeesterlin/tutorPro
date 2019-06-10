import { configure, addDecorator, addParameters } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

 // Configure global addons
addDecorator(withKnobs);

 // Add paremeters
addParameters({
  options: {
    name: 'Tutor Pro',
    brandTitle: 'Tutor Pro'
  }
});

 // automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

 configure(loadStories, module);