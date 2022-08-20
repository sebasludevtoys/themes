---
to: "<%= h.toUpper(type) === h.toUpper('section') ? `${h.getSectionPath(type_location)}/${h.changeCase.snake(type_name)}/${h.capitalize(h.changeCase.camel(type_name))}.stories.tsx`: `${h.getComponentPath(type_location)}/${h.changeCase.snake(type_name)}/${h.capitalize(h.changeCase.camel(type_name))}.stories.tsx`%>"
---
import React from 'react';
import { ComponentStory,ComponentMeta } from '@storybook/react';
import {<%=h.capitalize(h.changeCase.camel(type_name))%>} from './<%=h.capitalize(h.changeCase.camel(type_name))%>'

export default {
title: "<%= h.toUpper(type) === h.toUpper('section') ? `${h.getSectionPath(type_location)}/${h.capitalize(h.changeCase.camel(type_name))}`: `${h.getComponentPath(type_location)}/${h.capitalize(h.changeCase.camel(type_name))}`%>",
component: <%=h.capitalize(h.changeCase.camel(type_name))%>,
args:{
    children:'hello'
},
} as ComponentMeta<typeof <%=h.capitalize(h.changeCase.camel(type_name))%>>;

const Template: ComponentStory<typeof <%=h.capitalize(h.changeCase.camel(type_name))%>> = (args) => <<%=h.capitalize(h.changeCase.camel(type_name))%> {...args}/>;

export const Default = Template.bind({});
export const Dark = Template.bind({});
Dark.parameters = {
  theme: "dark",
};
