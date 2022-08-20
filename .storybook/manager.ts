import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create'


const theme = create({
    base: 'dark',
    brandTitle: 'Learning App',
    fontBase: '"Open sans"',
    fontCode: 'monospace',
  });
  
  addons.setConfig({
      theme,
      showPanel: true, // show addons panel by default
      panelPosition: 'right', // position addons panel on the right by default
    })
